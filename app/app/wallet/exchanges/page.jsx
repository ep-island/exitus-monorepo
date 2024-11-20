'use client'
import NavBar from '@/components/NavBar';
import { useState } from 'react';

export default function Exchange() {
  // State to manage form inputs and exchange status
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Mock API call to simulate exchange
  const mockApiCall = async (amount) => {
    // Simulating network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simulated exchange logic
    if (amount <= 0) {
      return { success: false, message: 'Amount must be greater than zero.' };
    }
    if (isNaN(amount)) {
      return { success: false, message: 'Invalid amount entered.' };
    }
    return { success: true, message: `Successfully exchanged ${amount} ALPH for ExitusCoin!` };
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);
    setSuccess(null);

    // Call the mock API
    const response = await mockApiCall(parseFloat(amount));

    setLoading(false);
    if (response.success) {
      setSuccess(response.message);
    } else {
      setError(response.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <NavBar />

      <main className="container mx-auto px-4 py-12">
        <section className="max-w-md mx-auto bg-gray-800 border border-gray-700 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Exchange ALPH for ExitusCoin</h2>
          <p className="text-gray-400 text-center mb-8">
            Convert your ALPH cryptocurrency to ExitusCoin instantly. The current exchange rate is 1 ALPH = 1 ExitusCoin.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Input Amount */}
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="amount">
                Enter ALPH to Exchange
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300 text-lg font-semibold"
              disabled={loading}
            >
              {loading ? 'Exchanging...' : 'Exchange Now'}
            </button>
          </form>

          {/* Displaying Success or Error Message */}
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          {success && <p className="text-green-500 text-center mt-4">{success}</p>}
        </section>

        
      </main>
    </div>
  );
}
