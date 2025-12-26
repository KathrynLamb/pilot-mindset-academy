"use client"

import React, { useState } from 'react';
import { Plane, Brain, Target, Zap, TrendingUp, Shield, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

export default function PilotMindsetWaitlist() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Store in memory for demo - you'll wire this up to your backend
    console.log('Waitlist signup:', email);
    setSubmitted(true);
    setError('');
  };

  const skills = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Mental Clarity Under Pressure",
      description: "Master the cognitive frameworks pilots use to stay razor-sharp when stakes are highest"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Instant Decision Protocols",
      description: "Learn the systematic approach to making critical decisions in seconds, not minutes"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Stress Immunity",
      description: "Build the psychological armor that keeps elite pilots calm in chaos"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Situational Mastery",
      description: "Develop 360° awareness that anticipates problems before they materialize"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Peak Performance Mindset",
      description: "Access the mental state where your best work happens consistently"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Error-Proof Communication",
      description: "Communicate with precision that eliminates misunderstanding when it matters most"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Aviation Safety Record", sublabel: "Built on psychology" },
    { number: "< 3 sec", label: "Average Decision Time", sublabel: "In emergencies" },
    { number: "10,000+", label: "Hours of Training", sublabel: "Distilled for you" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-950 via-black to-purple-950 opacity-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0iIzFmNmZlZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
              <Plane className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300 font-medium">Launching Soon</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              Think Like a Pilot
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
              Master the psychological skills that keep aviators
            </p>
            <p className="text-2xl md:text-3xl text-gray-300 mb-12 font-light">
              <span className="text-blue-400 font-semibold">calm, focused, and flawless</span> under extreme pressure
            </p>

            {!submitted ? (
              <div className="max-w-2xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                    onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
                  />
                  <button
                    onClick={handleSubmit}
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 group"
                  >
                    <span>Join Waitlist</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <p className="text-gray-400 text-sm">
                  🎁 Early access + <span className="text-blue-400 font-semibold">40% launch discount</span> for waitlist members
                </p>
              </div>
            ) : (
              <div className="max-w-2xl mx-auto bg-green-500/10 border border-green-500/30 rounded-xl p-8 backdrop-blur-sm">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-400 mb-2">You're on the list! ✈️</h3>
                <p className="text-gray-300">We'll email you as soon as we launch. Get ready to level up your mental game.</p>
              </div>
            )}
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold text-white mb-1">{stat.label}</div>
                  <div className="text-gray-400">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                What You'll Master
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                These aren't just aviation concepts—they're transformative mental skills that elevate performance in any high-stakes arena
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-300"></div>
                  <div className="relative">
                    <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The Problem Section */}
        <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-center">
                Why Pilots Never Crack Under Pressure
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Commercial pilots face life-or-death decisions with hundreds of lives in their hands. A single moment of panic, indecision, or mental fog could end in catastrophe.
                </p>
                <p>
                  Yet aviation maintains a <span className="text-blue-400 font-semibold">99.9% safety record</span>—the safest form of transportation ever created.
                </p>
                <p className="text-xl text-white font-semibold">
                  How? They've mastered psychological skills that most people never learn.
                </p>
                <p>
                  Skills like managing cognitive load, maintaining situational awareness, executing decision protocols, and staying calm when everything goes wrong. These aren't innate talents—they're <span className="text-purple-400 font-semibold">trained, systematic approaches</span> to thinking clearly under pressure.
                </p>
                <p className="text-xl text-blue-400 font-semibold">
                  Now, for the first time, these skills are available to you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              Be First in the Cockpit
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join the waitlist now and get exclusive early access plus <span className="text-blue-400 font-bold">40% off</span> when we launch
            </p>

            {!submitted ? (
              <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
                />
                <button
                  onClick={handleSubmit}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 group"
                >
                  <span>Join Waitlist</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ) : (
              <div className="max-w-2xl mx-auto bg-green-500/10 border border-green-500/30 rounded-xl p-8 backdrop-blur-sm">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-400 mb-2">Welcome aboard! ✈️</h3>
                <p className="text-gray-300">Check your inbox—we'll be in touch soon with exclusive early access.</p>
              </div>
            )}
            
            {error && <p className="text-red-400 text-sm mt-4">{error}</p>}
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Plane className="w-6 h-6 text-blue-400" />
              <span className="text-lg font-bold">Pilot Mindset Academy</span>
            </div>
            <p className="text-gray-400 text-sm">© 2025 Think Like a Pilot. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}