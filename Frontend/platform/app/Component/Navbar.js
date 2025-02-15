"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLinks = [
    { href: "/", label: "Home" },
    { href: "", label: "About" },
    { href: "/", label: "Pricing" },
    { href: "/", label: "Connect" },
    { href: "/", label: "My Work" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black z-100">
      <div className="container mx-auto px-4 flex justify-between items-center h-[100px]">
        {/* Logo */}
        <div>
          <h1 className="font-bold text-[24px] md:text-[30px] text-blue-600 hover:cursor-pointer">
            Freelancing <span className='bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent'>Hub</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          {NavLinks.map((link) => (
            link.href ? (
              <Link key={link.href} href={link.href}>
                <span className="text-[16px] lg:text-[18px] font-bold text-slate-500 hover:text-white transition-colors">
                  {link.label}
                </span>
              </Link>
            ) : (
              <span key={link.label} className="text-[16px] lg:text-[18px] font-bold text-slate-500 hover:text-white transition-colors">
                {link.label}
              </span>
            )
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black/95 md:hidden">
            <div className="flex flex-col items-center py-6 space-y-4">
              {NavLinks.map((link) => (
                link.href ? (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-[18px] text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <span 
                    key={link.label} 
                    className="text-[18px] text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </span>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
