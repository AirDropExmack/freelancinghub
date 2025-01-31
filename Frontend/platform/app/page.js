import Image from "next/image";
import { Navbar } from "./Component/Navbar";
import myimage from "../mymaan.jpeg";
import applysec from "../applysec.jpg";
import john from "../johndoesec.jpg";
import MyTweetEmbed  from "./Component/twitter";
import { ShipWheel } from 'lucide-react';
import { Laptop, Rocket, Medal, Clock, ArrowRight } from 'lucide-react';
import { Navigation } from 'lucide-react';
import { Myform } from "./Component/Contact";
import { SiteFooter } from "./Component/footer";


export default function Home() {


  const tweetId = ["1880353510505775188" , "1864340174739485064" , 
    "1863631921181270221" ,"1863933833734738425" , "1852763701591617665" , 
    "1852257127525400595" ,"1845097126637994147"]

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
        <div className="w-full h-auto mt-[200px] flex justify-center items-center relative z-10">
          <div className="flex flex-col space-y-6 h-auto w-[50%] justify-center items-center">
            <div>
              <h1 className="font-bold text-[80px] text-white text-center transition-transform duration-150 hover:scale-75 hover:cursor-pointer">
                Welcome to{" "}
                <span className="text-blue-600 text-center">Freelancing </span>
                <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent hover:border-b-2 border-orange-500">
                  Hub
                </span>
              </h1>
            </div>
            <p className="text-center font-light text-slate-500 text-[18px] bg-gradient-to-r from-white via-slate-600 to-slate-700 bg-clip-text text-transparent">
              We deliver the best service across the Globe, Give us a try and pay only if you will
              love our work <span className="text-[30px] text-yellow-400">✨</span>
            </p>
            <div className="flex justify-center items-center w-[100%] h-auto space-x-10">
              <button className="text-white hover:rotate-12 bg-blue-600 p-3 w-[200px] rounded-lg text-[20px] font-medium transition-transform duration-300 hover:scale-105 hover:bg-red-600">
                Explore
              </button>
              <button className="text-white hover:-rotate-12 bg-gray-950 p-3 w-[200px] border-2 border-white text-[20px]">
                Our Rating
              </button>
            </div>
            <div className="w-full h-[100px] flex justify-center items-center space-x-7">
              <div className="flex items-center">
                <Image
                  src={myimage}
                  alt="my_image"
                  className="h-[60px] w-[60px] rounded-full border-4 border-white relative transition-transform duration-150 hover:scale-110 hover:z-50 hover:cursor-pointer"
                />
                <Image
                  src={applysec}
                  alt="my_image"
                  className="h-[60px] w-[60px] rounded-full relative right-4 border-4 border-white transition-transform duration-150 hover:scale-110 hover:z-50 hover:cursor-pointer"
                />
                <Image
                  src={john}
                  alt="my_image"
                  className="h-[60px] w-[60px] rounded-full border-4 border-white relative right-6 transition-transform duration-150 hover:scale-110 hover:z-50 hover:cursor-pointer"
                />
                <Image
                  src={myimage}
                  alt="my_image"
                  className="h-[60px] w-[60px] rounded-full border-4 border-white relative right-8 transition-transform duration-150 hover:scale-110 hover:z-50 hover:cursor-pointer"
                />
                <p className="font-medium text-slate-300 relative right-3">
                  2000+ Connect people
                </p>
              </div>
              <div className="flex items-center">
                <p>
                  ⭐⭐⭐⭐ <span className="text-white">+</span>
                  <span className="bg-gradient-to-r from-white via-slate-600 to-slate-700 bg-clip-text text-transparent text-[20px]">
                    {" "}
                    Rating
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Twitter wala section */}
        <div className="w-full h-auto mt-[200px] flex flex-col items-center">
          <h1 className="mt-6 font-bold text-[70px] text-white">What people Say ? लोगो की बातें</h1>

          <div className="flex flex-col items-center w-[80%] h-auto mt-[100px]">
            <div className="w-auto h-[400px] mt-[10px] flex space-x-5">
                <MyTweetEmbed userid={tweetId[0]}></MyTweetEmbed>
                <MyTweetEmbed userid={tweetId[1]}></MyTweetEmbed>
                <MyTweetEmbed userid={tweetId[2]}></MyTweetEmbed>
            </div>

            <div className="w-auto h-[400px] mt-[50px] flex space-x-5">
                <MyTweetEmbed userid={tweetId[3]}></MyTweetEmbed>
                <MyTweetEmbed userid={tweetId[4]}></MyTweetEmbed>
            </div>

            <div className="w-auto h-[400px] mt-[50px] flex space-x-5">
                <MyTweetEmbed userid={tweetId[5]}></MyTweetEmbed>
                <MyTweetEmbed userid={tweetId[6]}></MyTweetEmbed>
                <MyTweetEmbed userid={tweetId[2]}></MyTweetEmbed>
            </div>

          </div>
        </div>
      
      {/* Services wala section */}

      <div className="w-full h-auto  mt-[200px] flex flex-col items-center">
        <div className="flex space-x-3">
        <h1 className="font-bold text-[80px] text-center text-white">Services ( Mujhe काम चाहिए )</h1>
        <ShipWheel className="text-blue-700 h-[100px] w-[100px]"></ShipWheel>
        </div>
 
        <div className="w-[80%]   h-auto flex flex-col space-y-7">
          <div className="h-auto w-full mt-8 flex flex-wrap justify-between">
            <div className="bg-gradient-to-br rounded-lg from-gray-900 to-gray-800 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] w-[40%] h-full flex flex-col">
               <div className="w-full flex items-center justify-around">
                <div className="flex flex-col space-y-3">
                <h1 className="font-bold text-[30px] bg-gradient-to-r from-pink-600 via-purple-700 to-orange-500 bg-clip-text text-transparent mt-2">Landing Page</h1>
                <p className="text-slate-500">Elevate your brand with stunning Landing page</p>
                </div>
                 <h1 className="bg-red-100 p-1 font-semibold rounded-lg bg-gradient-to-r from-blue-600  to-pink-500 text-white">Premium Service</h1>
               </div>
    
               <div className="flex flex-col space-y-8 p-14">
                 <div className="w-full flex space-x-4 items-center">
                   <Rocket className="h-[50px] w-[50px] bg-blue-900 rounded-lg p-1 text-pink-500"></Rocket>
                   <h1 className="text-[20px] text-slate-300 font-medium">Stunning Responsive website</h1>
                 </div>


                 <div className="w-full flex space-x-4 items-center">
                   <Laptop className="h-[50px] w-[50px] bg-blue-900 rounded-lg p-1 text-green-600"></Laptop>
                   <h1 className="text-[20px] text-slate-300 font-medium">Advanced UI/UX optimization</h1>
                 </div>

                 <div className="w-full flex space-x-4 items-center4">
                   <Medal className="h-[50px] w-[50px] bg-blue-900 rounded-lg p-1 text-yellow-400"></Medal>
                   <h1 className="text-[20px] text-slate-300 font-medium">SEO-driven architecture</h1>
                 </div>

                 <div className="w-full flex space-x-4 items-center4">
                   <Clock className="h-[50px] w-[50px] bg-blue-900 rounded-lg p-1 text-purple-700"></Clock>
                   <h1 className="text-[20px] text-slate-300 font-medium">Express 5 day-delivery</h1>
                 </div>
               </div>
               
               <hr></hr>

               <div className="flex justify-around w-full h-auto items-center">
                <div className="flex flex-col space-y-2">
                <h1 className="font-bold text-white text-[40px]">₹2000</h1>
                <p className="font-medium text-slate-400">per Landing page</p>
                </div>

                <div>
                  <h1 className="bg-slate-900 text-white p-2 rounded-lg font-bold">20% off</h1>
                </div>
               
               </div>

               <div className="w-full h-auto flex justify-center items-center mt-4">
                  <div className="bg-gradient-to-r rounded-2xl from-pink-600 via-purple-700 to-orange-500 flex space-x-3 w-[70%] p-2 items-center justify-center">
                    <h1 className="text-white font-bold text-[20px]">Start your project</h1>
                    <ArrowRight className="text-white h-[30px] w-[30px]"></ArrowRight>
                  </div>
               </div>
               
            </div>

            <div className="bg-gradient-to-br rounded-lg from-gray-900 to-gray-800 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] w-[40%] h-full">
            <div className="w-full flex items-center justify-around">
                <div className="flex flex-col space-y-3">
                <h1 className="font-bold text-[30px] bg-gradient-to-r from-pink-600 via-purple-700 to-orange-500 bg-clip-text text-transparent mt-2">Landing Page</h1>
                <p className="text-slate-500">Elevate your brand with stunning Landing page</p>
                </div>
                 <h1 className="bg-red-100 p-1 font-semibold rounded-lg bg-gradient-to-r from-blue-600  to-pink-500 text-white">Premium Service</h1>
               </div>
    
               <div className="flex flex-col space-y-8 p-14">
                 <div className="w-full flex space-x-4 items-center">
                   <Rocket className="h-[50px] w-[50px] bg-blue-900 rounded-lg p-1 text-pink-500"></Rocket>
                   <h1 className="text-[20px] text-slate-300 font-medium">Stunning Responsive website</h1>
                 </div>


                 <div className="w-full flex space-x-4 items-center">
                   <Laptop className="h-[50px] w-[50px] bg-blue-900 rounded-lg p-1 text-green-600"></Laptop>
                   <h1 className="text-[20px] text-slate-300 font-medium">Advanced UI/UX optimization</h1>
                 </div>

                 <div className="w-full flex space-x-4 items-center4">
                   <Medal className="h-[50px] w-[50px] bg-blue-900 rounded-lg p-1 text-yellow-400"></Medal>
                   <h1 className="text-[20px] text-slate-300 font-medium">SEO-driven architecture</h1>
                 </div>

                 <div className="w-full flex space-x-4 items-center4">
                   <Clock className="h-[50px] w-[50px] bg-blue-900 rounded-lg p-1 text-purple-700"></Clock>
                   <h1 className="text-[20px] text-slate-300 font-medium">Express 5 day-delivery</h1>
                 </div>
               </div>
               
               <hr></hr>

               <div className="flex justify-around w-full h-auto items-center">
                <div className="flex flex-col space-y-2">
                <h1 className="font-bold text-white text-[40px]">₹2000</h1>
                <p className="font-medium text-slate-400">per Landing page</p>
                </div>

                <div>
                  <h1 className="bg-slate-900 text-white p-2 rounded-lg font-bold">20% off</h1>
                </div>
               
               </div>

               <div className="w-full h-auto flex justify-center items-center mt-4">
                  <div className="bg-gradient-to-r rounded-2xl from-pink-600 via-purple-700 to-orange-500 flex space-x-3 w-[70%] p-2 items-center justify-center">
                    <h1 className="text-white font-bold text-[20px]">Start your project</h1>
                    <ArrowRight className="text-white h-[30px] w-[30px]"></ArrowRight>
                  </div>
               </div>


            </div>
            <div className=" h-auto w-full flex justify-center items-center">
            <div className="bg-gradient-to-br rounded-lg from-gray-900 to-gray-800 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] w-[40%] h-full flex flex-col mt-[60px]">
            <div className="w-full flex items-center justify-around">
                <div className="flex flex-col space-y-3">
                <h1 className="font-bold text-[30px] bg-gradient-to-r from-pink-600 via-purple-700 to-orange-500 bg-clip-text text-transparent mt-2">Landing Page</h1>
                <p className="text-slate-500">Elevate your brand with stunning Landing page</p>
                </div>
                 <h1 className="bg-red-100 p-1 font-semibold rounded-lg bg-gradient-to-r from-blue-600  to-pink-500 text-white">Premium Service</h1>
               </div>
    
               <div className="flex flex-col space-y-8 p-14">
                 <div className="w-full flex space-x-4 items-center">
                   <Rocket className="h-[50px] w-[50px] bg-blue-900 rounded-lg p-1 text-pink-500"></Rocket>
                   <h1 className="text-[20px] text-slate-300 font-medium">Stunning Responsive website</h1>
                 </div>


                 <div className="w-full flex space-x-4 items-center">
                   <Laptop className="h-[50px] w-[50px] bg-blue-900 rounded-lg p-1 text-green-600"></Laptop>
                   <h1 className="text-[20px] text-slate-300 font-medium">Advanced UI/UX optimization</h1>
                 </div>

                 <div className="w-full flex space-x-4 items-center4">
                   <Medal className="h-[50px] w-[50px] bg-blue-900 rounded-lg p-1 text-yellow-400"></Medal>
                   <h1 className="text-[20px] text-slate-300 font-medium">SEO-driven architecture</h1>
                 </div>

                 <div className="w-full flex space-x-4 items-center4">
                   <Clock className="h-[50px] w-[50px] bg-blue-900 rounded-lg p-1 text-purple-700"></Clock>
                   <h1 className="text-[20px] text-slate-300 font-medium">Express 5 day-delivery</h1>
                 </div>
               </div>
               
               <hr></hr>

               <div className="flex justify-around w-full h-auto items-center">
                <div className="flex flex-col space-y-2">
                <h1 className="font-bold text-white text-[40px]">₹2000</h1>
                <p className="font-medium text-slate-400">per Landing page</p>
                </div>

                <div>
                  <h1 className="bg-slate-900 text-white p-2 rounded-lg font-bold">20% off</h1>
                </div>
               
               </div>

               <div className="w-full h-auto flex justify-center items-center mt-4">
                  <div className="bg-gradient-to-r rounded-2xl from-pink-600 via-purple-700 to-orange-500 flex space-x-3 w-[70%] p-2 items-center justify-center">
                    <h1 className="text-white font-bold text-[20px]">Start your project</h1>
                    <ArrowRight className="text-white h-[30px] w-[30px]"></ArrowRight>
                  </div>
               </div>
            </div>
           </div>

          </div>

          
        </div>

        {/* contact us form  */}

        <div className="w-full h-[800px] mt-[150px] flex flex-col items-center">
          <div className="w-full flex justify-center items-center space-x-7">
          <h1 className="font-bold text-white text-[80px]">Contact (डाउट पूछो)</h1>
          <Navigation className="h-[60px] w-[60px] text-purple-600 font-bold"></Navigation>
          </div>
          <Myform></Myform>
        </div>

         {/* fotter section */}

        <SiteFooter></SiteFooter>
        
      </div>

      </div>
    </>
  );
}