// app/admin/page.tsx
import { Users, TrendingUp, Activity, Search, Shield, Brain, Zap } from 'lucide-react';

// Mock data - replace with a real database call (e.g., Prisma) later
const waitlistUsers = [
  { id: 1, email: 'ace.pilot@example.com', date: '2025-01-12', status: 'Priority' },
  { id: 2, email: 'maverick@topgun.com', date: '2025-01-14', status: 'Pending' },
  { id: 3, email: 'student.pilot@raf.com', date: '2025-01-15', status: 'Approved' },
  // ... more users
];

const activeSkills = [
  { name: "Mental Clarity", level: "Elite", status: "Active" },
  { name: "Decision Protocol", level: "Mastery", status: "Active" },
  { name: "Stress Immunity", level: "Core", status: "Review" },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Nav */}
      <nav className="border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-bold tracking-wider">COMMAND CENTER</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>Admin Level 1</span>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-900/50 border border-white/5 rounded-2xl p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-gray-400 text-sm">Total Cadets</p>
                <h3 className="text-3xl font-bold mt-1">1,284</h3>
              </div>
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
            </div>
            <div className="text-sm text-green-400 flex items-center gap-1">
              <TrendingUp className="w-4 h-4" /> +12% this week
            </div>
          </div>

          <div className="bg-gray-900/50 border border-white/5 rounded-2xl p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-gray-400 text-sm">System Status</p>
                <h3 className="text-3xl font-bold mt-1">Operational</h3>
              </div>
              <div className="p-2 bg-green-500/10 rounded-lg">
                <Activity className="w-6 h-6 text-green-400" />
              </div>
            </div>
            <div className="text-sm text-gray-400">All systems go</div>
          </div>

          <div className="bg-gray-900/50 border border-white/5 rounded-2xl p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-gray-400 text-sm">Waitlist Conversion</p>
                <h3 className="text-3xl font-bold mt-1">48.2%</h3>
              </div>
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
            </div>
            <div className="text-sm text-purple-400">Above target</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Waitlist Section */}
          <div className="lg:col-span-2 bg-gray-900/50 border border-white/5 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-white/5 flex justify-between items-center">
              <h2 className="text-xl font-bold">Recent Signups</h2>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-3 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Search emails..." 
                  className="bg-black border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-white/5 text-gray-400 text-xs uppercase">
                  <tr>
                    <th className="px-6 py-4">Email</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {waitlistUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-white/5 transition">
                      <td className="px-6 py-4 text-sm font-medium">{user.email}</td>
                      <td className="px-6 py-4 text-sm text-gray-400">{user.date}</td>
                      <td className="px-6 py-4">
                        <span className={`text-xs px-2 py-1 rounded-full border ${
                          user.status === 'Priority' ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' :
                          user.status === 'Approved' ? 'bg-green-500/10 border-green-500/20 text-green-400' :
                          'bg-gray-500/10 border-gray-500/20 text-gray-400'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pilot Skills Management Section */}
          <div className="bg-gray-900/50 border border-white/5 rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Brain className="w-5 h-5 text-purple-400" />
              Active Modules
            </h2>
            <div className="space-y-4">
              {activeSkills.map((skill, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-black/40 border border-white/5 rounded-xl hover:border-blue-500/30 transition group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-500/20 transition">
                      <Shield className="w-4 h-4 text-gray-400 group-hover:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{skill.name}</h4>
                      <p className="text-xs text-gray-500">{skill.level}</p>
                    </div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                </div>
              ))}
              <button className="w-full py-3 mt-4 border border-dashed border-gray-700 rounded-xl text-gray-500 text-sm hover:border-gray-500 hover:text-gray-300 transition">
                + Add New Skill Module
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}