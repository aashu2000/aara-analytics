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

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Plan {
  name: string;
  price: string;
  period: string;
  features: string[];
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features: Feature[] = [
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

  const plans: Plan[] = [
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
    <main className="min-h-screen bg-white">
      {/* Rest of your JSX stays exactly the same */}
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        {/* ... rest of your component JSX ... */}
      </nav>
    </main>
  );
}