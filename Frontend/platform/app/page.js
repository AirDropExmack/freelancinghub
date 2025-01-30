import Image from "next/image";
import { Navbar } from "./Component/Navbar";
import myimage from "../mymaan.jpeg"
import applysec from "../applysec.jpg"
import john from "../johndoesec.jpg"

export default function Home() {
  return(
  <>
  <div className="bg-black min-h-screen w-full flex flex-col">
  <Navbar></Navbar>
  <div className="w-full h-auto mt-[200px] flex justify-center items-center">
   <div className="flex flex-col space-y-6 h-auto w-[50%] justify-center items-center">
      <div>
        <h1 className="font-bold text-[80px] text-white text-center">Welcome to 
        <span className="text-blue-600 text-center"> Freelancing </span> 
        <span className='bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent hover:border-b-2 border-orange-500'>
        Hub</span></h1>
      </div>
      <p className="text-center font-light text-slate-500 text-[18px] bg-gradient-to-r from-white via-slate-600 to-slate-700 bg-clip-text text-transparent">
        We deliver the best service across the Globe , Give us a try and pay only if you will
        love our work <span className="text-[30px] text-yellow-400">✨</span>
      </p>

      <div className="flex justify-center items-center w-[100%] h-auto space-x-10">
         <button className="text-white bg-blue-600 p-3 w-[200px] rounded-lg text-[20px] font-medium transition-transform duration-300 hover:scale-105 hover:bg-red-600">Explore</button>
         <button className="text-white bg-gray-950 p-3 w-[200px] border-2 border-white text-[20px]">Our Rating</button>
      </div>

      <div className="w-full h-[100px] flex justify-center items-center space-x-7">
        <div className="flex items-center">
        <Image src={myimage} alt="my_image" className="h-[60px] w-[60px] rounded-full border-4 border-white relative transition-transform duration-150 hover:scale-110 hover:z-50 hover:cursor-pointer"></Image>
        <Image src={applysec} alt="my_image" className="h-[60px] w-[60px] rounded-full relative right-4 border-4 border-white transition-transform duration-150 hover:scale-110 hover:z-50 hover:cursor-pointer"></Image>
        <Image src={john} alt="my_image" className="h-[60px] w-[60px] rounded-full border-4 border-white relative right-6 transition-transform duration-150 hover:scale-110 hover:z-50 hover:cursor-pointer"></Image>
        <Image src={myimage} alt="my_image" className="h-[60px] w-[60px] rounded-full border-4 border-white relative right-8 transition-transform duration-150 hover:scale-110 hover:z-50 hover:cursor-pointer"></Image>
        <p className="font-medium text-slate-300 relative right-3">2000+ Connect pople </p>
        </div>

        <div className="flex items-center">
        <p>⭐⭐⭐⭐ <span className="text-white">+</span><span className="bg-gradient-to-r from-white via-slate-600 to-slate-700 bg-clip-text text-transparent text-[20px]"> Rating</span></p>
        </div>
      </div>
   </div>
  </div>
  </div>
  </>
  )
}
