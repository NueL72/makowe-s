import React from 'react';
import { Building2, Truck, Wrench, Shield, ArrowRight, Zap, Settings, HardHat, Phone, PhoneIcon, PhoneIncoming, Fuel, FileText, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Services = () => {
  const services = [

    {
      icon: Fuel,
      title: 'Wholesale Diesel (AGO)',
      description: 'Premium quality diesel fuel supply in bulk quantities for industrial and commercial operations',
      features: ['Automotive Gas Oil (AGO)', 'Bulk Volume Discounts', 'Quality Guaranteed', 'Flexible Payment Terms'],
      price: 'Competitive Rates',
      color: 'from-blue-600 to-indigo-700',
      bgColor: 'from-blue-50 to-indigo-50',
      popular: true
    },
    {
      icon: Zap,
      title: 'Wholesale Petrol (PMS)',
      description: 'High-grade petrol supply for retail stations, fleet operators, and commercial enterprises',
      features: ['Premium Motor Spirit (PMS)', 'Consistent Supply Chain', 'Market-Leading Prices', 'Technical Support'],
      price: 'Market Rates',
      color: 'from-emerald-600 to-teal-700',
      bgColor: 'from-emerald-50 to-teal-50',
      popular: true
    },
    {
      icon: Truck,
      title: 'Bulk Fuel Transportation',
      description: 'Specialized logistics and transportation services for safe fuel delivery nationwide',
      features: ['Certified Tank Trucks', 'GPS Tracking', 'Safety Compliance', 'Nationwide Coverage'],
      price: 'Per Delivery',
      color: 'from-orange-600 to-red-700',
      bgColor: 'from-orange-50 to-red-50',
      popular: true
    },
    {
      icon: Building2,
      title: 'Corporate Fuel Contracts',
      description: 'Tailored fuel supply agreements for corporations, institutions, and large-scale operations',
      features: ['Long-term Contracts', 'Volume Guarantees', 'Price Stability', 'Dedicated Account Management'],
      price: 'Contract Based',
      color: 'from-purple-600 to-pink-700',
      bgColor: 'from-purple-50 to-pink-50',
      popular: false
    },
    {
      icon: FileText,
      title: 'Institutional Supply',
      description: 'Specialized fuel supply services for government institutions, hospitals, and educational facilities',
      features: ['Government Compliance', 'Tender Participation', 'Credit Facilities', 'Emergency Supply'],
      price: 'Tender Rates',
      color: 'from-indigo-600 to-blue-700',
      bgColor: 'from-indigo-50 to-blue-50',
      popular: false
    },
    {
      icon: MapPin,
      title: 'Depot-to-Site Delivery',
      description: 'Comprehensive coordination of fuel delivery from depot facilities directly to your location',
      features: ['Route Optimization', 'Delivery Scheduling', 'Real-time Tracking', 'Site Coordination'],
      price: 'Logistics Fee',
      color: 'from-green-600 to-emerald-700',
      bgColor: 'from-green-50 to-emerald-50',
      popular: false
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection animation="fadeInUp" className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-50 to-red-50 px-4 py-2 rounded-full border border-orange-100 mb-6">
            <Wrench className="h-4 w-4 text-orange-500" />
            <span className="text-sm font-semibold text-orange-700">Professional Services</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Complete Infrastructure
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From building maintenance to heavy transport, we provide comprehensive 
            services to keep your operations running smoothly and efficiently.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection 
              key={index}
              animation="fadeInUp" 
              delay={index * 150}
            >
              <div className={`group relative bg-gradient-to-br ${service.bgColor} rounded-3xl p-8 hover:shadow-2xl hover:shadow-slate-300/20 transition-all duration-500 hover:-translate-y-3 border border-white/50 overflow-hidden`}>
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                    🔥 Popular
                  </div>
                )}

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white to-transparent rounded-full transform -translate-x-12 translate-y-12"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-5 h-5 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/50">
                    <div>
                      <div className="text-lg font-black text-slate-900">{service.price}</div>
                      <div className="text-xs text-slate-500">Contact for pricing</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Emergency Service CTA */}
        <AnimatedSection animation="scaleIn" delay={400} className="mt-20">
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-orange-400 to-red-500 rounded-full transform -translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-yellow-400 to-orange-500 rounded-full transform translate-x-24 translate-y-24"></div>
            </div>

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Phone className="h-4 w-4 text-yellow-400" />
                <span className="text-sm font-semibold">24/7 Emergency Service</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-black mb-4">
                Need Emergency Support?
              </h3>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Our emergency response team is available 24/7 for critical urgent fuel transportation needs. Get immediate professional assistance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+255759007977"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <PhoneIncoming className="mr-2 h-5 w-5" />
                  Emergency Hotline
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Schedule Service
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;