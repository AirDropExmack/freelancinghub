import Link from 'next/link';

export function Navbar(){
    return(
        <>
        <div className="fixed bg-black w-full h-[100px] flex items-center border-b border-gray-800">
            <div className="absolute left-[10%]">
              <h1 className="font-bold text-[30px] text-blue-600 hover:cursor-pointer">Freelancing <span className='bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent hover:border-b-2 border-orange-500'>Hub</span></h1>
            </div>
            <div className="flex space-x-12 absolute list-none right-[20%]">
                <Link href={"/"}><li className="text-[20px] font-bold text-slate-500 hover:cursor-pointer hover:border-b-2 border-green-700">Home</li></Link>
                <li className="text-[20px] font-bold text-slate-500 hover:cursor-pointer hover:border-b-2 border-green-700">About</li>
               <Link href={"/UserPage"}><li className="text-[20px] font-bold text-slate-500 hover:cursor-pointer hover:border-b-2 border-green-700">Pricing</li></Link> 
                <li className="text-[20px] font-bold text-slate-500 hover:cursor-pointer hover:border-b-2 border-green-700">Donate Us</li>
                <Link href={"/Entry"}><li className="text-[20px] font-bold text-slate-500 hover:cursor-pointer hover:border-b-2 border-green-700">Text Us</li></Link>
                <Link href={"/Signup"}><li className="text-[20px] font-bold text-slate-500 hover:cursor-pointer hover:border-b-2 border-green-700">Connect</li></Link>
                <Link href={"/UserData"}><li className="text-[20px] font-bold text-slate-500 hover:cursor-pointer hover:border-b-2 border-green-700">My Work</li></Link>
            </div>
        </div>
        </>
    )
}