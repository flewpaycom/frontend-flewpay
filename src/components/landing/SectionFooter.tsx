import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

const SectionFooter = () => {
  return (
    <footer className="bg-gray-100 text-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div className="text-2xl font-bold">Flewpay</div>
          <div className="flex space-x-4">
            <a href="#" className="text-black hover:text-gray-500">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-black hover:text-gray-500">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-black hover:text-gray-500">
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <h3 className="font-bold mb-2">Solutions</h3>
            <ul className="space-y-1">
              <li>Small Business</li>
              <li>Freelancers</li>
              <li>Customers</li>
              <li>Taxes</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Company</h3>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>Career</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Learn</h3>
            <ul className="space-y-1">
              <li>Blog</li>
              <li>Ebooks</li>
              <li>Guides</li>
              <li>Templates</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>© Flewpay 2024. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default SectionFooter;
