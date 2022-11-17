import Link from "next/link";
import React from "react";

const Navigation = () => {
	return (
		<div className="sticky top-0 z-20 py-2  md:py-6 md:mb-6 bg-transparent  text-white  backdrop-filter backdrop-blur-md  bg-opacity-70   ">
			<div className="container px-4 mx-auto lg:max-w-7xl flex items-center justify-between">
				<Link href="/">
					<a className="font-extrabold text-xl lg:text-2xl tracking-wider transition-colors  uppercase ">
						Vishal
					</a>
				</Link>

				<div className=" flex items-center justify-between font-semibold  text-sm md:text-lg lg:text-lg  text-white ">
					<Link href="/about">
						<a className="px-3  ">About</a>
					</Link>
					<Link href="/allProjects">
						<a className=" px-3    ">Projects</a>
					</Link>
					<a href="" className="px-3">
						<button className=" text-sm lg:text-lg bg-[#000000] text-white  rounded-full px-6 lg:py-3  py-2 ">
							CONTACT
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
