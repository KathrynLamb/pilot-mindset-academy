"use client";

import React, { useState } from "react";
import {
  Plane,
  Brain,
  Target,
  Zap,
  TrendingUp,
  Shield,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function PilotMindsetWaitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || data.message || "Something went wrong");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Network error. Please try again.");
    }
  };

  const skills = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Mental Clarity Under Pressure",
      description:
        "Master the cognitive frameworks pilots use to stay razor-sharp when stakes are highest",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Instant Decision Protocols",
      description:
        "Learn the systematic approach to making critical decisions in seconds, not minutes",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Stress Immunity",
      description:
        "Build the psychological armor that keeps elite pilots calm in chaos",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Situational Mastery",
      description:
        "Develop 360° awareness that anticipates problems before they materialize",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Peak Performance Mindset",
      description:
        "Access the mental state where your best work happens consistently",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Error-Proof Communication",
      description:
        "Communicate with precision that eliminates misunderstanding when it matters most",
    },
  ];

  const stats = [
    {
      number: "99.9%",
      label: "Aviation Safety Record",
      sublabel: "Built on psychology",
    },
    {
      number: "< 3 sec",
      label: "Average Decision Time",
      sublabel: "In emergencies",
    },
    {
      number: "10,000+",
      label: "Hours of Training",
      sublabel: "Distilled for you",
    },
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
              <span className="text-sm text-blue-300 font-medium">
                Launching Soon
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Think Like a Pilot
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 mb-12 font-light">
              <span className="text-blue-400 font-semibold">
                calm, focused, and flawless
              </span>{" "}
              under extreme pressure
            </p>

            {!submitted ? (
              <div className="max-w-2xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-xl"
                    onKeyDown={(e) =>
                      e.key === "Enter" && handleSubmit(e)
                    }
                  />
                  <button
                    onClick={handleSubmit}
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold flex items-center justify-center space-x-2"
                  >
                    <span>Join Waitlist</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                {error && (
                  <p className="text-red-400 text-sm">{error}</p>
                )}
              </div>
            ) : (
              <div className="max-w-2xl mx-auto bg-green-500/10 border border-green-500/30 rounded-xl p-8">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-400 mb-2">
                  You're on the list! ✈️
                </h3>
                <p className="text-gray-300">
                  We'll email you as soon as we launch.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="py-24 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-6xl font-black text-blue-400 mb-3">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold">
                  {stat.label}
                </div>
                <div className="text-gray-400">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/10 py-12 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Plane className="w-6 h-6 text-blue-400" />
            <span className="text-lg font-bold">
              Pilot Mindset Academy
            </span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 Think Like a Pilot. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
