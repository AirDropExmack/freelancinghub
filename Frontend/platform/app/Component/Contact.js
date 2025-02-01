"use client"

import { Send, Sparkles, MessageSquare, User, Phone, Mail } from 'lucide-react';
import axios from 'axios';
import { useState } from 'react';

export function Myform() {

 
  const [username , setUsername] = useState("")
  const [email , setEmail] = useState("")
  const [phoneNumber , setphoneNumber] = useState("")
  const [text,setText] = useState("")

  const sendDetails = async()=>{
    await axios.post("https://business-2-murex.vercel.app/postreq/postdata" , {
      username:username,
      email : email,
      phoneNumber : phoneNumber,
      text : text
    })
    .then((response)=>{
      console.log("your message is " + response.data.msg)
      alert("your message is " + response.data.msg)
      setUsername("")
      setEmail("")
      setphoneNumber("")
      setText("")
    })
    .catch((error)=>{
      console.log("your message is " + error)
      alert("your message is " + error)
    })
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
      <div className="bg-black rounded-3xl shadow-2xl overflow-hidden border border-purple-300/20">
        <div className="p-6 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-black/10" />
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-4 md:mb-6">
            <Sparkles className="w-6 h-6 md:w-10 md:h-10 text-yellow-300 animate-bounce" />
            <h2 className="text-3xl md:text-5xl font-bold text-purple-700">Get In Touch</h2>
            <Sparkles className="w-6 h-6 md:w-10 md:h-10 text-yellow-300 animate-bounce" />
          </div>
          <p className="text-purple-100 text-sm md:text-lg">
            Drop a message and let's make something amazing together! ✨
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-6 md:p-12 space-y-6 md:space-y-8">
          {/* Inputs container */}
          <div className="flex flex-col space-y-6 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
            <div className="w-full">
              <div className="relative">
                <User className="w-5 h-5 md:w-6 md:h-6 absolute left-3 top-3 md:left-4 md:top-4 text-purple-200" />
                <input
                  type="text"
                  className="w-full pl-10 md:pl-14 pr-4 md:pr-6 py-3 md:py-4 bg-white/20 border border-purple-300/30 rounded-2xl text-white placeholder-purple-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 hover:bg-white/30 text-base md:text-lg"
                  placeholder="Your Name"
                  onChange={(e)=>setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="w-full">
              <div className="relative">
                <Phone className="w-5 h-5 md:w-6 md:h-6 absolute left-3 top-3 md:left-4 md:top-4 text-purple-200" />
                <input
                  type="tel"
                  className="w-full pl-10 md:pl-14 pr-4 md:pr-6 py-3 md:py-4 bg-white/20 border border-purple-300/30 rounded-2xl text-white placeholder-purple-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 hover:bg-white/30 text-base md:text-lg"
                  placeholder="Your Phone"
                  onChange={(e)=>setphoneNumber(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="w-full col-span-2">
              <div className="relative">
                <Mail className="w-5 h-5 md:w-6 md:h-6 absolute left-3 top-3 md:left-4 md:top-4 text-purple-200" />
                <input
                  type="email"
                  className="w-full pl-10 md:pl-14 pr-4 md:pr-6 py-3 md:py-4 bg-white/20 border border-purple-300/30 rounded-2xl text-white placeholder-purple-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 hover:bg-white/30 text-base md:text-lg"
                  placeholder="Your Email"
                  onChange={(e)=>setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="w-full col-span-2">
              <div className="relative">
                <MessageSquare className="w-5 h-5 md:w-6 md:h-6 absolute left-3 top-3 md:left-4 md:top-4 text-purple-200" />
                <textarea
                  rows="5"
                  className="w-full pl-10 md:pl-14 pr-4 md:pr-6 py-3 md:py-4 bg-white/20 border border-purple-300/30 rounded-2xl text-white placeholder-purple-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 hover:bg-white/30 resize-none text-base md:text-lg"
                  placeholder="Type your message here... 🚀"
                  onChange={(e)=>setText(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            onClick={sendDetails}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 md:py-5 px-6 md:px-8 rounded-2xl font-medium flex items-center justify-center space-x-2 md:space-x-3 hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg md:text-xl mt-6 md:mt-8"
          >
            <Send className="w-6 h-6 md:w-8 md:h-8" />
            <span>Send Message 🚀</span>
          </button>
        </div>
      </div>
    </div>
  );
}