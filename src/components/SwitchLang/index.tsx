"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const SwitchLang = () => {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();
	const currentLocale = useLocale();

	const languages = [
		{ code: "en", name: "English", icon: "🇺🇸" },
		{ code: "es", name: "Español", icon: "🇨🇴" },
		{ code: "pt", name: "Português", icon: "🇧🇷" },
	];

	const handleChangeLang = (code: string) => {
		router.push(`/${code}`);
		setIsOpen(false);
	};

	return (
		<div className="relative">
			<button onClick={() => setIsOpen(!isOpen)} className="absolute top-0 right-0 m-4 flex items-center space-x-2 bg-white text-gray-600 rounded-full p-2 shadow-md hover:shadow-lg transition-shadow" aria-label="Change Language">
				{languages.find((lang) => lang.code === currentLocale)?.icon}
			</button>
			{isOpen && (
				<div className="absolute top-12 right-4 w-40 rounded-lg bg-white shadow-lg ring-1 ring-gray-200 z-10">
					{languages.map((lang) => (
						<div key={lang.code} onClick={() => handleChangeLang(lang.code)} className="flex items-center cursor-pointer px-4 py-2 hover:bg-gray-100 transition-colors rounded">
							<span className="text-xl">{lang.icon}</span>
							<span className="ml-2 text-gray-700">{lang.name}</span>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default SwitchLang;
