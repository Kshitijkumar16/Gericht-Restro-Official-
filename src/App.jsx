import React from "react";

import { Navbar, NewsTicker } from "./components";
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
    <main className=" max-w-[2000px] scroll-smooth bg-black ">
      <div className="overflow-hidden bg-left-top bg-no-repeat bg-cover hero_bg">
       <section className="pb-24 bg-gradient-to-b from-black via-black/70 to-transparent padding-x">
         <Navbar />
       </section>
        <section className="">
          <Hero />
        </section>
      </div>
      <div className="">
        <section className="">
          <AboutUs />
        </section>
      </div>
      <div className="padding-x ">
        <section className="lg:padding-x ">
          <SpecialMenu />
        </section>
      </div>
      <div className="">
        <section className="">
          <Chef />
        </section>
        <section className="overflow-hidden">
          <Intro />
          <NewsTicker />
        </section>
        <section className="">
          <Laurels />
        </section>
      </div>
      <div className="padding-x">
        <section className="lg:padding-x">
          <Gallery />
        </section>
      </div>
      <div>
        <section className="">
          <FindUs />
        </section>
        <section className="">
          <Footer />
        </section>
      </div>
    </main>
  );
};

export default App;
