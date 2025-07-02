import React from 'react';
import { Users } from 'lucide-react';

const Team = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-50 to-red-50 px-4 py-2 rounded-full border border-orange-100 mb-6">
            <Users className="h-4 w-4 text-orange-500" />
            <span className="text-sm font-semibold text-orange-700">Join Our Team</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Build Your Career
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> With Us</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Join our growing team of professionals and build an exciting career in 
            building maintenance, heavy haulage, and construction services.
          </p>
        </div>

        {/* Join Our Team CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-orange-400 to-red-500 rounded-full transform -translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-yellow-400 to-orange-500 rounded-full transform translate-x-24 translate-y-24"></div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Users className="h-4 w-4 text-emerald-400" />
                <span className="text-sm font-semibold">Career Opportunities</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-black mb-4">
                Ready to Join Our Team?
              </h3>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                We're always looking for talented professionals to join our growing team. 
                Explore exciting career opportunities in engineering, project management, operations, 
                and technical services.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h4 className="text-lg font-bold mb-2">Engineering Roles</h4>
                  <p className="text-slate-300 text-sm">Civil, Mechanical, and Project Engineers</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h4 className="text-lg font-bold mb-2">Operations</h4>
                  <p className="text-slate-300 text-sm">Equipment Operators and Site Supervisors</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h4 className="text-lg font-bold mb-2">Management</h4>
                  <p className="text-slate-300 text-sm">Project and Operations Managers</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  View Open Positions
                </a>
                <a
                  href="mailto:careers@bmhh.com.ng"
                  className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Send Your CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;