import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "next-view-transitions";
import Image from "next/image";
const SectionFooter = () => {
	return (
		<footer className="bg-primary/50 text-black py-10 rounded-t-2xl">
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap justify-between items-center mb-8">
					<Image src={"/flewpay-white.png"} width={150} height={50} alt="Flewpay Logo" />
					<div className="flex space-x-6">
						<a href="#" className="text-black hover:text-gray-600 transition-colors" aria-label="Twitter">
							<FaTwitter size={24} />
						</a>
						<a href="#" className="text-black hover:text-gray-600 transition-colors" aria-label="LinkedIn">
							<FaLinkedin size={24} />
						</a>
						<a href="#" className="text-black hover:text-gray-600 transition-colors" aria-label="Facebook">
							<FaFacebook size={24} />
						</a>
						<a href="#" className="text-black hover:text-gray-600 transition-colors" aria-label="Instagram">
							<FaInstagram size={24} />
						</a>
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">
					{/* <div>
						<h3 className="font-bold text-lg mb-3">Solutions</h3>
						<ul className="space-y-2">
							<li>
								<Link href="#" className="hover:underline">
									Small Business
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:underline">
									Freelancers
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:underline">
									Customers
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:underline">
									Taxes
								</Link>
							</li>
						</ul>
					</div> */}
					<div>
						<h3 className="font-bold text-lg mb-3">Company</h3>
						<ul className="space-y-2">
							<li>
								<Link href="#" className="hover:underline">
									About Us
								</Link>
							</li>
							{/* <li>
								<Link href="#" className="hover:underline">
									Careers
								</Link>
							</li> */}
							<li>
								<Link href="#" className="hover:underline">
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="font-bold text-lg mb-3">Learn</h3>
						<ul className="space-y-2">
							<li>
								<Link href="/learn" className="hover:underline">
									Guide to Get Account Web3
								</Link>
							</li>
							{/* <li>
								<Link href="#" className="hover:underline">
									Blog
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:underline">
									Webinars
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:underline">
									FAQs
								</Link>
							</li> */}
						</ul>
					</div>
				</div>

				<div className="mt-10 text-center text-sm border-t border-gray-300 pt-6">
					<p className="mb-2">© Flewpay 2024. All Rights Reserved.</p>
					<p>
						<Link href="#" className="hover:underline">
							Privacy Policy
						</Link>{" "}
						|
						<Link href="#" className="hover:underline">
							Terms of Service
						</Link>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default SectionFooter;
