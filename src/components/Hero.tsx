import { ArrowRight, Shield, Award, CheckCircle, Truck, Phone, Fuel, Book } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/station.jpg" 
          alt="Fuel Station Background" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/70 to-slate-900/80"></div>
        {/* Additional gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-transparent to-red-900/30"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-400/10 to-red-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <AnimatedSection animation="fadeIn" delay={200}>
              <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg shadow-orange-500/20 border border-orange-100">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-slate-700">Professional Services Available</span>
                <Shield className="h-4 w-4 text-orange-500" />
              </div>
            </AnimatedSection>
            
            {/* Main Headline */}
            <div className="space-y-6">
              <AnimatedSection animation="fadeInUp" delay={400}>
                <h1 className="text-5xl md:text-7xl font-black leading-tight">
                  <span className="text-white drop-shadow-lg">Diesel.</span>
                  <br />
                  <span className="bg-gradient-to-r from-orange-400 via-red-500 to-red-600 bg-clip-text text-transparent drop-shadow-lg">
                    Petroleum.
                  </span>
                  <br />
                  <span className="text-white drop-shadow-lg">Distributors.</span>
                </h1>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInUp" delay={600}>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl drop-shadow-lg">
                trusted and fast-growing Tanzanian company specializing in the wholesale supply and distribution of <span className="bg-gradient-to-r from-orange-400 via-red-500 to-red-600 bg-clip-text text-transparent drop-shadow-lg">petroleum
                  </span> and <span className="bg-gradient-to-r from-orange-400 via-red-500 to-red-600 bg-clip-text text-transparent drop-shadow-lg">Diesel</span> with 
                  <span className="font-semibold text-orange-400"> 15+ years experience</span> and 
                  <span className="font-semibold text-orange-400"> 24/7 emergency support</span>.
                </p>
              </AnimatedSection>
            </div>

            {/* CTAs */}
            <AnimatedSection animation="fadeInUp" delay={800}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#services"
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="relative z-10 flex items-center">
                    Our Services
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </AnimatedSection>

            {/* Trust Indicators */}
            <AnimatedSection animation="fadeInUp" delay={1000}>
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-white drop-shadow-lg">24/7</div>
                  <div className="text-sm text-white/80 font-medium">Emergency Service</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-white drop-shadow-lg">15+</div>
                  <div className="text-sm text-white/80 font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-white drop-shadow-lg">500+</div>
                  <div className="text-sm text-white/80 font-medium">Projects Completed</div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Visual */}
          <AnimatedSection animation="fadeInRight" delay={600}>
            <div className="relative">
              {/* Main Service Showcase */}
              <div className="relative z-10">
                <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl shadow-slate-900/20 border border-white/30 transform hover:scale-105 transition-transform duration-500">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-slate-900">Our Services</h3>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        <span className="text-sm text-slate-600">Available</span>
                      </div>
                    </div>

                    {/* Service Categories */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-100">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                          <Fuel className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900">Wholesale Supply of Diesel (AGO) & Petrol (PMS)</div>
                          <div className="text-sm text-slate-600">supply and transportation.</div>
                        </div>
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                      </div>

                      <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center">
                          <Truck className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900">Bulk Fuel Transportation & Logistics</div>
                          <div className="text-sm text-slate-600">Logistic & product transportation</div>
                        </div>
                        <CheckCircle className="h-5 w-5 text-blue-500" />
                      </div>

                      <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                          <Book className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900">Fuel Supply Contracts for Corporates and Institutions</div>
                          <div className="text-sm text-slate-600"></div>
                        </div>
                        <CheckCircle className="h-5 w-5 text-purple-500" />
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                      <div className="text-center">
                        <div className="text-2xl font-black text-orange-600">24</div>
                        <div className="text-xs text-slate-600">Active Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-black text-blue-600">98%</div>
                        <div className="text-xs text-slate-600">Client Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center shadow-lg shadow-yellow-500/25 animate-bounce">
                <span className="text-2xl">🏗️</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-3xl flex items-center justify-center shadow-lg shadow-pink-500/25 animate-pulse">
                <span className="text-xl">🚛</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;