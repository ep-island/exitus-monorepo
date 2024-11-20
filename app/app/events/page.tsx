'use client'
import React, { useState } from 'react'
import { Wallet, TrendingUp, AlertTriangle } from 'lucide-react'
import NavBar from '@/components/NavBar'

export default function ElectionBettingPage() {
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null)
  const [betAmount, setBetAmount] = useState<string>('')

  const handleBet = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically interact with a smart contract
    alert(`Placed bet of ${betAmount} ExitusCoin on ${selectedCandidate}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white">
        <NavBar />

      <main className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold mb-8 text-center">US Election 2024 Betting</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {['Candidate A', 'Candidate B'].map((candidate) => (
            <div key={candidate} className="bg-blue-800 border border-blue-700 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">{candidate}</h3>
              <p className="text-xl mb-4">Current Odds: <span className="font-bold text-green-400">1</span></p>
              <button
                onClick={() => setSelectedCandidate(candidate)}
                className={`w-full px-4 py-2 rounded-md transition-colors duration-300 ${
                  selectedCandidate === candidate
                    ? 'bg-green-500 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                Select {candidate}
              </button>
            </div>
          ))}
        </div>

        <div className="bg-blue-800 border border-blue-700 rounded-lg p-6 mb-12">
          <h3 className="text-2xl font-semibold mb-4">Place Your Bet</h3>
          <form onSubmit={handleBet} className="space-y-4">
            <div>
              <label htmlFor="betAmount" className="block text-sm font-medium mb-1">
                Bet Amount (ExitusCoin)
              </label>
              <input
                type="number"
                id="betAmount"
                value={betAmount}
                onChange={(e) => setBetAmount(e.target.value)}
                className="w-full px-3 py-2 bg-blue-900 border border-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="0.1"
                step="0.01"
                min="0.01"
                required
              />
            </div>
            <button
              type="submit"
              disabled={!selectedCandidate || !betAmount}
              className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Place Bet
            </button>
          </form>
        </div>

        <div className="bg-yellow-800 border border-yellow-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <AlertTriangle className="mr-2 h-5 w-5" /> Important Information
          </h3>
          <ul className="list-disc list-inside space-y-2 text-yellow-100">
            <li>All bets are final and cannot be cancelled once placed.</li>
            <li>Odds may fluctuate based on betting activity and real-world events.</li>
            <li>Ensure you're familiar with the smart contract terms before betting.</li>
            <li>Betting responsibly is crucial. Don't bet more than you can afford to lose.</li>
          </ul>
        </div>
      </main>
    </div>
  )
}