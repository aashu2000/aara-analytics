'use client';

import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Settings, 
  ArrowRight,
  MessageCircle,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      title: "Market Insights Dashboard",
      description: "Access real-time Telangana vehicle sales data through interactive Power BI dashboards. Make informed decisions with comprehensive market analytics.",
      icon: <BarChart3 className="w-6 h-6 text-black" />
    },
    {
      title: "Competitive Analysis",
      description: "Benchmark your performance against competitors. Understand market positioning and identify growth opportunities.",
      icon: <Users className="w-6 h-6 text-black" />
    },
    {
      title: "Sales Forecasting",
      description: "Leverage advanced analytics to predict market trends and optimize your business strategy.",
      icon: <TrendingUp className="w-6 h-6 text-black" />
    },
    {
      title: "Customizable Dashboards",
      description: "Tailored interfaces for different stakeholders - from dealers to manufacturers. Easy-to-use and personalized experience.",
      icon: <Settings className="w-6 h-6 text-black" />
    }
  ];

  const plans = [
    {
      name: "Basic",
      price: "₹24,999",
      period: "/quarter",
      features: [
        "Standard dashboard access",
        "Monthly trend analysis",
        "Email & chat support",
        "Single user license",
        "Market share reports",
        "Quarterly insights review"
      ]
    },
    {
      name: "Professional",
      price: "₹39,999",
      period: "/quarter",
      features: [
        "Advanced dashboard access",
        "Weekly data updates",
        "Priority support",
        "Up to 3 users",
        "Custom report templates",
        "Competitive analysis",
        "Data export capabilities"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Fully customized dashboards",
        "Real-time data access",
        "24/7 dedicated support",
        "Unlimited users",
        "Custom API integration",
        "White-label options",
        "Quarterly strategy consulting"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img src="/images/logo.png" alt="AARA Analytics Logo" className="h-12 w-auto" />
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-black">Features</a>
              <a href="#reports" className="text-gray-600 hover:text-black">Reports</a>
              <a href="#pricing" className="text-gray-600 hover:text-black">Pricing</a>
              <a href="#contact" className="text-gray-600 hover:text-black">Contact</a>
              <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900">
                Request Demo
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-black"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-black">Features</a>
              <a href="#reports" className="block px-3 py-2 text-gray-600 hover:text-black">Reports</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-600 hover:text-black">Pricing</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-black">Contact</a>
              <button className="w-full text-left px-3 py-2 text-black">Request Demo</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Unlock Telangana's Vehicle Sales Insights
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Data-Driven Decisions for Dealers & Manufacturers
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-900 flex items-center">
                Request Demo <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button className="border border-black text-black px-8 py-3 rounded-md hover:bg-gray-50">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Powerful Features</h2>
            <p className="mt-4 text-gray-600">Everything you need to make data-driven decisions</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Reports Section */}
      <div id="reports" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Custom Analytics Dashboards</h2>
            <p className="mt-4 text-gray-600">Comprehensive vehicle registration insights tailored to your needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Interactive Power BI Dashboards</h3>
              <p className="text-gray-600">Our customized dashboards provide detailed insights into Telangana's vehicle registration data:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Real-time Market Share Analysis
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Historical Trend Analysis & Forecasting
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Competitor Performance Metrics
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  District-wise Registration Data
                </li>
              </ul>
            </div>
            
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img 
                      src="/images/dashboards/dashboard-1.png" 
                      alt="Market Overview Dashboard" 
                      className="w-full h-auto"
                      style={{
                        filter: 'blur(4px)',
                        WebkitFilter: 'blur(4px)'
                      }}
                    />
                    <div className="p-4 bg-red-700 text-white text-sm">
                      Market Overview Dashboard
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img 
                      src="/images/dashboards/dashboard-2.png" 
                      alt="Regional Performance Dashboard" 
                      className="w-full h-auto"
                      style={{
                        filter: 'blur(4px)',
                        WebkitFilter: 'blur(4px)'
                      }}
                    />
                    <div className="p-4 bg-red-700 text-white text-sm">
                      Regional Performance
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img 
                      src="/images/dashboards/dashboard-3.png" 
                      alt="Competitive Analysis Dashboard" 
                      className="w-full h-auto"
                      style={{
                        filter: 'blur(4px)',
                        WebkitFilter: 'blur(4px)'
                      }}
                    />
                    <div className="p-4 bg-red-700 text-white text-sm">
                      Competitive Analysis
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get access to comprehensive vehicle registration data through our interactive Power BI dashboards. 
              Each dashboard is customizable to your specific needs and updated regularly.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-900 inline-flex items-center">
              Request Custom Dashboard <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Pricing Plans</h2>
            <p className="mt-4 text-gray-600">Choose the plan that best fits your needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
	  {/* Contact Section */}
      <div id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-black mr-4" />
                  <span>+91 123 456 7890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-black mr-4" />
                  <span>contact@telanganatrdata.com</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-6 h-6 text-black mr-4" />
                  <span>WhatsApp Support Available</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:ring-black focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-md focus:ring-black focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border rounded-md focus:ring-black focus:border-black"
                  ></textarea>
                </div>
                <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AARA Analytics</h3>
              <p className="text-gray-400">
                Empowering the automotive industry with comprehensive Telangana vehicle registration insights
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#reports" className="text-gray-400 hover:text-white">Reports</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} AARA Analytics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}