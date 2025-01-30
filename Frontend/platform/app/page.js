import Image from "next/image";
import { Navbar } from "./Component/Navbar";
import myimage from "../mymaan.jpeg";
import applysec from "../applysec.jpg";
import john from "../johndoesec.jpg";
import MyTweetEmbed  from "./Component/twitter";

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


      </div>
    </>
  );
}