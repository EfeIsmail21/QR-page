import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [qrData, setQrData] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = JSON.stringify({
      "android:autofillHints": ["emailAddress", "password"],
      "email": email,
      "password": password,
      "type": "login_credentials",
      "timestamp": new Date().toISOString()
    });
    setQrData(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center px-4 sm:px-6">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto w-full">
        <div className="relative px-4 py-8 bg-white shadow-lg sm:rounded-3xl sm:p-16 w-full">
          <h1 className="text-2xl font-bold text-center mb-6 text-[rgb(223,46,46)]">QR Login Generator from Reckon.ai</h1>
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-6 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[rgb(223,46,46)] focus:border-[rgb(223,46,46)]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[rgb(223,46,46)] focus:border-[rgb(223,46,46)]"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium btn-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgb(223,46,46)]"
                  >
                    Generate QR Code
                  </button>
                </form>
              </div>
              {qrData && (
                <div className="pt-6 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="flex justify-center">
                    <QRCodeSVG value={qrData} size={200} bgColor={"#FFFFFF"} fgColor={"#000000"} level={"M"} />
                  </div>
                  <p className="text-sm text-gray-500 text-center">
                    Scan this QR code to sign in on the Vuzix Blade 2 replenishment app
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;