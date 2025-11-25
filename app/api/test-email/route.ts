import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    console.log('Testing with verified domain airecepti.com...');
    
    // Send test email from verified domain
    const { data, error } = await resend.emails.send({
      from: 'AI Recepti <noreply@airecepti.com>',
      to: 'gogecmaestrotib92@gmail.com',
      subject: '🎉 Test Email - AI Recepti domen verifikovan!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #f97316, #fbbf24); padding: 30px; text-align: center; border-radius: 12px;">
            <h1 style="color: white; margin: 0;">✅ Domen Verifikovan!</h1>
          </div>
          <div style="padding: 30px; background: #fff; border: 1px solid #e5e7eb;">
            <p>Čestitamo! Tvoj domen <strong>airecepti.com</strong> je uspešno verifikovan.</p>
            <p>Sada možeš slati email-ove svim kupcima! 🎉</p>
            <p>Vreme: ${new Date().toLocaleString('sr-RS')}</p>
          </div>
        </div>
      `,
    });

    console.log('Result - data:', data);
    console.log('Result - error:', error);

    if (error) {
      return NextResponse.json({ success: false, error: error.message, details: error }, { status: 500 });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent from send.airecepti.com!',
      emailId: data?.id
    });

  } catch (error: any) {
    console.error('Catch error:', error);
    return NextResponse.json({ success: false, error: error.message, stack: error.stack }, { status: 500 });
  }
}
