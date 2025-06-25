import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully! 🚀');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: 'kkskumarsahu31@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 8081267564',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Prayagraj, UP',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '💬',
      label: 'WhatsApp',
      value: '+91 8081267564',
      color: 'from-green-400 to-green-600'
    }
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-6 py-20 overflow-hidden"
    >
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl w-full relative z-10">
        
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-7xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 tracking-tight">
            Let's Connect
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4"></div>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
            Ready to bring your ideas to life? Drop me a message and let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-8">Get in Touch</h3>
            
            {contactMethods.map((method, index) => (
              <div key={index} className="group relative">
                <div className="relative perspective-1000">
                  <div className="transform-gpu transition-all duration-500 preserve-3d group-hover:rotate-y-6 group-hover:scale-105">
                    
                    {/* Contact Card */}
                    <div className={`relative bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-2xl group-hover:shadow-3xl transition-all duration-500`}>
                      
                      {/* Glowing Border */}
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${method.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>
                      
                      <div className="relative flex items-center gap-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 transition-all duration-300`}>
                          {method.icon}
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg">{method.label}</h4>
                          <p className="text-gray-300">{method.value}</p>
                        </div>
                        <div className="ml-auto">
                          <div className={`w-3 h-3 bg-gradient-to-r ${method.color} rounded-full animate-pulse`}></div>
                        </div>
                      </div>
                    </div>

                    {/* 3D Shadow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-20 rounded-2xl transform translate-x-4 translate-y-4 -z-10 blur-sm`}></div>
                  </div>
                </div>
              </div>
            ))}

            {/* Social Links */}
            {/* <div className="mt-8">
              <h4 className="text-white font-bold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {['💼', '🐙', '📸', '🐦'].map((emoji, index) => (
                  <div key={index} className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xl cursor-pointer hover:scale-110 transition-all duration-300 shadow-lg">
                    {emoji}
                  </div>
                ))}
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          <div className="relative">
            
            {/* Form Container */}
            <div className="relative perspective-1000">
              <div className="transform-gpu transition-all duration-700 preserve-3d hover:rotate-y-3">
                
                {/* Glowing Background */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-30 animate-pulse"></div>
                
                {/* Main Form */}
                <div className="relative bg-slate-800/90 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
                  
                  <h3 className="text-3xl font-bold text-white mb-8 text-center">Send Message</h3>
                  
                  <div className="space-y-6">
                    
                    {/* Name Field */}
                    <div className="relative group">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Your Name"
                        className="w-full p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all duration-300"
                        required
                      />
                      {focusedField === 'name' && (
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-30 -z-10"></div>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="relative group">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Your Email"
                        className="w-full p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300"
                        required
                      />
                      {focusedField === 'email' && (
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-30 -z-10"></div>
                      )}
                    </div>

                    {/* Message Field */}
                    <div className="relative group">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Your Message"
                        rows="5"
                        className="w-full p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 resize-none focus:outline-none focus:border-pink-400 focus:bg-white/20 transition-all duration-300"
                        required
                      />
                      {focusedField === 'message' && (
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-xl blur opacity-30 -z-10"></div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className={`
                        w-full py-4 px-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl 
                        shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300
                        ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:from-cyan-600 hover:to-purple-600'}
                      `}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending...
                        </div>
                      ) : (
                        'Send Message 🚀'
                      )}
                    </button>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce opacity-80"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce opacity-70" style={{animationDelay: '1s'}}></div>
                </div>

                {/* 3D Shadow */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-pink-900 opacity-30 rounded-3xl transform translate-x-6 translate-y-6 -z-10 blur-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-3xl p-6 border border-white/10 max-w-md mx-auto">
            <p className="text-gray-300 mb-2">Response Time</p>
            <p className="text-white font-bold text-xl">Usually within 24 hours ⚡</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-6 {
          transform: rotateY(6deg);
        }
        .rotate-y-3 {
          transform: rotateY(3deg);
        }
      `}</style>
    </section>
  );
};

export default Contact;