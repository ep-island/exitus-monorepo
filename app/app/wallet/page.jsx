'use client'
import NavBar from '@/components/NavBar';
import { useState, useEffect } from 'react';

export default function Wallet() {
  // Mock user data
  const [balance, setBalance] = useState(5000); // ExitusCoin balance
  const [transactions, setTransactions] = useState([]);

  // Mock API call to fetch transactions
  const fetchTransactions = async () => {
    // Simulating network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Mock transaction data
    return [
      { id: 1, date: '2024-11-18', description: 'Converted 50 ALPH to ExitusCoin', amount: '+500', type: 'credit' },
      { id: 2, date: '2024-11-15', description: 'Placed bet on Presidential Election', amount: '-300', type: 'debit' },
      { id: 3, date: '2024-11-12', description: 'Reward for successful bet', amount: '+800', type: 'credit' },
    ];
  };

  // Fetch transactions on component mount
  useEffect(() => {
    const loadTransactions = async () => {
      const data = await fetchTransactions();
      setTransactions(data);
    };

    loadTransactions();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <NavBar />

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Wallet</h2>
          <p className="text-gray-400 mb-8">View your current ExitusCoin balance and transaction history.</p>

          {/* Balance Display */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg py-6 px-8 inline-block">
            <h3 className="text-xl font-semibold mb-2">Current Balance</h3>
            <p className="text-4xl font-bold text-green-400">{balance} ExitusCoin</p>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-6">Transaction History</h3>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            {/* Transactions Table */}
            <table className="w-full text-left text-gray-400">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Description</th>
                  <th className="py-3 px-4">Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="border-b border-gray-700 hover:bg-gray-900 transition-colors duration-300"
                  >
                    <td className="py-3 px-4">{transaction.date}</td>
                    <td className="py-3 px-4">{transaction.description}</td>
                    <td
                      className={`py-3 px-4 font-semibold ${
                        transaction.type === 'credit' ? 'text-green-400' : 'text-red-400'
                      }`}
                    >
                      {transaction.amount} ExitusCoin
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* No Transactions */}
            {transactions.length === 0 && (
              <p className="text-center text-gray-400 mt-4">No transactions to show.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
