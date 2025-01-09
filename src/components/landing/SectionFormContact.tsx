import Image from "next/image"
import { useTranslations } from "next-intl";
const SectionFromContact = () => {
  const t = useTranslations("landing.SectionContactForm");
  return (
    <section className="py-24" data-aos="fade-up" id="contact-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid-cols-1 grid lg:grid-cols-2">
          <div className="hidden justify-center items-center lg:flex">
            <Image src="/images/contact-us.webp" alt="Contact us" width={600} height={400} />
          </div>
          <form className="card space-y-6 bg-white shadow-lg rounded-3xl p-8">
            <h2 className="text-4xl text-primary font-extrabold text-center lg:text-start mb-4">
              {t("title")}
            </h2>

            <div className="flex flex-col space-y-2">
              <label htmlFor="nombres" className="text-lg font-bold text-gray-700">
                {t("inputs.name")}
              </label>
              <input
                type="text"
                id="nombres"
                className="input bg-gray-100 rounded-xl focus:ring-primary focus:border-primary p-3"
                placeholder={t("placeholders.name")}
              />
            </div>


            <div className="flex flex-col space-y-2">
              <label htmlFor="correo" className="text-lg font-bold text-gray-700">
                {t("inputs.email")}
              </label>
              <input
                type="email"
                id="correo"
                className="input bg-gray-100 rounded-xl focus:ring-primary focus:border-primary p-3"
                placeholder={t("placeholders.email")}
              />
            </div>


            <div className="flex flex-col space-y-2">
              <label htmlFor="mensaje" className="text-lg font-bold text-gray-700">
                {t("inputs.message")}
              </label>
              <textarea
                id="mensaje"
                className="textarea bg-gray-100 rounded-xl focus:ring-primary focus:border-primary p-3"
                placeholder={t("placeholders.message")}
                rows={5}
              ></textarea>
            </div>


            <button
              className="btn btn-primary w-full p-3 text-white font-semibold rounded-badge hover:bg-primary/90 transition-all duration-300 ease-in-out"
              disabled
            >
              {t("inputs.button")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );

}
export default SectionFromContact;
