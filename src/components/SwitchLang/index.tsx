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
	];

	const handleChangeLang = (code: any) => {
		router.push(`/${code}`);
		setIsOpen(false);
	};

	return (
		<div className="relative m-0 md:ml-5">
			<button onClick={() => setIsOpen(!isOpen)} className="btn btn-ghost" aria-label="Change Language">
				{languages.find((lang) => lang.code === currentLocale)?.icon}
			</button>
			{isOpen && (
				<div className="absolute mt-1 z-id p-2 rounded space-y-4 bg-base-100 shadow">
					{languages.map((lang) => (
						<div key={lang.code} onClick={() => handleChangeLang(lang.code)} className="flex items-center cursor-pointer rounded p-2 hover:bg-gray-100">
							{lang.icon}
							<span className="ml-2">{lang.name}</span>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default SwitchLang;