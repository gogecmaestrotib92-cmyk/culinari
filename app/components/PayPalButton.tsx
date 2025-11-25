'use client';

import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useState } from 'react';

interface PayPalButtonProps {
  amount: string;
  description: string;
  onSuccess?: (details: any) => void;
}

export default function PayPalButton({ amount, description, onSuccess }: PayPalButtonProps) {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const initialOptions = {
    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'test',
    currency: 'EUR', // Change to RSD if PayPal supports Serbian Dinar
    intent: 'capture',
  };

  return (
    <div className="max-w-md mx-auto">
      {success ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg text-center">
          <p className="font-semibold text-lg mb-2">✅ Plaćanje Uspešno!</p>
          <p>Hvala vam na kupovini. Kontaktiraćemo vas uskoro.</p>
        </div>
      ) : (
        <PayPalScriptProvider options={initialOptions}>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="mb-4 text-center">
              <p className="text-gray-700 mb-2">{description}</p>
              <p className="text-3xl font-bold text-orange-600">€{amount}</p>
            </div>
            
            <PayPalButtons
              style={{
                layout: 'vertical',
                color: 'gold',
                shape: 'rect',
                label: 'pay',
              }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: amount,
                        currency_code: 'EUR',
                      },
                      description: description,
                    },
                  ],
                  intent: 'CAPTURE',
                });
              }}
              onApprove={async (data, actions) => {
                if (actions.order) {
                  const details = await actions.order.capture();
                  setSuccess(true);
                  setError(null);
                  
                  // Call the success callback if provided
                  if (onSuccess) {
                    onSuccess(details);
                  }
                  
                  console.log('Payment successful:', details);
                }
              }}
              onError={(err) => {
                console.error('PayPal error:', err);
                setError('Došlo je do greške pri plaćanju. Pokušajte ponovo.');
              }}
              onCancel={() => {
                setError('Plaćanje je otkazano.');
              }}
            />
            
            {error && (
              <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}
          </div>
        </PayPalScriptProvider>
      )}
    </div>
  );
}
