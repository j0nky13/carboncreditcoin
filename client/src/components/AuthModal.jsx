import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AuthModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [method, setMethod] = useState('email');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [userExists, setUserExists] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSendOtp = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:8080/api/auth/send-otp', {
        contact: formData.value,
        method,
      });
      if (response.data.success) {
        setUserExists(response.data.userExists || false);
        setStep(2);
      } else {
        setError('Failed to send OTP.');
      }
    } catch (err) {
      setError('Could not send OTP.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:8080/api/auth/verify-otp', {
        contact: formData.value,
        method,
        otp: formData.otp,
      });
      if (response.data.valid) {
        if (response.data.userExists) {
          onClose();
          navigate('/dashboard');
        } else {
          setStep(3);
        }
      } else {
        setError('Invalid or expired OTP.');
      }
    } catch (err) {
      setError('OTP verification failed.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:8080/api/auth/register-user', {
        contact: formData.value,
        name: formData.name,
        address: formData.address,
        referral: formData.referral,
        discord: formData.discord,
        country: formData.country,
        isNodeBuyer: formData.isNodeBuyer,
        updatesOptIn: formData.updatesOptIn,
      });

      if (response.data.success) {
        onClose();
        navigate('/dashboard');
      } else {
        setError('Registration failed.');
      }
    } catch (err) {
      setError('Registration error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-2xl w-full max-w-md text-center">
        {step === 1 && (
          <div className="space-y-5">
            <h1 className="text-2xl font-bold text-lime-400">Welcome to Carbon Credit Coin</h1>
            <p className="text-sm text-gray-400">Access your ICO dashboard, merch, and more.</p>
            <h2 className="text-lg font-semibold">Login or Register</h2>

            <div className="flex justify-center gap-4">
              <button
                className={`px-4 py-2 rounded font-medium ${method === 'email' ? 'bg-lime-500 text-black' : 'bg-gray-700 text-white'}`}
                onClick={() => setMethod('email')}
              >
                Email
              </button>
              <button
                className={`px-4 py-2 rounded font-medium ${method === 'phone' ? 'bg-lime-500 text-black' : 'bg-gray-700 text-white'}`}
                onClick={() => setMethod('phone')}
              >
                Phone
              </button>
            </div>

            <input
              type={method === 'email' ? 'email' : 'tel'}
              name="value"
              placeholder={method === 'email' ? 'Enter your email' : 'Enter your phone number'}
              value={formData.value}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white text-black placeholder-gray-500 border-none focus:outline-none"
            />

            <button
              onClick={handleSendOtp}
              disabled={loading}
              className="w-full bg-lime-500 hover:bg-lime-400 text-black font-bold py-2 px-4 rounded-lg transition-all"
            >
              {loading ? 'Sending...' : 'Send OTP'}
            </button>

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <button onClick={onClose} className="text-sm text-lime-400 hover:underline mt-2">
              ← Back to homepage
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Enter the OTP Code</h2>
            <input
              type="text"
              name="otp"
              placeholder="123456"
              value={formData.otp}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white text-black placeholder-gray-500 border-none focus:outline-none"
            />
            <button
              onClick={handleVerifyOtp}
              disabled={loading}
              className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-4 rounded-lg"
            >
              {loading ? 'Verifying...' : 'Verify Code'}
            </button>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button
              onClick={() => setStep(1)}
              className="text-sm text-lime-400 hover:underline"
            >
              ← Back
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
              className="w-full p-2 rounded bg-white text-black placeholder-gray-500"
            />
            <input
              type="text"
              name="address"
              placeholder="Shipping Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 rounded bg-white text-black placeholder-gray-500"
            />
            <input
              type="text"
              name="referral"
              placeholder="Referral Code (optional)"
              value={formData.referral}
              onChange={handleChange}
              className="w-full p-2 rounded bg-white text-black placeholder-gray-500"
            />
            <input
              type="text"
              name="discord"
              placeholder="Discord Handle (optional)"
              value={formData.discord}
              onChange={handleChange}
              className="w-full p-2 rounded bg-white text-black placeholder-gray-500"
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-2 rounded bg-white text-black placeholder-gray-500"
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
            <button
              onClick={handleRegister}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
            >
              {loading ? 'Registering...' : 'Complete Registration'}
            </button>
            {error && <p className="text-red-400 text-sm">{error}</p>}
          </div>
        )}
      </div>
    </div>
  );
}