import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Zap, CheckCircle, PhoneIncoming } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    urgent: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Head Office',
      details: ['Kurasini', 'Dar es salaam', 'United Republic Of Tanzania'],
      action: 'Get Directions',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+255759007977'],
      action: 'Call Now',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['Bmhhoillogistics@gmail.com'],
      action: 'Send Email',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 4:00 PM', 'Sun: Emergency Only'],
      action: 'View Schedule',
      color: 'from-orange-500 to-red-600'
    }
  ];

  // const quickServices = [
  //   // { name: 'Building Maintenance', time: 'Same Day', price: 'Custom Quote' },
  //   // { name: 'Heavy Haulage', time: '24 Hours', price: 'Per Project' },
  //   // { name: 'Emergency Repair', time: 'Immediate', price: 'Emergency Rate' },
  //   // { name: 'Facility Management', time: 'Consultation', price: 'Monthly Contract' }
  // ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection animation="fadeInUp" className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg shadow-orange-500/10 border border-orange-100 mb-6">
            <MessageSquare className="h-4 w-4 text-orange-500" />
            <span className="text-sm font-semibold text-slate-700">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Contact
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Us Today</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Get a free consultation and experience from our professionals.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <AnimatedSection animation="fadeInLeft" delay={200} className="lg:col-span-2">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-white/50">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-slate-900">
                  Send Us a Message
                </h3>
                <div className="flex items-center space-x-2 text-emerald-600">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold">Available Now</span>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-slate-900"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-slate-900"
                      placeholder="+234 (0) 803 123 4567"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-slate-900"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-slate-900"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-slate-900"
                  >
                    <option value="">Select service needed</option>
                    <option value="building-maintenance">Building Maintenance</option>
                    <option value="heavy-haulage">Heavy Haulage</option>
                    <option value="construction-support">Construction Support</option>
                    <option value="equipment-services">Equipment Services</option>
                    <option value="facility-management">Facility Management</option>
                    <option value="safety-compliance">Safety & Compliance</option>
                    <option value="emergency-service">Emergency Service</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none text-slate-900"
                    placeholder="Describe your project requirements in detail..."
                  ></textarea>
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="urgent"
                    checked={formData.urgent}
                    onChange={handleChange}
                    className="w-5 h-5 text-orange-600 bg-slate-50 border-slate-300 rounded focus:ring-orange-500"
                  />
                  <label className="text-sm font-medium text-slate-700">
                    This is urgent (Emergency service - additional charges apply)
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-4 rounded-2xl hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Request</span>
                </button>
              </form>
            </div>
          </AnimatedSection>

          {/* Contact Info & Quick Services */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <AnimatedSection 
                  key={index}
                  animation="fadeInRight" 
                  delay={300 + (index * 100)}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/20 transition-all duration-300 hover:-translate-y-1 border border-white/50">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1 mb-4">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-slate-600 text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                        <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors text-sm">
                          {info.action} →
                        </button>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Quick Services */}
        

            {/* Emergency Service */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;