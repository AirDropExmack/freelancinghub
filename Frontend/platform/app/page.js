import Image from "next/image";
import { Navbar } from "./Component/Navbar";
import myimage from "../mymaan.jpeg";
import applysec from "../applysec.jpg";
import john from "../johndoesec.jpg";
import MyTweetEmbed from "./Component/twitter";
import { ShipWheel, Laptop, Rocket, Medal, Clock, ArrowRight, Navigation } from 'lucide-react';
import { Myform } from "./Component/Contact";
import { SiteFooter } from "./Component/footer";

export default function Home() {
  const tweetId = [
    "1880353510505775188", "1864340174739485064", "1863631921181270221",
    "1863933833734738425", "1852763701591617665", "1852257127525400595", "1845097126637994147"
  ];

  return (
    <>
      <div className="bg-black min-h-screen w-full flex flex-col relative">
        <div className="absolute inset-0 w-full h-full">
          <div className="h-full w-full grid grid-cols-[repeat(24,1fr)] gap-2">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="border-r border-gray-800/40 h-full"></div>
            ))}
          </div>
          <div className="absolute inset-0">
            <div className="h-full w-full grid grid-rows-[repeat(24,1fr)] gap-2">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="border-b border-gray-800/40 w-full"></div>
              ))}
            </div>
          </div>
        </div>

        <Navbar />

        {/* Hero Section */}
        <div className="w-full h-auto mt-[100px] md:mt-[200px] flex justify-center items-center relative z-10 px-4">
          <div className="flex flex-col space-y-6 h-auto w-full md:w-[80%] lg:w-[50%] justify-center items-center text-center">
            <h1 className="font-bold text-[40px] sm:text-[60px] md:text-[80px] text-white transition-transform duration-150 hover:scale-75 hover:cursor-pointer">
              Welcome to{" "}
              <span className="text-blue-600">Freelancing </span>
              <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent hover:border-b-2 border-orange-500">
                Hub
              </span>
            </h1>
            <p className="font-light text-slate-500 text-[16px] md:text-[18px] bg-gradient-to-r from-white via-slate-600 to-slate-700 bg-clip-text text-transparent">
              We deliver the best service across the Globe. Give us a try and pay only if you love our work{" "}
              <span className="text-[30px] text-yellow-400">✨</span>
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center w-full h-auto space-y-4 md:space-y-0 md:space-x-10">
              <button className="text-white hover:rotate-12 bg-blue-600 p-3 w-[200px] rounded-lg text-[18px] md:text-[20px] font-medium transition-transform duration-300 hover:scale-105 hover:bg-red-600">
                Explore
              </button>
              <button className="text-white hover:-rotate-12 bg-gray-950 p-3 w-[200px] border-2 border-white text-[18px] md:text-[20px]">
                Our Rating
              </button>
            </div>
            <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-7">
              <div className="flex items-center">
                <Image src={myimage} alt="my_image" className="h-[50px] w-[50px] md:h-[60px] md:w-[60px] rounded-full border-4 border-white relative transition-transform duration-150 hover:scale-110 hover:z-50 hover:cursor-pointer" />
                <Image src={applysec} alt="my_image" className="h-[50px] w-[50px] md:h-[60px] md:w-[60px] rounded-full relative right-4 border-4 border-white transition-transform duration-150 hover:scale-110 hover:z-50 hover:cursor-pointer" />
                <Image src={john} alt="my_image" className="h-[50px] w-[50px] md:h-[60px] md:w-[60px] rounded-full border-4 border-white relative right-6 transition-transform duration-150 hover:scale-110 hover:z-50 hover:cursor-pointer" />
                <Image src={myimage} alt="my_image" className="h-[50px] w-[50px] md:h-[60px] md:w-[60px] rounded-full border-4 border-white relative right-8 transition-transform duration-150 hover:scale-110 hover:z-50 hover:cursor-pointer" />
                <p className="font-medium text-slate-300 relative right-3">2000+ Connect people</p>
              </div>
              <div className="flex items-center">
                <p>
                  ⭐⭐⭐⭐ <span className="text-white">+</span>
                  <span className="bg-gradient-to-r from-white via-slate-600 to-slate-700 bg-clip-text text-transparent text-[18px] md:text-[20px]">
                    {" "}
                    Rating
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Twitter Section */}
        <div className="w-full h-auto mt-[100px] md:mt-[200px] flex flex-col items-center px-4">
          <h1 className="mt-6 font-bold text-[40px] sm:text-[60px] md:text-[70px] text-white text-center">
            What people Say? लोगो की बातें
          </h1>
          <div className="flex flex-col items-center w-full h-auto mt-[50px] md:mt-[100px]">
            {[0, 1, 2].map((i) => (
              <div key={i} className="w-full h-auto flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 md:space-x-5 z-10">
                {tweetId.slice(i * 3, (i + 1) * 3).map((id) => (
                  <MyTweetEmbed key={id} userid={id} />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-auto mt-[100px] md:mt-[200px] flex flex-col items-center px-4">
          <div className="flex flex-col md:flex-row items-center space-x-3">
            <h1 className="font-bold text-[40px] sm:text-[60px] md:text-[80px] text-center text-white">
              Services (Mujhe काम चाहिए)
            </h1>
            <ShipWheel className="text-blue-700 h-[60px] w-[60px] md:h-[100px] md:w-[100px]" />
          </div>
          <div className="w-full md:w-[80%] h-auto flex flex-col space-y-7 mt-8">
            <div className="w-full flex flex-col md:flex-row justify-center items-center space-y-7 md:space-y-0 md:space-x-7">
              {[
                { title: "Landing Page", price: "₹2999", delivery: "5 days" },
                { title: "AI projects", price: "₹3999", delivery: "6 days" },
              ].map((service, index) => (
                <div key={index} className="bg-gradient-to-br rounded-lg from-gray-900 to-gray-800 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] w-full md:w-[45%] h-auto flex flex-col p-6">
                  <div className="w-full flex items-center justify-around">
                    <div className="flex flex-col space-y-3">
                      <h1 className="font-bold text-[24px] md:text-[30px] bg-gradient-to-r from-pink-600 via-purple-700 to-orange-500 bg-clip-text text-transparent">
                        {service.title}
                      </h1>
                      <p className="text-slate-500">Elevate your brand with professional services</p>
                    </div>
                    <h1 className="bg-red-100 p-1 font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-pink-500 text-white">
                      Premium Service
                    </h1>
                  </div>
                  <div className="flex flex-col space-y-8 p-6">
                    {[
                      { icon: Rocket, text: "Stunning Responsive website" },
                      { icon: Laptop, text: "Advanced UI/UX optimization" },
                      { icon: Medal, text: "SEO-driven architecture" },
                      { icon: Clock, text: `Express ${service.delivery} delivery` },
                    ].map((item, i) => (
                      <div key={i} className="w-full flex space-x-4 items-center">
                        <item.icon className="h-[40px] w-[40px] md:h-[50px] md:w-[50px] bg-blue-900 rounded-lg p-1 text-pink-500" />
                        <h1 className="text-[16px] md:text-[20px] text-slate-300 font-medium">{item.text}</h1>
                      </div>
                    ))}
                  </div>
                  <hr />
                  <div className="flex justify-around w-full h-auto items-center mt-4">
                    <div className="flex flex-col space-y-2">
                      <h1 className="font-bold text-white text-[30px] md:text-[40px]">{service.price}</h1>
                      <p className="font-medium text-slate-400">per {service.title}</p>
                    </div>
                    <div>
                      <h1 className="bg-slate-900 text-white p-2 rounded-lg font-bold">10% off</h1>
                    </div>
                  </div>
                  <div className="w-full h-auto flex justify-center items-center mt-4 transition-transform duration-300 hover:scale-110 z-10">
                    <div className="bg-gradient-to-r rounded-2xl from-pink-600 via-purple-700 to-orange-500 flex space-x-3 w-[70%] p-2 items-center justify-center">
                      <h1 className="text-white font-bold text-[16px] md:text-[20px]">Start your project</h1>
                      <ArrowRight className="text-white h-[24px] w-[24px] md:h-[30px] md:w-[30px]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row: 1 Card */}
            <div className="w-full flex justify-center items-center">
              <div className="bg-gradient-to-br rounded-lg from-gray-900 to-gray-800 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] w-full md:w-[45%] h-auto flex flex-col p-6">
                <div className="w-full flex items-center justify-around">
                  <div className="flex flex-col space-y-3">
                    <h1 className="font-bold text-[24px] md:text-[30px] bg-gradient-to-r from-pink-600 via-purple-700 to-orange-500 bg-clip-text text-transparent">
                      Full Stack Project
                    </h1>
                    <p className="text-slate-500">Elevate your brand with professional Full stack website</p>
                  </div>
                  <h1 className="bg-red-100 p-1 font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-pink-500 text-white">
                    Premium Service
                  </h1>
                </div>
                <div className="flex flex-col space-y-8 p-6">
                  {[
                    { icon: Rocket, text: "Stunning Responsive website" },
                    { icon: Laptop, text: "Advanced UI/UX optimization" },
                    { icon: Medal, text: "Well Scaled Application" },
                    { icon: Clock, text: "Express 10-15 day-delivery" },
                  ].map((item, i) => (
                    <div key={i} className="w-full flex space-x-4 items-center">
                      <item.icon className="h-[40px] w-[40px] md:h-[50px] md:w-[50px] bg-blue-900 rounded-lg p-1 text-pink-500" />
                      <h1 className="text-[16px] md:text-[20px] text-slate-300 font-medium">{item.text}</h1>
                    </div>
                  ))}
                </div>
                <hr />
                <div className="flex justify-around w-full h-auto items-center mt-4">
                  <div className="flex flex-col space-y-2">
                    <h1 className="font-bold text-white text-[30px] md:text-[40px]">₹10,000</h1>
                    <p className="font-medium text-slate-400">per Project</p>
                  </div>
                  <div>
                    <h1 className="bg-slate-900 text-white p-2 rounded-lg font-bold">20% off</h1>
                  </div>
                </div>
                <div className="w-full h-auto flex justify-center items-center mt-4 transition-transform duration-300 hover:scale-110 z-10">
                  <div className="bg-gradient-to-r rounded-2xl from-pink-600 via-purple-700 to-orange-500 flex space-x-3 w-[70%] p-2 items-center justify-center">
                    <h1 className="text-white font-bold text-[16px] md:text-[20px]">Start your project</h1>
                    <ArrowRight className="text-white h-[24px] w-[24px] md:h-[30px] md:w-[30px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-auto mt-[100px] md:mt-[150px] flex flex-col items-center px-4">
          <div className="w-full flex justify-center items-center space-x-7">
            <h1 className="font-bold text-white text-[40px] sm:text-[60px] md:text-[80px]">Contact (डाउट पूछो)</h1>
            <Navigation className="h-[40px] w-[40px] md:h-[60px] md:w-[60px] text-purple-600 font-bold" />
          </div>
          <Myform />
        </div>

        <SiteFooter />
      </div>
    </>
  );
}
