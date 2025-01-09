import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "next-view-transitions";
import Image from "next/image";

const SectionFooter = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center space-y-6">
          <Image
            src="/flewpay-white.png"
            width={150}
            height={50}
            alt="Flewpay Logo"
          />
          <div className="flex space-x-6 justify-center">
            <a href="#" className="hover:text-purple-300 transition-colors" aria-label="Twitter">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-purple-300 transition-colors" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="hover:text-purple-300 transition-colors" aria-label="Facebook">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-purple-300 transition-colors" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 text-sm">
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6 justify-center">
            <Link href="#" className="hover:underline hover:text-purple-300">
              About Us
            </Link>
            <Link href="#" className="hover:underline hover:text-purple-300">
              Contact
            </Link>
            <Link href="/learn" className="hover:underline hover:text-purple-300">
              Guide to Get Account Web3
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-white/30 pt-4">
          <p className="text-xs">
            © Flewpay 2024. All Rights Reserved.
          </p>
          <p className="mt-2 space-x-3">
            <Link href="#" className="hover:underline hover:text-purple-300">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="#" className="hover:underline hover:text-purple-300">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SectionFooter;
