import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const SectionAction = () => {
  const t = useTranslations("landing.SectionAction");
  return (
    <section className="py-20 px-8 md:px-12" data-aos="fade-up">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between rounded-3xl shadow-lg bg-white">
        <div className="text-dark-blue p-10 md:p-16 flex-1">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">{t("title")}</h2>
          <p className="text-gray-600 mb-8">{t("subtitle")}</p>
          <div className="flex items-center gap-4">
            <button className="btn btn-primary rounded-badge font-medium py-3 px-6">{t("button")}</button>
            <button className="btn btn-outline btn-secondary font-medium py-3 px-6 rounded-badge">{t("othercalltoaction")}</button>
          </div>
        </div>
        <div className="flex-1">
          <Image src="/images/flew-pay-card.webp" alt="Payment Process" className="w-full h-full object-cover rounded-tr-3xl rounded-br-3xl" width={600} height={400} />
        </div>
      </div>
    </section>
  );
};

export default SectionAction;
