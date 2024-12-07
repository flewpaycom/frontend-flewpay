import React from 'react';

const SectionAction = () => {
  return (
    <section className="bg-white py-20 px-8 md:px-12">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between rounded-3xl shadow-lg">
        <div className="text-dark-blue p-10 md:p-16 flex-1">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Ready to level up your payment process?</h2>
          <p className="text-gray-600 mb-8">Supports small businesses with simple invoicing, powerful integrations, and cash flow management tools.</p>
          <div className="flex items-center gap-4">
            <button className="bg-[#8395fc] hover:bg-[#b2bdfa] text-black font-medium py-3 px-6 rounded-md">
              Get Started Now
            </button>
            <button className="text-blue-500 hover:text-gray-800 font-medium py-3 px-6">
            Learn More
          </button>
          </div>
        </div>
        <div className="flex-1">
          <img src="/payment-process.jpg" alt="Payment Process" className="w-full h-full object-cover rounded-tr-3xl rounded-br-3xl" />
        </div>
      </div>
    </section>
  );
};

export default SectionAction;