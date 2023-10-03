import React from "react";

import { Navbar } from "./components";
import {
	Hero,
	AboutUs,
	Chef,
	FindUs,
	Footer,
	Gallery,
	Intro,
	Laurels,
	SpecialMenu,
} from "./sections";

const App = () => {
	return (
		<main className=' bg-black max-w-[2000px] scroll-smooth '>
			<div className='padding-x'>
				<Navbar />
				<section className='lg:padding-x'>
					<Hero />
				</section>
			</div>
			<div className=''>
				<section className=''>
					<AboutUs />
				</section>
			</div>
			<div className='padding-x '>
				<section className='lg:padding-x  '>
					<SpecialMenu />
				</section>
			</div>
			<div className=' '>
				<section className=''>
					<Chef />
				</section>
				<section className=''>
					<Intro />
				</section>
				<section className=''>
					<Laurels />
				</section>
			</div>
			<div className='padding-x'>
				<section className='lg:padding-x'>
					<Gallery />
				</section>
			</div>
			<div>
				<section className=''>
					<FindUs />
				</section>
				<section className=''>
					<Footer />
				</section>
			</div>
		</main>
	);
};

export default App;
