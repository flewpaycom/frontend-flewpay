import Image from 'next/image';

const HeaderMobile = () => {
  return (
    <header className="bg-gradient-to-r from-[#c2d0fb]/50 to-[#c2dafb]/50 py-4 px-6 flex justify-between items-center sticky top-0 z-50 w-full rounded-b-lg backdrop-blur-md">
      <div className="flex items-center space-x-4">
        <Image src="/logo.svg" alt="Company Logo" width={32} height={32} />
        <span className="font-bold text-lg text-gray-800">Company Name</span>
      </div>

      <nav className="flex-1 flex justify-center">
        <ul className="flex space-x-6">
          <li><a href="/product" className="text-gray-800">Product</a></li>
          <li><a href="/services" className="text-gray-800">Services</a></li>
          <li><a href="/Aboutus" className="text-gray-800">About us</a></li>
          <li><a href="/learn" className="text-gray-800">Learn</a></li>
        </ul>
      </nav>
      <div className="flex items-center space-x-4">
        <a href="/login" className="text-[#6f5bf7] font-medium">
          Iniciar Sesión
        </a>
        <a href="/register" className="text-[#4983ff] font-medium">
          Get started
        </a>
      </div>
    </header>
  );
};

export default HeaderMobile;
