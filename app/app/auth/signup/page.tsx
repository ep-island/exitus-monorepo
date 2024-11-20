import NavBar from '@/components/NavBar';
import Link from 'next/link';

export default function Signup() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <NavBar />

      <main className="container mx-auto px-4 py-12">
        <section className="max-w-md mx-auto bg-gray-800 border border-gray-700 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Create an Account</h2>
          <p className="text-gray-400 text-center mb-8">
            Join Exitus and start betting securely and transparently on US elections.
          </p>

          <form className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
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
                placeholder="••••••••"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Confirm Password Input */}
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="confirm-password">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                placeholder="••••••••"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300 text-lg font-semibold"
            >
              Sign Up
            </button>
          </form>

          <p className="text-gray-400 text-center mt-6">
            Already have an account?{' '}
            <Link href="/auth/login">
              <span className="text-blue-400 hover:underline">Log In</span>
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}
