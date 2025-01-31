import myimage from "./mylufi.jpeg";
import Image from "next/image";
import { Github, Instagram, Linkedin, Twitter, Mail, Phone } from 'lucide-react';
import Link from "next/link";

export function SiteFooter() {
    return (
        <footer className="w-full bg-gray-900 text-white py-12 mt-[200px] z-50">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
                <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                        <div className="h-[70px] w-[70px] flex justify-around">
                            <Image src={myimage} className="h-full w-full rounded-full" alt="my_img" />
                        </div>
                        <h1 className="font-bold text-[30px] text-blue-600 hover:cursor-pointer">
                            Freelancing <span className='bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent hover:border-b-2 border-orange-500'>Hub</span>
                        </h1>
                    </div>
                    <p className="text-gray-400 max-w-[300px]">
                        Give us a chance to serve for you we are a team of great freelancers and tech guys . Great service with top-notch guys
                    </p>
                </div>

                <div className="flex flex-col space-y-4">
                    <h2 className="text-xl font-bold text-blue-600">Quick Links</h2>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Portfolio</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                    </ul>
                </div>

                <div className="flex flex-col space-y-4">
                    <h2 className="text-xl font-bold text-blue-600">Contact Us</h2>
                    <div className="flex items-center space-x-2">
                        <Mail className="h-5 w-5 text-gray-400" />
                        <a href="mailto:info@freelancinghub.com" className="text-gray-400 hover:text-white">mohitsati.eth@gmail.com</a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Phone className="h-5 w-5 text-gray-400" />
                        <a href="tel:+91 7417835639" className="text-gray-400 hover:text-white">+91 7417835639</a>
                    </div>
                </div>

                <div className="flex flex-col space-y-4">
                    <h2 className="text-xl font-bold text-blue-600">Follow Us</h2>
                    <div className="flex space-x-4">
                        <Link href={"https://github.com/SuperexMack"}><span className="text-gray-400 hover:text-white hover:cursor-pointer"><Github className="h-6 w-6 hover:animate-spin"/></span></Link>
                        <Link href={"https://www.instagram.com/dp_127.0.0.1/?next=%2F"}><span className="text-gray-400 hover:text-white"><Instagram className="h-6 w-6 hover:animate-spin"/></span></Link>
                        <Link href={"https://www.linkedin.com/in/mohitsatilinks/"}><span className="text-gray-400 hover:text-white"><Linkedin className="h-6 w-6 hover:animate-spin"/></span></Link>
                        <Link href={"https://x.com/mohitsatitwt"}><span className="text-gray-400 hover:text-white"><Twitter className="h-6 w-6 hover:animate-spin"/></span></Link>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} Freelancing Hub. All rights reserved.</p>
            </div>
        </footer>
    );
}