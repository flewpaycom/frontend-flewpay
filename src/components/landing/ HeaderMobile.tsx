'use client'; // Marca el componente como Client Component

import { useState } from 'react';
import Image from 'next/image';

const HeaderMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-[#c2d0fb]/50 to-[#c2dafb]/50 py-4 px-4 md:px-6 flex justify-between items-center sticky top-0 z-50 w-full rounded-b-lg backdrop-blur-md">
      {/* Logo */}
      <div className="flex items-center space-x-2 md:space-x-4">
        <Image src="/logo.svg" alt="Company Logo" width={32} height={32} />
        <span className="font-bold text-base md:text-lg text-gray-800">Flew Pay</span>
      </div>

     
      <nav className="hidden sm:flex flex-1 justify-center">
        <ul className="flex space-x-4 md:space-x-6">
          <li><a href="/product" className="text-gray-800">Product</a></li>
          <li><a href="/services" className="text-gray-800">Services</a></li>
          <li><a href="/Aboutus" className="text-gray-800">About us</a></li>
          <li><a href="/learn" className="text-gray-800">Learn</a></li>
        </ul>
      </nav>

     
      <div className="sm:hidden flex items-center ml-2" onClick={toggleMenu}>
        <div className="space-y-1.5">
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden absolute top-16 left-0 w-full bg-white rounded-lg shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><a href="/product" className="text-gray-800">Product</a></li>
            <li><a href="/services" className="text-gray-800">Services</a></li>
            <li><a href="/Aboutus" className="text-gray-800">About us</a></li>
            <li><a href="/learn" className="text-gray-800">Learn</a></li>
            <li><a href="/login" className="text-[#6f5bf7] font-medium text-sm md:text-base">Iniciar Sesión</a></li>
            <li><a href="/register" className="text-[#4983ff] font-medium text-sm md:text-base">Get started</a></li>
            
          </ul>
        </div>
      )}

      <div className=" items-center hidden md:flex space-x-2 md:space-x-4">
        <a href="/login" className="text-[#6f5bf7] font-medium text-sm md:text-base">Iniciar Sesión</a>
        <a href="/register" className="text-[#4983ff] font-medium text-sm md:text-base">Get started</a>
      </div>
    </header>
  );
};

export default HeaderMobile;
