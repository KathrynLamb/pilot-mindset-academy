// app/admin/login/page.tsx
"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Plane } from 'lucide-react';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push('/admin');
    } else {
      setError('Access Denied');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl w-full max-w-md shadow-2xl">
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-blue-500/10 rounded-full">
            <Plane className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-white text-center mb-2">Flight Deck Access</h1>
        <p className="text-gray-400 text-center mb-8">Authorized Personnel Only</p>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black border border-gray-700 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-blue-500 transition"
                placeholder="Enter access code"
              />
            </div>
          </div>
          {error && <p className="text-red-400 text-sm text-center">{error}</p>}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition">
            Enter Cockpit
          </button>
        </form>
      </div>
    </div>
  );
}