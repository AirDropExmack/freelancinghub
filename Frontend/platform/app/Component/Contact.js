import { Send, Sparkles, MessageSquare, User, Phone, Mail } from 'lucide-react';

export function Myform(){
  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <div className="bg-black rounded-3xl shadow-2xl overflow-hidden border border-purple-300/20">
        <div className="p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-black/10"/>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Sparkles className="w-10 h-10 text-yellow-300 animate-bounce" />
            <h2 className="text-5xl font-bold text-purple-700">Get In Touch</h2>
            <Sparkles className="w-10 h-10 text-yellow-300 animate-bounce" />
          </div>
          <p className="text-purple-100 text-lg">Drop a message and let's make something amazing together! ✨</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg p-12 space-y-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="relative">
                <User className="w-6 h-6 absolute left-4 top-4 text-purple-200" />
                <input
                  type="text"
                  className="w-full pl-14 pr-6 py-4 bg-white/20 border border-purple-300/30 rounded-2xl text-white placeholder-purple-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 hover:bg-white/30 text-lg"
                  placeholder="Your Name"
                  required
                />
              </div>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <div className="relative">
                <Phone className="w-6 h-6 absolute left-4 top-4 text-purple-200" />
                <input
                  type="tel"
                  className="w-full pl-14 pr-6 py-4 bg-white/20 border border-purple-300/30 rounded-2xl text-white placeholder-purple-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 hover:bg-white/30 text-lg"
                  placeholder="Your Phone"
                  required
                />
              </div>
            </div>
            
            <div className="col-span-2">
              <div className="relative">
                <Mail className="w-6 h-6 absolute left-4 top-4 text-purple-200" />
                <input
                  type="email"
                  className="w-full pl-14 pr-6 py-4 bg-white/20 border border-purple-300/30 rounded-2xl text-white placeholder-purple-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 hover:bg-white/30 text-lg"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            
            <div className="col-span-2">
              <div className="relative">
                <MessageSquare className="w-6 h-6 absolute left-4 top-4 text-purple-200" />
                <textarea
                  rows="5"
                  className="w-full pl-14 pr-6 py-4 bg-white/20 border border-purple-300/30 rounded-2xl text-white placeholder-purple-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 hover:bg-white/30 resize-none text-lg"
                  placeholder="Type your message here... 🚀"
                  required
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-5 px-8 rounded-2xl font-medium flex items-center justify-center space-x-3 hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-xl mt-8"
          >
            <Send className="w-8 h-8" />
            <span>Send Message 🚀</span>
          </button>
        </div>

      </div>
      
    </div>
  );
}

