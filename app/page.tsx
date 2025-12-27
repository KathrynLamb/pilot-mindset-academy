"use client";
import React, { useState } from 'react';
import { Plane, Brain, Target, Zap, TrendingUp, Shield, CheckCircle, ArrowRight, Sparkles, Award, Users, Clock, BookOpen } from 'lucide-react';

export default function PilotMindsetWaitlist() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // ✅ FIXED: async + no event param
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
    { number: "30 Years", label: "RAF Training Experience", sublabel: "Now available to you" }
  ];

  const testimonials = [
    { quote: "The mental frameworks I learned completely changed how I handle high-pressure situations in surgery.", author: "Dr. Sarah Chen", role: "Cardiac Surgeon" },
    { quote: "As a CEO, these decision-making protocols have been game-changing. I'm faster and more confident under pressure.", author: "Michael Rodriguez", role: "Tech CEO" },
    { quote: "I wish I'd learned these skills 20 years ago. They apply to everything from negotiations to crisis management.", author: "Jennifer Park", role: "Corporate Attorney" }
  ];

  const features = [
    { icon: <BookOpen className="w-6 h-6" />, title: "6-Week Intensive Program", description: "Structured curriculum designed by an RAF instructor with 30 years of pilot training" },
    { icon: <Users className="w-6 h-6" />, title: "Small Cohort Learning", description: "Limited to 50 students per cohort for personalized attention and peer learning" },
    { icon: <Clock className="w-6 h-6" />, title: "Live Training Sessions", description: "Weekly live sessions with scenario-based exercises and real-time feedback" },
    { icon: <Award className="w-6 h-6" />, title: "Certification Included", description: "Receive official certification upon completion of the program" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* --- SNIP --- */}
      {/* Everything below is unchanged JSX from your file */}
      {/* Only change inside inputs/buttons is calling handleSubmit() */}

      {!submitted ? (
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}   // ✅ FIXED
            />
            <button
              onClick={handleSubmit}                                 // ✅ FIXED
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 group"
            >
              <span>Join Waitlist</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
        </div>
      ) : (
        <div className="max-w-2xl mx-auto bg-green-500/10 border border-green-500/30 rounded-xl p-8 backdrop-blur-sm">
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-green-400 mb-2">You're on the list! ✈️</h3>
          <p className="text-gray-300">Check your inbox—we'll send you exclusive pre-launch materials and your early bird discount code.</p>
        </div>
      )}

      {/* --- rest of your JSX unchanged --- */}
    </div>
  );
}
