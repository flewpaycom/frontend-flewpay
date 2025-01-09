"use client"; // Marca el componente como Client Component

import { useState } from "react";
import Image from "next/image";
import { Link } from "next-view-transitions";
import SwitchLang from "../SwitchLang";
import { useTranslations } from "next-intl";

const HeaderMobile = () => {
  // translations
  const t = useTranslations("landing.header");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 px-4 md:px-6 flex justify-between items-center sticky top-0 z-50 w-full bg-white/50 backdrop-blur-md">
      {/* Logo */}
      <div className="flex items-center space-x-2 md:space-x-4">
        <Image src="/flew-transparent.png" alt="Flew Pay Logo" width={200} height={32} />
      </div>

      <nav className="hidden sm:flex flex-1 justify-center">
        {/* <ul className="flex space-x-4 md:space-x-6">
          <li>
            <a href="/product" className="text-gray-800">
              {t("product")}
            </a>
          </li>
          <li>
            <a href="/services" className="text-gray-800">
              {t("services")}
            </a>
          </li>
          <li>
            <a href="/Aboutus" className="text-gray-800">
              {t("Aboutus")}
            </a>
          </li>
          <li>
            <a href="/learn" className="text-gray-800">
              {t("learn")}
            </a>
          </li>
        </ul> */}
      </nav>

      <div className="sm:hidden flex items-center ml-2" onClick={toggleMenu}>
        <div className="space-y-1.5">
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden absolute top-16 left-0 w-full bg-white backdrop-blur-md rounded-b-lg">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {/* <li>
              <a href="/product" className="text-gray-800">
                {t("product")}
              </a>
            </li>
            <li>
              <a href="/services" className="text-gray-800">
                {t("services")}
              </a>
            </li>
            <li>
              <a href="/Aboutus" className="text-gray-800">
                {t("Aboutus")}
              </a>
            </li>
            <li>
              <a href="/learn" className="text-gray-800">
                {t("learn")}
              </a>
            </li> */}
            {/* <li>
              <Link href="/auth" className="text-[#4983ff] font-medium text-sm md:text-base">
                {t("login")}
              </Link>
            </li> */}
            <li>
              <Link href="/#contact-us" className="text-[#4983ff] font-medium text-sm md:text-base">
                {t("contact")}
              </Link>
            </li>
          </ul>
        </div>
      )}

      <div className=" items-center hidden md:flex space-x-2 md:space-x-4">
        <SwitchLang />
        {/* <Link href="/auth" className=" font-medium text-sm md:text-base btn btn-outline btn-primary rounded-badge" >
          {t("login")}
        </Link> */}
        <Link href="#contact-us" className=" font-medium text-sm md:text-base btn btn-secondary rounded-badge" aria-label="Contact Us">
          {t("contact")}
        </Link>
      </div>
    </header>
  );
};

export default HeaderMobile;
