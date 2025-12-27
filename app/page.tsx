"use client";
import React, { useState } from 'react';
import { Plane, Brain, Target, Zap, TrendingUp, Shield, CheckCircle, ArrowRight, Sparkles, Award, Users, Clock, BookOpen } from 'lucide-react';

export default function PilotMindsetWaitlist() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // ✅ async fix
  const handleSubmit = async () => {
    setError('');

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || data.message || 'Something went wrong');
        return;
      }

      setSubmitted(true);
    } catch {
      setError('Network error. Please try again.');
    }
  };

  const skills = [
    { icon: <Brain className="w-8 h-8" />, title: "Mental Clarity Under Pressure", description: "Master the cognitive frameworks pilots use to stay razor-sharp when stakes are highest" },
    { icon: <Target className="w-8 h-8" />, title: "Instant Decision Protocols", description: "Learn the systematic approach to making critical decisions in seconds, not minutes" },
    { icon: <Shield className="w-8 h-8" />, title: "Stress Immunity", description: "Build the psychological armor that keeps elite pilots calm in chaos" },
    { icon: <Zap className="w-8 h-8" />, title: "Situational Mastery", description: "Develop 360° awareness that anticipates problems before they materialize" },
    { icon: <TrendingUp className="w-8 h-8" />, title: "Peak Performance Mindset", description: "Access the mental state where your best work happens consistently" },
    { icon: <Sparkles className="w-8 h-8" />, title: "Error-Proof Communication", description: "Communicate with precision that eliminates misunderstanding when it matters most" }
  ];

  const stats = [
    { number: "99.9%", label: "Aviation Safety Record", sublabel: "Built on psychology" },
    { number: "< 3 sec", label: "Average Decision Time", sublabel: "In emergencies" },
    { number: "20+ Years", label: "RAF Training Experience", sublabel: "Now available to you" }
  ];

  const testimonials = [
    { quote: "The mental frameworks I learned completely changed how I handle high-pressure situations in surgery.", author: "Dr. Sarah Chen", role: "Cardiac Surgeon" },
    { quote: "As a CEO, these decision-making protocols have been game-changing. I'm faster and more confident under pressure.", author: "Michael Rodriguez", role: "Tech CEO" },
    { quote: "I wish I'd learned these skills 20 years ago. They apply to everything from negotiations to crisis management.", author: "Jennifer Park", role: "Corporate Attorney" }
  ];

  const features = [
    { icon: <BookOpen className="w-6 h-6" />, title: "6-Week Intensive Program", description: "Structured curriculum designed by an RAF instructor with 20+ years of pilot training" },
    { icon: <Users className="w-6 h-6" />, title: "Small Cohort Learning", description: "Limited to 50 students per cohort for personalized attention and peer learning" },
    { icon: <Clock className="w-6 h-6" />, title: "Live Training Sessions", description: "Weekly live sessions with scenario-based exercises and real-time feedback" },
    { icon: <Award className="w-6 h-6" />, title: "Certification Included", description: "Receive official certification upon completion of the program" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-blue-950 via-black to-purple-950 opacity-50" />

      <div className="relative z-10">
        {/* Hero */}
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-8">
              <Plane className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300 font-medium">First Cohort Starting February 2025</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Think Like a Pilot
            </h1>

            <p className="text-2xl text-gray-300 mb-4">Master the psychological skills that keep aviators</p>
            <p className="text-2xl text-gray-300 mb-8">
              <span className="text-blue-400 font-semibold">calm, focused, and flawless</span> under extreme pressure
            </p>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6 mb-12 max-w-3xl mx-auto">
              <p className="text-lg text-gray-200 mb-2">
                Developed by an <span className="text-blue-400 font-bold">RAF instructor with 20+ years</span> training elite fighter pilots
              </p>
              <p className="text-gray-400">
                The same mental frameworks that keep pilots alive in combat—now available for your high-stakes decisions
              </p>
            </div>

            {!submitted ? (
              <div className="max-w-2xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-xl"
                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                  />
                  <button
                    onClick={handleSubmit}
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold flex items-center justify-center gap-2"
                  >
                    Join Waitlist <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                {error && <p className="text-red-400 text-sm">{error}</p>}
              </div>
            ) : (
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8 max-w-2xl mx-auto">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-400 mb-2">You're on the list! ✈️</h3>
                <p className="text-gray-300">Check your inbox—we'll send you exclusive pre-launch materials.</p>
              </div>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="py-24 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-6xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold">{stat.label}</div>
                <div className="text-gray-400">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Instructor */}
        <div className="py-24 px-4">
          <div className="max-w-4xl mx-auto bg-white/5 border border-white/20 rounded-3xl p-12 text-center">
            <Award className="w-16 h-16 text-blue-400 mx-auto mb-8" />
            <h2 className="text-4xl font-black mb-8">Trained by the Best</h2>
            <p className="text-gray-300 mb-4">
              Your instructor spent <span className="text-blue-400 font-semibold">20+ years training Royal Air Force pilots</span>.
            </p>
            <p className="text-gray-300 mb-4">
              These are <span className="text-purple-400 font-semibold">battle-tested mental frameworks</span> refined over two decades.
            </p>
            <p className="text-gray-300">
              For over 20 years, these skills were reserved for military pilots. Not anymore.
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/10 py-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Plane className="w-6 h-6 text-blue-400" />
            <span className="text-lg font-bold">Pilot Mindset Academy</span>
          </div>
          <p className="text-gray-400 text-sm mb-2">
            Developed by a Royal Air Force instructor with 20+ years of elite pilot training
          </p>
          <p className="text-gray-400 text-sm">© 2025 Think Like a Pilot. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
