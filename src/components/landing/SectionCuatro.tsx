import React from 'react';
import { FaExchangeAlt, FaUnlock, FaBuilding } from 'react-icons/fa';

const SectionCuatro = () => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-lg">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-12 lg:py-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#6f5bf7] text-center">
          Experience that grows with your scale
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center">
            <FaExchangeAlt className="text-5xl mb-5 text-[#6f5bf7] rounded-full bg-blue-200 p-4" />
            <h3 className="text-xl font-medium mb-2 text-gray-800">Free transfers</h3>
            <p className="text-gray-500 text-center">
              Create a financial experience and automate repeat purchases by scheduling recurring payments.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaBuilding className="text-5xl mb-5 text-[#6f5bf7] rounded-full bg-blue-200 p-4" />
            <h3 className="text-xl font-medium mb-2 text-gray-800">Multiple account</h3>
            <p className="text-gray-500 text-center">
              Run your operations with cash from your account and generate yield on funds stored in your account.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaUnlock className="text-5xl mb-5 text-[#6f5bf7] rounded-full bg-blue-200 p-4" />
            <h3 className="text-xl font-medium mb-2 text-gray-800">Unmatched security</h3>
            <p className="text-gray-500 text-center">
              Securely manage your finances with organization-wide MFA, card-locking, and account-level controls.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCuatro;