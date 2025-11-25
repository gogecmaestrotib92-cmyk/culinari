import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { customerEmail, customerName, product, amount, orderId } = body;

    // Validate required fields
    if (!customerEmail || !product || !amount) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send confirmation email to customer
    const { data, error } = await resend.emails.send({
      from: 'Culinari <noreply@culinari.rs>', // Change to your verified domain
      to: customerEmail,
      subject: `✅ Potvrda narudžbine - ${product}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #f97316, #fbbf24); padding: 30px; text-align: center; border-radius: 12px 12px 0 0; }
            .header h1 { color: white; margin: 0; font-size: 28px; }
            .content { background: #fff; padding: 30px; border: 1px solid #e5e7eb; }
            .order-box { background: #f9fafb; border-radius: 8px; padding: 20px; margin: 20px 0; }
            .order-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e5e7eb; }
            .order-row:last-child { border-bottom: none; font-weight: bold; }
            .button { display: inline-block; background: #f97316; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: bold; margin-top: 20px; }
            .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 Hvala na kupovini!</h1>
            </div>
            <div class="content">
              <p>Zdravo${customerName ? ` ${customerName}` : ''},</p>
              <p>Tvoja narudžbina je uspešno primljena i obrađena!</p>
              
              <div class="order-box">
                <h3 style="margin-top: 0;">📦 Detalji narudžbine</h3>
                <div class="order-row">
                  <span>Broj narudžbine:</span>
                  <span>#${orderId || 'CUL-' + Date.now()}</span>
                </div>
                <div class="order-row">
                  <span>Proizvod:</span>
                  <span>${product}</span>
                </div>
                <div class="order-row">
                  <span>Ukupno:</span>
                  <span>€${amount}</span>
                </div>
              </div>

              ${product.includes('E-Knjiga') ? `
              <h3>📚 Pristup E-Knjizi</h3>
              <p>Tvoja e-knjiga je spremna za preuzimanje! Klikni na dugme ispod:</p>
              <a href="https://culinari.rs/download?order=${orderId || Date.now()}" class="button">
                📥 Preuzmi E-Knjigu
              </a>
              ` : ''}

              ${product.includes('Planner') ? `
              <h3>🤖 AI Meal Planner</h3>
              <p>Tvoja pretplata je aktivirana! Prijavi se na svoj nalog da počneš:</p>
              <a href="https://culinari.rs/login" class="button">
                🚀 Pristupi Planner-u
              </a>
              ` : ''}

              <p style="margin-top: 30px;">Ako imaš bilo kakvih pitanja, slobodno mi piši na <a href="mailto:vanja@culinari.rs">vanja@culinari.rs</a></p>
              
              <p>Srdačan pozdrav,<br><strong>Vanja</strong><br>Culinari</p>
            </div>
            <div class="footer">
              <p>© 2025 Culinari - Zdravi Deserti</p>
              <p>Ovaj email je poslat jer si izvršio/la kupovinu na culinari.rs</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error('Email error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Also send notification to you (the seller)
    await resend.emails.send({
      from: 'Culinari <noreply@culinari.rs>',
      to: 'vanja@culinari.rs', // Change to your email
      subject: `🛒 Nova narudžbina - ${product}`,
      html: `
        <h2>Nova narudžbina!</h2>
        <p><strong>Kupac:</strong> ${customerEmail}</p>
        <p><strong>Proizvod:</strong> ${product}</p>
        <p><strong>Iznos:</strong> €${amount}</p>
        <p><strong>Vreme:</strong> ${new Date().toLocaleString('sr-RS')}</p>
      `,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Confirmation email sent',
      emailId: data?.id 
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Failed to send confirmation' },
      { status: 500 }
    );
  }
}
