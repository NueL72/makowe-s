import { Users, Award, Clock, Shield, CheckCircle, Building2 } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const About = () => {
  const features = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with 15+ years of experience in building transaprency, honesty and professionalism.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'We ensure the fuel we supply meets all regulatory and industry standards.',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Clock,
      title: 'Reliablity',
      description: 'Timely delivery and dependable service are central to our operations.',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Shield,
      title: 'Safety & Compliance',
      description: 'We prioritize safety in all aspects of storage, handling, and transportation.',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const achievements = [
    { number: '15+', label: 'Years Experience', icon: '🏆' },
    { number: '500+', label: 'Projects Completed', icon: '🏗️' },
    { number: '50+', label: 'Heavy Equipment', icon: '🚛' },
    { number: '98%', label: 'Client Satisfaction', icon: '✅' }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection animation="fadeInUp" className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-50 to-red-50 px-4 py-2 rounded-full border border-orange-100 mb-6">
            <Building2 className="h-4 w-4 text-orange-500" />
            <span className="text-sm font-semibold text-orange-700">About BMHH</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Your Trusted
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Wholesale Distributors</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          With a strong focus on quality, reliability, and client satisfaction, we serve a wide range of sectors including transportation, manufacturing, agriculture.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <AnimatedSection animation="fadeInLeft" delay={200}>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-slate-900">
                  Building Excellence Since 2008
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                Our operations are built on a foundation of integrity, efficiency, and safety. 
                 We partner with licensed depots and transport providers to ensure timely and secure delivery of fuel in bulk quantities to our clients across various regions.
                </p>
              </div>
            </AnimatedSection>

            {/* Values */}
            <AnimatedSection animation="fadeInLeft" delay={400}>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Shield, title: 'Integrity', description: 'We uphold the highest ethical standards in all our operations.' },
                  { icon: Clock, title: 'Efficiency', description: 'We strive for optimal performance and timely delivery.' },
                  { icon: CheckCircle, title: 'Safety', description: 'Safety is our top priority in every aspect of our work.' }
                ].map((value, index) => (
                  <div key={index} className="text-center p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">{value.title}</h4>
                    <p className="text-sm text-slate-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Achievements */}
            <AnimatedSection animation="fadeInLeft" delay={600}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center p-4 bg-white border border-slate-200 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="text-2xl mb-2">{achievement.icon}</div>
                    <div className="text-2xl font-black text-slate-900 mb-1">{achievement.number}</div>
                    <div className="text-xs text-slate-600 font-medium">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <AnimatedSection 
                key={index}
                animation="fadeInRight" 
                delay={200 + (index * 150)}
              >
                <div className="group flex items-start space-x-4 p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <AnimatedSection animation="scaleIn" delay={200}>
          <div className="text-center">
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-orange-400 to-red-500 rounded-full transform -translate-x-32 -translate-y-32"></div>
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-yellow-400 to-orange-500 rounded-full transform translate-x-24 translate-y-24"></div>
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm font-semibold">Our Mission</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black mb-6">
                become a leading wholesale fuel distributor in East Africa.
                </h3>
                <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
                To deliver high-quality, competitively priced fuel solutions to wholesale clients across Tanzania and beyond,
                 backed by exceptional service and dependable logistics.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Contact Us
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    Explore Our Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;