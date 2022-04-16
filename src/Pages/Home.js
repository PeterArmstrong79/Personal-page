import ScrollToTop from "../components/ScrollToTop";
import Header from "../components/Header";
import React from "react";
import Footer from "../components/Footer";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
	return (
		<div className='main'>
			<Header />
			<div className='home-intro'>
				<div className='heading'>
					<h1>Peter Armstrong</h1>
					<h4>Full Stack Web Developer</h4>
				</div>
			</div>
			<div className='about'>
				<h3>About</h3>
				<p>
					I joined CodeYourFuture in 2021 and took a great opportunity to become
					a Full Stack Web Developer. I learned HTML/CSS, JavaScript(React),
					Node.js and PostgreSQL. Even though My skills are beginner/entry level
					at the moment, I practice these skills throughout the week to improve.
				</p>
			</div>
			<Skills />
			<Projects />
			<Footer />
			<ScrollToTop />
		</div>
	);
};

export default Home;
