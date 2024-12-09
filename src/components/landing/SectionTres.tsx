"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import { useTranslations } from "next-intl";

const QRCode = dynamic(() => import("react-qr-code"), { ssr: false });

export default function SectionTres() {
	// translations
	const t = useTranslations("landing.SectionTres");

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-require-imports
		const AOS = require("aos");
		AOS.init({
			duration: 1000,
			offset: 100,
		});
	}, []);
	return (
		<div className="min-h-screen flex flex-col items-center justify-center">
			<article className=" max-w-screen-lg mx-auto ">
				<div className="w-full px-6 text-center flex flex-col items-center justify-center space-y-12 py-24 min-h-screen ">
					<div data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="top-bottom">
						<Image src="/flew-transparent.png" width={200} height={200} alt="FlewPay Logo" className="mx-auto" />
					</div>
					<h1 className="lg:text-6xl text-4xl font-extrabold leading-tight text-black">
						{t("title")}
						<span className="relative inline-block">
							<ReactTyped strings={[t("phrases.phrase1"), t("phrases.phrase2"), t("phrases.phrase3"), t("phrases.phrase4"), t("phrases.phrase5")]} typeSpeed={70} loop loopCount={Infinity} backSpeed={100} className="lg:bg-primary/50 px-4 rounded-md" />
						</span>
					</h1>

					<p className="text-gray-600 text-lg lg:text-2xl max-w-3xl">{t("description")}</p>

					<div data-aos="fade-up" data-aos-delay="200" data-aos-anchor-placement="top-bottom">
						<button title="scroll down" className="btn btn-primary rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-105 animate-bounce" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}>
							<FaArrowDown className="text-xl" />
						</button>
					</div>
				</div>
				<aside className=" overflow-hidden" data-aos="fade-up" data-aos-delay="200">
					<div>
						<h1 className="lg:text-6xl text-4xl font-bold text-center mb-10">{t("titleSubsection")}</h1>
						<p className="text-gray-600 text-center text-2xl max-w-3xl mx-auto">{t("descriptionSubsection")}</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto my-20 px-6">
						<div className="flex flex-col items-center text-center md:items-start md:text-left">
							<div className="bg-white p-8 rounded-3xl shadow-xl flex flex-col items-center justify-center" data-aos="fade-up" data-aos-delay="100">
								<h2 className="text-2xl font-semibold mb-4 text-black">{t("subtitleQr")}</h2>
								<p className="text-gray-600 text-center mb-6">{t("descriptionQr")}</p>
								<QRCode value="https://example.com" size={220} className="mb-6" />
								<p className="text-sm text-gray-500">★ ¡Prueba flewPay ahora!</p>
							</div>
						</div>

						<div className="bg-white p-10 rounded-3xl shadow-xl flex flex-col items-center justify-between" data-aos="fade-up" data-aos-delay="200">
							<div className="relative w-48 h-48 flex items-center justify-center mb-8">
								<img src="/card.svg" alt="Tarjeta" className="z-10 size-full" />
								<div className="absolute w-32 h-32 rounded-full border-4 border-indigo-600 animate-ping slow-animation"></div>
								<div className="absolute w-24 h-24 rounded-full border-4 border-indigo-400 animate-ping slow-animation delay-150"></div>
								<div className="absolute w-20 h-20 rounded-full border-4 border-indigo-200 animate-ping slow-animation delay-300"></div>
							</div>
							<h2 className="text-3xl font-semibold mb-6 text-black">{t("titleCard")}</h2>
							<p className="text-gray-600 text-center mb-8">{t("descriptionCard")}</p>
						</div>
					</div>
				</aside>
			</article>
		</div>
	);
}
