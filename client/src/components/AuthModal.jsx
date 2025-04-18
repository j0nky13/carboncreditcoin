import React, { useState } from 'react';

export default function AuthModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    method: 'email',
    value: '',
    otp: '',
    name: '',
    address: '',
    referral: '',
    discord: '',
    country: '',
    isNodeBuyer: false,
    updatesOptIn: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSendCode = () => {
    // TODO: Trigger backend to send OTP via Twilio/SendGrid
    setStep(2);
  };

  const handleVerifyCode = () => {
    // TODO: Verify code via backend
    const isNewUser = true; // Replace with real response
    if (isNewUser) setStep(3);
    else onClose(); // redirect to dashboard
  };

  const handleRegister = () => {
    // TODO: Register user in backend
    onClose(); // redirect to dashboard
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl w-full max-w-md">
        {step === 1 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Enter your Email or Phone</h2>
            <input
              type="text"
              name="value"
              placeholder="you@example.com or +123456789"
              value={formData.value}
              onChange={handleChange}
              className="w-full p-2 rounded mb-4 border"
            />
            <button onClick={handleSendCode} className="w-full bg-blue-600 text-white p-2 rounded">
              Send Code
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Enter the OTP Code</h2>
            <input
              type="text"
              name="otp"
              placeholder="123456"
              value={formData.otp}
              onChange={handleChange}
              className="w-full p-2 rounded mb-4 border"
            />
            <button onClick={handleVerifyCode} className="w-full bg-green-600 text-white p-2 rounded">
              Verify Code
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-3">
            <h2 className="text-xl font-bold">Complete Registration</h2>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded border"
            />
            <input
              type="text"
              name="address"
              placeholder="Shipping Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 rounded border"
            />
            <input
              type="text"
              name="referral"
              placeholder="Referral Code (optional)"
              value={formData.referral}
              onChange={handleChange}
              className="w-full p-2 rounded border"
            />
            <input
              type="text"
              name="discord"
              placeholder="Discord Handle (optional)"
              value={formData.discord}
              onChange={handleChange}
              className="w-full p-2 rounded border"
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-2 rounded border"
            />
            <label className="flex items-center">
              <input
                type="checkbox"
                name="isNodeBuyer"
                checked={formData.isNodeBuyer}
                onChange={handleChange}
                className="mr-2"
              />
              I want to buy a node
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="updatesOptIn"
                checked={formData.updatesOptIn}
                onChange={handleChange}
                className="mr-2"
              />
              Receive updates via email/SMS
            </label>
            <button onClick={handleRegister} className="w-full bg-blue-700 text-white p-2 rounded">
              Complete Registration
            </button>
          </div>
        )}
      </div>
    </div>
  );
}