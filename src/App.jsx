import React from "react";

import { InfoSection, Navbar, NewsTicker } from "./components";
import {
  Hero,
  Goal,
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
    <main className=" max-w-[2000px] overflow-hidden scroll-smooth bg-black">
      <div className="bg-left-top bg-no-repeat bg-cover hero_bg">
        <section className="pb-24 padding-x bg-gradient-to-b from-black via-black/70 to-transparent">
          <Navbar />
        </section>
        <section className="">
          <Hero />
        </section>
      </div>

      <section className="">
        <Goal />
      </section>

      <section className="lg:padding-x relative z-0 bg-gradient-to-r from-[#090909] via-[#151513] to-[#161616]">
        <InfoSection />
        <div className="bg-fill pointer-events-none absolute -top-[70px] left-[700px] z-0 min-h-[400px] min-w-[400px] animate-spinS rounded-full border-[20px] border-golden/30 bg-[url('./assets/fd1.png')] bg-center bg-no-repeat"></div>
        <div className="pointer-events-none absolute -bottom-[500px] -left-[500px] z-0 h-[1000px] w-[1000px] rounded-full border-[40px] border-golden/30 "></div>
      </section>

      <section className="padding-x bg-gradient-to-r from-[#090909] via-[#151513] to-[#161616]">
        <SpecialMenu />
      </section>

      <section className="relative z-10">
        <Gallery />
      </section>

      <section className="">
        <Chef />
      </section>

      <section className="">
        <Intro />
        <NewsTicker />
      </section>

      <section className="">
        <Laurels />
      </section>

      <section className="">
        <FindUs />
      </section>

      <section className="">
        <Footer />
      </section>
    </main>
  );
};

export default App;
