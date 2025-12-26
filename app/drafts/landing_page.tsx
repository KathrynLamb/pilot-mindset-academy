'use client'
import React, { useState } from 'react';
import { Camera, CheckCircle, Users, Award, Menu, X } from 'lucide-react';

export default function PilotPsychCourse() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const skills = [
    {
      title: "Situational Awareness",
      description: "Master the art of maintaining complete awareness of your environment, anticipating changes, and making split-second decisions under pressure."
    },
    {
      title: "Stress Management",
      description: "Learn techniques pilots use to stay calm and focused in high-stakes situations, managing anxiety and maintaining peak performance."
    },
    {
      title: "Decision Making",
      description: "Develop frameworks for rapid, effective decision-making using the same protocols that keep aviation safe."
    },
    {
      title: "Communication Clarity",
      description: "Master precise, efficient communication techniques that ensure critical information is transmitted without error."
    },
    {
      title: "Risk Assessment",
      description: "Build mental models for evaluating and mitigating risk in complex, dynamic environments."
    },
    {
      title: "Mental Resilience",
      description: "Develop the psychological fortitude to bounce back from setbacks and maintain focus through adversity."
    }
  ];

  const modules = [
    { week: 1, title: "Foundations of Aviation Psychology", lessons: 4 },
    { week: 2, title: "Cognitive Load & Mental Models", lessons: 5 },
    { week: 3, title: "Emergency Response Mindset", lessons: 4 },
    { week: 4, title: "Team Coordination & CRM", lessons: 6 },
    { week: 5, title: "Decision Making Under Pressure", lessons: 5 },
    { week: 6, title: "Advanced Situational Awareness", lessons: 4 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Camera className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold text-white">Pilot Mindset Academy</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors">Skills</a>
              <a href="#curriculum" className="text-gray-300 hover:text-blue-400 transition-colors">Curriculum</a>
              <a href="#enroll" className="text-gray-300 hover:text-blue-400 transition-colors">Enroll</a>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-blue-500/20">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a href="#about" className="block py-2 text-gray-300 hover:text-blue-400">About</a>
              <a href="#skills" className="block py-2 text-gray-300 hover:text-blue-400">Skills</a>
              <a href="#curriculum" className="block py-2 text-gray-300 hover:text-blue-400">Curriculum</a>
              <a href="#enroll" className="block py-2 text-gray-300 hover:text-blue-400">Enroll</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Think Like a <span className="text-blue-400">Pilot</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Master the psychological skills that keep aviators calm, focused, and effective in the world's most demanding environments
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/50">
            Start Your Journey
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-400 mb-2">6 Weeks</div>
            <div className="text-gray-300">Comprehensive Training</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-400 mb-2">28 Lessons</div>
            <div className="text-gray-300">Expert-Led Modules</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-400 mb-2">1000+</div>
            <div className="text-gray-300">Students Trained</div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            What You'll Learn
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            These aren't just aviation concepts—they're life skills that translate to any high-pressure situation
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all hover:transform hover:scale-105"
              >
                <CheckCircle className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{skill.title}</h3>
                <p className="text-gray-300">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Curriculum Section */}
      <div id="curriculum" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Course Curriculum
          </h2>
          
          <div className="space-y-4">
            {modules.map((module, index) => (
              <div 
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-blue-400 font-semibold mb-1">Week {module.week}</div>
                    <h3 className="text-xl font-bold text-white">{module.title}</h3>
                  </div>
                  <div className="text-gray-400">{module.lessons} lessons</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div id="enroll" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 shadow-2xl">
          <Award className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Elevate Your Mind?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of professionals who've transformed their decision-making, stress management, and performance
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
            Enroll Now - $297
          </button>
          <p className="text-blue-200 mt-4">30-day money-back guarantee</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8 border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Camera className="w-6 h-6 text-blue-400" />
            <span className="text-lg font-bold text-white">Pilot Mindset Academy</span>
          </div>
          <p className="text-gray-400">© 2025 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}