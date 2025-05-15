import React from 'react';
import { useState } from "react";

const users = [
  { name: "elondoge", iq: 148 },
  { name: "brainmax", iq: 142 },
  { name: "rektgod", iq: 69 },
  { name: "degenwizard", iq: 118 },
];

export default function App() {
  const [vote, setVote] = useState(null);

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-3xl">🧠</span>
          <h1 className="text-2xl font-bold">Braincell</h1>
        </div>
        <a
          href="https://t.me/braincell_bot"
          target="_blank"
          className="px-4 py-2 border rounded-xl text-sm hover:bg-gray-100"
        >
          Launch Telegram Bot
        </a>
      </header>

      <div className="mt-12 max-w-xl">
        <h2 className="text-2xl font-bold mb-2">Tokenize your stupidity. Or someone else's.</h2>
        <p className="mb-6 text-gray-700">Vote on tweets, earn $CELL. IQ is the new currency. Mint for smart. Burn for dumb.</p>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setVote("smart")}
            className="px-4 py-2 bg-green-200 rounded-xl hover:bg-green-300"
          >
            🧠 Smart
          </button>
          <button
            onClick={() => setVote("dumb")}
            className="px-4 py-2 bg-red-200 rounded-xl hover:bg-red-300"
          >
            🪙 Dumb
          </button>
        </div>

        {vote && (
          <p className="mt-4 text-gray-600">You voted this tweet as: <strong>{vote}</strong></p>
        )}
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-3">🎖 NFT Badges</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border p-4 rounded-xl text-center">
            <div className="text-3xl">🧠</div>
            <p className="font-bold">Certified Brain</p>
          </div>
          <div className="border p-4 rounded-xl text-center">
            <div className="text-3xl">🪙</div>
            <p className="font-bold">Top Degen</p>
          </div>
          <div className="border p-4 rounded-xl text-center">
            <div className="text-3xl">🔥</div>
            <p className="font-bold">IQ Farmer</p>
          </div>
          <div className="border p-4 rounded-xl text-center">
            <div className="text-3xl">🤖</div>
            <p className="font-bold">AI Overlord</p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-3">🏆 Leaderboard</h3>
        <div className="border rounded-xl overflow-hidden">
          {users.map((user, i) => (
            <div key={i} className="flex justify-between p-3 border-b last:border-b-0">
              <span>@{user.name}</span>
              <span className="font-mono">{user.iq}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
