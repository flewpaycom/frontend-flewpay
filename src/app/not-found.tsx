import Image from 'next/image';
import { Link } from "next-view-transitions"

const NotFoundPage = () => {
  return (
    <div className="bg-gradient-to-r from-primary via-primary to-secondary h-screen flex flex-col justify-center items-center text-center">
      <Image src="/flewpay-white.png" width={400} height={400} alt="FlewPay Logo" />
      <h1 className="text-6xl font-bold text-white mb-6 mt-6">¡404!</h1>
      <p className="text-2xl text-white/90 font-medium mb-4">
        Page not found
      </p>
      <p className="text-white/70 mb-8">
        The page you are looking for does not exist or an error occurred.
      </p>
      <Link href="/" className="btn bg-white text-primary rounded-badge">
        Back to home
      </Link>
    </div>
  );
};

export default NotFoundPage;
