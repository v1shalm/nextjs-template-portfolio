/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import profile from "../public/profile.webp"
import { MdOutlineWorkOutline, MdOutlineContactless } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";


const Hero = () => {
	return (
		<div className="container px-4 py-4 mx-auto grid overflow-hidden grid-cols-1 lg:grid-cols-4 grid-rows-2 gap-4 ">
			<div className=" flex flex-col 	 item-center lg:-mx-2   lg:text-left rounded-[80px] bg-[#4e37ee] px-8  py-10   lg:row-span-6  row-span-6   col-start-1 col-span-1 lg:col-span-4  ">
				<div className=" lg:mt-16 lg:px-4 mb-10">
					<Image
						src={profile}
						alt="Profile"
						priority={true}
						className="rounded-full"
						width={80}
						height={80}
						placeholder="blur"
					/>
				</div>
				<div className=" ">
					<h1 className=" px-6 text-4xl font-bold text-white lg:text-5xl ">
						Hey, I'm Vishal👋🏻
					</h1>
					<div className="mt-2 text-white ">
						<p className="py-6 px-6 text-2xl font-medium">
							I am a Frontend Developer based in India with a knack for building
							things.
						</p>
					</div>
				</div>
			</div>

			<div class=" min-w-full min-h-full  rounded-[60px]  bg-[#f6f7ff] text-3xl font-bold  text-black flex justify-between items-center  px-12 py-12  mt-2">
				Work
				<MdOutlineWorkOutline />
			</div>
			<div class=" bg-[#2b2b2e]  text-3xl font-bold min-w-full min-h-full  rounded-[60px]   text-white flex justify-between items-center   px-12 py-12  mt-2">
				Play
				<IoGameControllerOutline className="fill-white" />
			</div>
			<div class="  bg-[#d47159]  text-3xl font-bold  min-w-full min-h-full  rounded-[60px]    text-white flex justify-between items-center   px-12 py-12  mt-2">
				Resume
				<MdOutlineWorkOutline />
			</div>
			<div class="  bg-[#5c2ed1]   text-3xl font-bold  min-w-full min-h-full  rounded-[60px]    text-white flex justify-between items-center  gap-2   px-12 py-12  mt-2">
				Contact
				<MdOutlineContactless />
			</div>
		</div>
	);
};
export default Hero;
