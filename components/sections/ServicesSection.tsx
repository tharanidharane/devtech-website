"use client";

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Globe, BarChart3, Lightbulb, Zap, Shield } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Custom ML models that learn from your data to predict trends, automate decisions, and optimize processes.",
    color: "purple"
  },
  {
    icon: Globe,
    title: "Natural Language Processing",
    description: "Advanced NLP solutions for chatbots, sentiment analysis, document processing, and language understanding.",
    color: "blue"
  },
  {
    icon: BarChart3,
    title: "Data Analytics & BI",
    description: "Transform raw data into actionable insights with our intelligent analytics and business intelligence platforms.",
    color: "green"
  },
  {
    icon: Lightbulb,
    title: "Computer Vision",
    description: "Visual recognition systems for quality control, security, medical imaging, and automated inspection.",
    color: "orange"
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Intelligent automation solutions that streamline workflows and eliminate repetitive tasks.",
    color: "teal"
  },
  {
    icon: Shield,
    title: "AI Consulting",
    description: "Strategic guidance on AI adoption, implementation roadmaps, and technology selection for your business.",
    color: "pink"
  }
];

const colorClasses = {
  purple: { bg: 'from-purple-100 to-purple-200', text: 'text-purple-600' },
  blue: { bg: 'from-blue-100 to-blue-200', text: 'text-blue-600' },
  green: { bg: 'from-green-100 to-green-200', text: 'text-green-600' },
  orange: { bg: 'from-orange-100 to-orange-200', text: 'text-orange-600' },
  teal: { bg: 'from-teal-100 to-teal-200', text: 'text-teal-600' },
  pink: { bg: 'from-pink-100 to-pink-200', text: 'text-pink-600' },
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full blur-xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 transform hover:scale-105 transition-all duration-300">
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Comprehensive AI Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end AI services that transform 
            your business processes and unlock new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 border-0 bg-gradient-to-br from-white to-gray-50 transform perspective-1000"
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${colorClasses[service.color as keyof typeof colorClasses].bg} flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 transform-gpu`}>
                  <service.icon className={`h-6 w-6 ${colorClasses[service.color as keyof typeof colorClasses].text}`} />
                </div>
                <CardTitle className="text-xl text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}