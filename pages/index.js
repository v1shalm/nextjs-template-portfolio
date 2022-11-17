import Head from "next/head";
import Hero from "../components/Hero";


export default function Home() {
	return (
		<div className="space-y-14 lg:space-y-24">
			<Head>
				<title>Your Name || Portfolio</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					href="https://api.fontshare.com/v2/css?f[]=satoshi@1,900,700,500,300,400&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<main className="max-w-7xl mx-auto mt-12  lg:mt-10   ">
				<Hero />
			</main>
		</div>
	);
}
