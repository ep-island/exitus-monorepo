import NavBar from '@/components/NavBar'
import { Wallet, TrendingUp, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <NavBar />

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Bet on Democracy with Exitus</h2>
          <p className="text-xl mb-8">Participate in secure, transparent betting on US elections using blockchain technology.</p>
          <Link href={"/auth/signup"}>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300 text-lg font-semibold">
              Start Betting
            </button>
          </Link>

        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Featured Bets</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "2024 Presidential Election", description: "Who will win the next US presidential election?", odds: "3.5 to 1" },
              { title: "Senate Majority", description: "Which party will control the Senate after the 2024 elections?", odds: "2 to 1" },
              { title: "House Speaker", description: "Who will be the next Speaker of the House?", odds: "5 to 1" },
            ].map((bet, index) => (
              <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{bet.title}</h4>
                  <p className="text-gray-400 mb-4">{bet.description}</p>
                  <p className="text-2xl font-bold text-blue-400 mb-4">{bet.odds}</p>
                  <Link href={"/events"}>
                  <button className="w-full px-4 py-2 border border-white text-white hover:bg-white hover:text-gray-900 rounded-md transition-colors duration-300">
                    Place Bet
                  </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h3 className="text-2xl font-bold mb-6">Why Choose Exitus?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <TrendingUp className="h-12 w-12 mb-4" />, title: "Transparent", description: "All bets and outcomes are recorded on the blockchain for full transparency." },
              { icon: <ShieldCheck className="h-12 w-12 mb-4" />, title: "Secure", description: "Smart contracts ensure fair and tamper-proof betting processes." },
              { icon: <Wallet className="h-12 w-12 mb-4" />, title: "Decentralized", description: "No central authority - the community governs the platform." },
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                {feature.icon}
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

    </div>
  )
}