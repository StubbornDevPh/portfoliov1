import Head from "next/head";
import NavigationBar from "../components/NavigationBar/NavigationBar";

const Home = () => {
	return (
		<div>
			<Head>
				<title>Gabcodes</title>
				<link rel="icon" href="/favicon.png" />
			</Head>
			<div>
				{/* Content goes here */}
				<NavigationBar />
			</div>
		</div>
	);
};

export default Home;
