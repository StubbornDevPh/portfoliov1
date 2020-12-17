import Head from "next/head";

const Home = () => {
	return (
		<div>
			<Head>
				<title>Gabcodes</title>
				<link rel="icon" href="/favicon.png" />
			</Head>
			<div>
				{/* Content goes here */}
				<img src="/gabcodes.png" width="250" height="auto"></img>
			</div>
		</div>
	);
};

export default Home;
