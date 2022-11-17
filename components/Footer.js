import React from "react";

const Footer = () => {
	return (
		<div className="mt-12 lg:mt-18 sm:pb-36 sm:py-12 py-6">
			<div className="max-w-7xl px-4 mx-auto text-white ">
				<div className="pb-8 mb-2 border-t-2 border-white "></div>
				<div className="flex flex-col justify-between lg:flex-row items-center">
					<p>Vishal Maurya</p>
					<div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
						<a
							href="#"
							className={" hover:text-[#d47159]"}
							target="_blank"
							rel="noreferrer"
						>
							Copyleft © [2022]
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
