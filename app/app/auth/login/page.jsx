'use client'
import NavBar from '@/components/NavBar';
import { useState } from 'react';
import Link from 'next/link';

export default function Login() {
  // State to manage form inputs and loading/error states
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Mock API call to simulate login
  const mockApiCall = async (userData) => {
    // Simulating network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Mock success or error
    if (userData.email === 'user@example.com' && userData.password === 'password123') {
      return { success: true, message: 'Login successful!' };
    } else {
      return { success: false, message: 'Invalid email or password!' };
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);
    setSuccess(false);

    // Call the mock API
    const response = await mockApiCall(formData);

    setLoading(false);
    if (response.success) {
      setSuccess(true);
    } else {
      setError(response.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <NavBar />

      <main className="container mx-auto px-4 py-12">
        <section className="max-w-md mx-auto bg-gray-800 border border-gray-700 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Log In</h2>
          <p className="text-gray-400 text-center mb-8">
            Welcome back! Log in to your Exitus account to continue.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="example@example.com"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="••••••••"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300 text-lg font-semibold"
              disabled={loading}
            >
              {loading ? 'Logging In...' : 'Log In'}
            </button>
          </form>

          {/* Displaying Success or Error Message */}
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          {success && (
            <p className="text-green-500 text-center mt-4">
              Login successful!{' '}
              <Link href="/">
                <span className="text-blue-400 hover:underline">Go to Dashboard</span>
              </Link>
            </p>
          )}

          <p className="text-gray-400 text-center mt-6">
            Don't have an account?{' '}
            <Link href="/auth/signup">
              <span className="text-blue-400 hover:underline">Sign Up</span>
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}
