import { Sparkles, Code, Zap, MessageSquare, Globe, Rocket, Check, Bot, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fbf1e7' }}>
      {/* Navigation */}
      <nav className="px-4 sm:px-6 md:px-12 lg:px-24 py-4 md:py-6 sticky top-0 z-50 backdrop-blur-md bg-[#fbf1e7]/90 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 animate-fade-in">
            <img
              src="/src/app/components/logo.png"
              className="h-14 sm:h-16 md:h-20 bg-transparent"
              alt="Aristagen AI Logo"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 lg:gap-8">
            <a
              href="#about"
              className="relative group transition-all duration-300"
              style={{ color: '#862626' }}
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#E04004] to-[#A62C18] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#services"
              className="relative group transition-all duration-300"
              style={{ color: '#862626' }}
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#E04004] to-[#A62C18] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#pricing"
              className="relative group transition-all duration-300"
              style={{ color: '#862626' }}
            >
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#E04004] to-[#A62C18] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#contact"
              className="relative group transition-all duration-300"
              style={{ color: '#862626' }}
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#E04004] to-[#A62C18] group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-all duration-300 hover:scale-110"
            style={{ backgroundColor: '#E04004' }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4 py-4 px-2">
            <a
              href="#about"
              className="px-4 py-2 rounded-lg transition-all duration-300 hover:translate-x-2"
              style={{ color: '#862626', backgroundColor: 'white' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="px-4 py-2 rounded-lg transition-all duration-300 hover:translate-x-2"
              style={{ color: '#862626', backgroundColor: 'white' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#pricing"
              className="px-4 py-2 rounded-lg transition-all duration-300 hover:translate-x-2"
              style={{ color: '#862626', backgroundColor: 'white' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg transition-all duration-300 hover:translate-x-2"
              style={{ color: '#862626', backgroundColor: 'white' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-16 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/70 rounded-full mb-6 sm:mb-8 backdrop-blur-sm animate-bounce-slow shadow-lg border-2 border-[#E04004]/20">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#E04004] animate-pulse" />
            <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-[#E04004] to-[#A62C18] bg-clip-text text-transparent">
              AI-Powered Solutions
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-tight font-bold animate-fade-in-up"
            style={{
              background: 'linear-gradient(135deg, #E04004 0%, #862626 50%, #5A0610 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Transform Your Vision Into Reality
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-200" style={{ color: '#862626' }}>
            We build intelligent AI agents and stunning websites that make clients say:
            <span className="block mt-2 italic font-semibold bg-gradient-to-r from-[#C33404] to-[#8E1813] bg-clip-text text-transparent">
              "We want a website as same as you"
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 animate-fade-in-up animation-delay-400">
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-500 inline-flex items-center justify-center gap-2 hover:scale-105 transform group"
              style={{ background: 'linear-gradient(135deg, #E04004 0%, #A62C18 100%)' }}
            >
              Get Started
              <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-500 inline-flex items-center justify-center gap-2 hover:scale-105 transform border-2"
              style={{ color: '#862626', borderColor: '#E04004' }}
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-4 sm:px-6 md:px-12 lg:px-24 py-16 sm:py-20 md:py-24 bg-white/40">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-6 sm:mb-8 md:mb-10 font-bold animate-fade-in"
            style={{
              background: 'linear-gradient(135deg, #E04004 0%, #862626 50%, #5A0610 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Who Are We
          </h2>
          <div className="bg-white p-6 sm:p-8 md:p-12 shadow-2xl rounded-2xl border-t-4 border-[#E04004] hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] transform">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed" style={{ color: '#862626' }}>
              We believe the future belongs to businesses that move faster, not just work harder. Whether you are a local shop owner losing revenue to missed calls or an enterprise leader navigating complex data silos, our mission is the same: to bridge the gap between human ingenuity and autonomous action. We build AI agents that don't just answer questions—they execute workflows, manage schedules, and solve problems with the precision of a digital employee. By democratizing enterprise-grade automation, we empower you to reclaim your time, scale your operations, and focus on the high-level strategy that only you can provide.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-4 sm:px-6 md:px-12 lg:px-24 py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-3 sm:mb-4 font-bold"
            style={{
              background: 'linear-gradient(135deg, #E04004 0%, #862626 50%, #5A0610 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Our Services
          </h2>
          <p className="text-center mb-12 sm:mb-16 text-base sm:text-lg md:text-xl" style={{ color: '#862626' }}>
            Cutting-edge solutions for modern businesses
          </p>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {/* AI Agents Service */}
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border-t-4 hover:scale-105 transform group" style={{ borderColor: '#E04004' }}>
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ background: 'linear-gradient(135deg, #E04004 0%, #A62C18 100%)' }}
              >
                <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-white animate-pulse" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl mb-4 font-bold bg-gradient-to-r from-[#C33404] to-[#862626] bg-clip-text text-transparent">
                AI Agent Development
              </h3>
              <p className="mb-6 text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: '#862626' }}>
                Custom AI agents that automate workflows, enhance customer interactions, and make intelligent decisions.
                From chatbots to complex automation systems, we build AI that works for you.
              </p>
              <ul className="space-y-3" style={{ color: '#862626' }}>
                <li className="flex items-center gap-2 sm:gap-3 hover:translate-x-2 transition-transform duration-300">
                  <Zap className="w-5 h-5 flex-shrink-0" style={{ color: '#E04004' }} />
                  <span className="text-sm sm:text-base">Intelligent automation & workflows</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3 hover:translate-x-2 transition-transform duration-300">
                  <MessageSquare className="w-5 h-5 flex-shrink-0" style={{ color: '#E04004' }} />
                  <span className="text-sm sm:text-base">Conversational AI & chatbots</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3 hover:translate-x-2 transition-transform duration-300">
                  <Code className="w-5 h-5 flex-shrink-0" style={{ color: '#E04004' }} />
                  <span className="text-sm sm:text-base">Custom integrations & APIs</span>
                </li>
              </ul>
            </div>

            {/* Website Building Service */}
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border-t-4 hover:scale-105 transform group" style={{ borderColor: '#C33404' }}>
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ background: 'linear-gradient(135deg, #C33404 0%, #8E1813 100%)' }}
              >
                <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-white animate-pulse" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl mb-4 font-bold bg-gradient-to-r from-[#C33404] to-[#862626] bg-clip-text text-transparent">
                Website Building
              </h3>
              <p className="mb-6 text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: '#862626' }}>
                Beautiful, responsive websites that convert visitors into customers.
                We create digital experiences so impressive that clients will want exactly what you have.
              </p>
              <ul className="space-y-3" style={{ color: '#862626' }}>
                <li className="flex items-center gap-2 sm:gap-3 hover:translate-x-2 transition-transform duration-300">
                  <Code className="w-5 h-5 flex-shrink-0" style={{ color: '#C33404' }} />
                  <span className="text-sm sm:text-base">Modern, responsive design</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3 hover:translate-x-2 transition-transform duration-300">
                  <Zap className="w-5 h-5 flex-shrink-0" style={{ color: '#C33404' }} />
                  <span className="text-sm sm:text-base">Lightning-fast performance</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3 hover:translate-x-2 transition-transform duration-300">
                  <Globe className="w-5 h-5 flex-shrink-0" style={{ color: '#C33404' }} />
                  <span className="text-sm sm:text-base">SEO optimized & scalable</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-4 sm:px-6 md:px-12 lg:px-24 py-16 sm:py-20 md:py-24 bg-white/40">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-3 sm:mb-4 font-bold"
            style={{
              background: 'linear-gradient(135deg, #E04004 0%, #862626 50%, #5A0610 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Choose Your Plan
          </h2>
          <p className="text-center mb-12 sm:mb-16 text-base sm:text-lg md:text-xl" style={{ color: '#862626' }}>
            Scale your business with the perfect solution
          </p>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Basic Plan */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 transform border-t-4" style={{ borderColor: '#A62C18' }}>
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl mb-2 font-bold bg-gradient-to-r from-[#A62C18] to-[#862626] bg-clip-text text-transparent">
                  Basic Plan
                </h3>
                <p className="text-sm sm:text-base" style={{ color: '#862626' }}>Perfect for getting started</p>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-8">
                <li className="flex items-start gap-2 sm:gap-3 hover:translate-x-2 transition-transform duration-300">
                  <Check className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#E04004' }} />
                  <span className="text-sm sm:text-base" style={{ color: '#862626' }}>Ready chatbot templates</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 hover:translate-x-2 transition-transform duration-300">
                  <Check className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#E04004' }} />
                  <span className="text-sm sm:text-base" style={{ color: '#862626' }}>Quick setup</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 hover:translate-x-2 transition-transform duration-300">
                  <Check className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#E04004' }} />
                  <span className="text-sm sm:text-base" style={{ color: '#862626' }}>Start fast</span>
                </li>
              </ul>

              <a
                href="#contact"
                className="block w-full px-6 py-3 text-center text-white rounded-xl font-semibold shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
                style={{ background: 'linear-gradient(135deg, #A62C18 0%, #862626 100%)' }}
              >
                Get Started
              </a>
            </div>

            {/* Standard Plan */}
            <div
              className="p-6 sm:p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 relative border-4"
              style={{ background: 'linear-gradient(135deg, #E04004 0%, #C33404 50%, #A62C18 100%)', borderColor: '#fbf1e7' }}
            >
              <div
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg animate-pulse"
                style={{ backgroundColor: '#fbf1e7', color: '#5A0610' }}
              >
                ⭐ POPULAR
              </div>

              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl mb-2 text-white font-bold">Standard Plan</h3>
                <p className="text-sm sm:text-base text-white/90">For growing businesses</p>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-8">
                <li className="flex items-start gap-2 sm:gap-3 hover:translate-x-2 transition-transform duration-300">
                  <Check className="w-5 h-5 flex-shrink-0 mt-1 text-white" />
                  <span className="text-sm sm:text-base text-white font-medium">Chatbot + automation</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 hover:translate-x-2 transition-transform duration-300">
                  <Check className="w-5 h-5 flex-shrink-0 mt-1 text-white" />
                  <span className="text-sm sm:text-base text-white font-medium">Lead capture system</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 hover:translate-x-2 transition-transform duration-300">
                  <Check className="w-5 h-5 flex-shrink-0 mt-1 text-white" />
                  <span className="text-sm sm:text-base text-white font-medium">Better conversions</span>
                </li>
              </ul>

              <a
                href="#contact"
                className="block w-full px-6 py-3 text-center rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform text-sm sm:text-base"
                style={{ backgroundColor: '#fbf1e7', color: '#5A0610' }}
              >
                Get Started Now
              </a>
            </div>

            {/* Premium Plan */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 transform border-t-4" style={{ borderColor: '#8E1813' }}>
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl mb-2 font-bold bg-gradient-to-r from-[#8E1813] to-[#5A0610] bg-clip-text text-transparent">
                  Premium Plan
                </h3>
                <p className="text-sm sm:text-base" style={{ color: '#862626' }}>Complete business solution</p>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-8">
                <li className="flex items-start gap-2 sm:gap-3 hover:translate-x-2 transition-transform duration-300">
                  <Check className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#E04004' }} />
                  <span className="text-sm sm:text-base" style={{ color: '#862626' }}>Chatbot + automation + website</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 hover:translate-x-2 transition-transform duration-300">
                  <Check className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#E04004' }} />
                  <span className="text-sm sm:text-base" style={{ color: '#862626' }}>Full business system</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 hover:translate-x-2 transition-transform duration-300">
                  <Check className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#E04004' }} />
                  <span className="text-sm sm:text-base" style={{ color: '#862626' }}>Maximum growth</span>
                </li>
              </ul>

              <a
                href="#contact"
                className="block w-full px-6 py-3 text-center text-white rounded-xl font-semibold shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
                style={{ background: 'linear-gradient(135deg, #8E1813 0%, #5A0610 100%)' }}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 sm:px-6 md:px-12 lg:px-24 py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-3 sm:mb-4 font-bold"
            style={{
              background: 'linear-gradient(135deg, #E04004 0%, #862626 50%, #5A0610 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Why Choose Us
          </h2>
          <p className="text-center mb-12 sm:mb-16 text-base sm:text-lg md:text-xl" style={{ color: '#862626' }}>
            Excellence in every pixel and line of code
          </p>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            <div className="text-center group hover:scale-105 transition-transform duration-500">
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-12"
                style={{ background: 'linear-gradient(135deg, #E04004 0%, #C33404 100%)' }}
              >
                <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white animate-pulse" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl mb-3 font-bold bg-gradient-to-r from-[#E04004] to-[#862626] bg-clip-text text-transparent">
                AI-First Approach
              </h3>
              <p className="text-sm sm:text-base md:text-lg px-2" style={{ color: '#862626' }}>
                We leverage cutting-edge AI technology to build smarter, more efficient solutions that give you a competitive edge.
              </p>
            </div>

            <div className="text-center group hover:scale-105 transition-transform duration-500">
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-12"
                style={{ background: 'linear-gradient(135deg, #C33404 0%, #A62C18 100%)' }}
              >
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white animate-pulse" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl mb-3 font-bold bg-gradient-to-r from-[#C33404] to-[#8E1813] bg-clip-text text-transparent">
                Lightning Fast
              </h3>
              <p className="text-sm sm:text-base md:text-lg px-2" style={{ color: '#862626' }}>
                Optimized performance and rapid development cycles mean you get to market faster without compromising quality.
              </p>
            </div>

            <div className="text-center group hover:scale-105 transition-transform duration-500">
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-12"
                style={{ background: 'linear-gradient(135deg, #A62C18 0%, #5A0610 100%)' }}
              >
                <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-white animate-pulse" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl mb-3 font-bold bg-gradient-to-r from-[#A62C18] to-[#5A0610] bg-clip-text text-transparent">
                Results Driven
              </h3>
              <p className="text-sm sm:text-base md:text-lg px-2" style={{ color: '#862626' }}>
                We focus on outcomes that matter: increased conversions, better user experience, and measurable business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section
        id="contact"
        className="px-4 sm:px-6 md:px-12 lg:px-24 py-16 sm:py-20 md:py-28 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #5A0610 0%, #862626 50%, #A62C18 100%)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 sm:w-64 sm:h-64 rounded-full bg-white animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-80 sm:h-80 rounded-full bg-white animate-pulse animation-delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-white font-bold animate-fade-in">
            Ready to Get Started?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 px-4">
            Let's build something amazing together. Reach out and let's discuss your project.
          </p>

          <a
            href="mailto:aristagen.ai@gmail.com"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 transform group"
            style={{ backgroundColor: '#fbf1e7', color: '#5A0610' }}
          >
            <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
            <span className="break-all sm:break-normal">aristagen.ai@gmail.com</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 md:px-12 lg:px-24 py-6 sm:py-8 border-t-4" style={{ borderColor: '#E04004' }}>
        <div className="max-w-7xl mx-auto text-center" style={{ color: '#862626' }}>
          <p className="text-sm sm:text-base">
            &copy; {new Date().getFullYear()} <span className="font-bold bg-gradient-to-r from-[#E04004] to-[#5A0610] bg-clip-text text-transparent">Aristagen AI</span>. Building the future with AI agents and beautiful websites.
          </p>
        </div>
      </footer>
    </div>
  );
}