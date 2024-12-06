import React from 'react';
import { FaExchangeAlt, FaUnlock, FaBuilding } from 'react-icons/fa';

const SectionCuatro = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 lg:p-16">
   <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#6f5bf7] text-center">
    Experience that grows with your scale
</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <FaExchangeAlt className="text-4xl mb-4 text-[#6f5bf7] rounded-full bg-blue-200 p-3" />
          <h3 className="text-lg font-medium mb-2 text-gray-800">Free transfers</h3>
          <p className="text-gray-500 text-center">Create a financial experience and automate repeat purchases by scheduling recurring payments.</p>
        </div>
        <div className="flex flex-col items-center">
          <FaBuilding className="text-4xl mb-4 text-[#6f5bf7] rounded-full bg-blue-200 p-3" />
          <h3 className="text-lg font-medium mb-2 text-gray-800">Multiple account</h3>
          <p className="text-gray-500 text-center">Run your operations with cash from your account and generate yield on funds stored in your account.</p>
        </div>
        <div className="flex flex-col items-center">
          <FaUnlock className="text-4xl mb-4 text-[#6f5bf7] rounded-full bg-blue-200 p-3" />
          <h3 className="text-lg font-medium mb-2 text-gray-800">Unmatched security</h3>
          <p className="text-gray-500 text-center">Securely manage your finances with organization-wide MFA, card-locking, and account-level controls.</p>
        </div>
      </div>
    </div>
  );
};

export default SectionCuatro;