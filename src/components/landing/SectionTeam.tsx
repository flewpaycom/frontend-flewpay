"use client";
import { useTranslations } from "next-intl";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Tilt } from "react-tilt";

interface TeamMember {
	name: string;
	role: string;
	image: string;
	bio: string;
	socials: {
		linkedin?: string;
		github?: string;
		twitter?: string;
	};
}

const SectionTeam = () => {
	const t = useTranslations("landing.SectionTeam");

	const team: TeamMember[] = [
		{
			name: "Brayan Felipe Medina Duarte",
			role: "Co-F / Backend Developer",
			image: "/team/bm.jpeg",
			bio: "Apasionado por encontrar soluciones innovadoras a problemas complejos mediante el uso de tecnologías de vanguardia y la colaboración con equipos multidisciplinarios.",
			socials: {
				linkedin: "https://www.linkedin.com/in/medinabrayan/",
			},
		},
		{
			name: "Andres Felipe Molina Navia",
			role: "Co-F / Backend Developer / DevOps",
			image: "/team/am.jpeg",
			bio: "Entusiasta de los grandes retos, de la ciencia, las matemáticas y conocer personas fascinantes.",
			socials: {
				linkedin: "https://www.linkedin.com/in/andres-f-molina-navia-a51241174/",
			},
		},
		{
			name: "Andrea Rojas Alvarez",
			role: "Co-F / Frontend Developer",
			image: "/team/ar.jpeg", // Add your image paths
			bio: "Exploro el mundo, aprendo cada día y diseño soluciones empresariales que marcan la diferencia. Con un enfoque en blockchain y tecnologías emergentes, creo en el poder de hacer posible lo que otros consideran imposible.",
			socials: {
				linkedin: "https://www.linkedin.com/in/andrea-rojas-b628b6181",
				github: "https://github.com/Andre154",
			},
		},
		{
			name: "Juan Leonardo Ramírez Velasquez",
			role: "Co-F / FullStack Developer",
			image: "/team/jl.jpg", // Add your image paths
			bio: "Apacionado por la programación y la tecnología, entusiasta de la innovación en blockchain",
			socials: {
				linkedin: "https://www.linkedin.com/in/jleonardoramirez/",
				github: "https://github.com/LeoRami99",
			},
		},
	];

	const optionsTilt = {
		scale: 1,
		speed: 1000,
		max: 30,
		glare: true,
		"max-glare": 0.5,
	};

	return (
		<section className="py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center" data-aos="fade-up">
					<h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 mb-6">{t("title")}</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">{t("subtitle")}</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{team.map((member, index) => (
						<Tilt options={optionsTilt} className="group relative h-[520px]" data-aos="fade-up" data-aos-delay={0}>
							<div key={member.name} className="group relative h-[520px]" data-aos="fade-up" data-aos-delay={index * 100}>
								<div className="relative h-full overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
									{/* Image Container */}
									<div className="h-[260px] overflow-hidden">
										<img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
									</div>

									{/* Content */}
									<div className="p-6 h-[240px] flex flex-col justify-between">
										<div>
											<h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
											<p className="text-primary font-medium mb-3">{member.role}</p>
											<p className="text-gray-600 text-sm line-clamp-4">{member.bio}</p>
										</div>

										{/* Social Links */}
										<div className="flex space-x-4 pt-4">
											{member.socials.linkedin && (
												<a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
													<FaLinkedin className="w-5 h-5" />
												</a>
											)}
											{member.socials.github && (
												<a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
													<FaGithub className="w-5 h-5" />
												</a>
											)}
											{member.socials.twitter && (
												<a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
													<FaTwitter className="w-5 h-5" />
												</a>
											)}
										</div>
									</div>
								</div>
							</div>
						</Tilt>
					))}
				</div>
			</div>
		</section>
	);
};

export default SectionTeam;
