'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function SuccessContent() {
  const searchParams = useSearchParams();
  const [orderDetails, setOrderDetails] = useState({
    product: '',
    orderId: '',
    amount: ''
  });

  useEffect(() => {
    const product = searchParams.get('product') || 'E-Knjiga Recepata';
    const orderId = searchParams.get('orderId') || 'CUL-' + Date.now();
    const amount = searchParams.get('amount') || '16.99';
    
    setOrderDetails({ product, orderId, amount });
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full">
        {/* Success Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-8 text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Hvala na kupovini! 🎉</h1>
            <p className="text-green-100">Tvoja narudžbina je uspešno obrađena</p>
          </div>

          {/* Order Details */}
          <div className="p-8">
            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span>📦</span> Detalji narudžbine
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Broj narudžbine:</span>
                  <span className="font-mono text-sm bg-gray-200 px-3 py-1 rounded-lg">#{orderDetails.orderId.slice(-8)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Proizvod:</span>
                  <span className="font-medium text-gray-800">{orderDetails.product}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Ukupno plaćeno:</span>
                  <span className="font-bold text-xl text-green-600">€{orderDetails.amount}</span>
                </div>
              </div>
            </div>

            {/* Email Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📧</span>
                <div>
                  <h3 className="font-semibold text-blue-800 mb-1">Proveri svoj email!</h3>
                  <p className="text-blue-700 text-sm">
                    Poslali smo ti email sa potvrdom narudžbine i linkom za preuzimanje e-knjige.
                    Ako ne vidiš email, proveri i spam folder.
                  </p>
                </div>
              </div>
            </div>

            {/* Download Button (for ebook) */}
            {orderDetails.product.includes('E-Knjiga') && (
              <a
                href="/ebook/ai-recepti.pdf"
                download
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg hover:shadow-xl mb-4"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                📥 Preuzmi E-Knjigu Odmah
              </a>
            )}

            {/* Back to Home */}
            <Link
              href="/"
              className="w-full bg-gray-100 text-gray-700 font-medium py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-all"
            >
              ← Nazad na početnu
            </Link>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-8 py-4 text-center border-t border-gray-100">
            <p className="text-gray-500 text-sm">
              Imaš pitanja? Piši nam na{' '}
              <a href="mailto:podrska@airecepti.com" className="text-orange-500 hover:underline">
                podrska@airecepti.com
              </a>
            </p>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex justify-center gap-6 mt-6 text-gray-400 text-sm">
          <span className="flex items-center gap-1">🔒 Sigurna kupovina</span>
          <span className="flex items-center gap-1">✅ Instant dostava</span>
        </div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin text-4xl mb-4">⏳</div>
          <p className="text-gray-600">Učitavanje...</p>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
