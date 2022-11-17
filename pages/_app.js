
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

function MyApp({ Component, pageProps }) {
	return (
		<>

				<Navigation />
				<Component {...pageProps} />
				<Footer />

		</>
	);
}

export default MyApp;
