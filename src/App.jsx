import React from "react";

import { InfoSection, Navbar, NewsTicker, SpinLogo } from "./components";
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
import Reservation from "./components/Reservation";
import { G, chopsticks, fd4, fd5, fd6, fd7 } from "./assets";

const App = () => {
  return (
    <main className=" max-w-[2000px] overflow-hidden scroll-smooth bg-black">
      <div className="hero_bg bg-cover bg-left-top bg-no-repeat">
        <section className="padding-x bg-gradient-to-b from-black via-black/70 to-transparent pb-24">
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

      <section className="padding-x relative ">
        <Chef />
        <div className="pointer-events-none absolute -left-[500px] -top-[100px] z-0 h-[1000px] w-[1000px] rounded-full border-[40px] border-golden/60 "></div>
        <div className="pointer-events-none absolute -bottom-[500px] -right-[500px] z-0 h-[1000px] w-[1000px] rounded-full border-[40px] border-golden/60 "></div>
        <div className="absolute -left-[350px] top-16 z-0 opacity-80 ">
          <img
            src={fd4}
            alt="black-dish"
            width={700}
            className="animate-spinS object-cover object-center "
          />
        </div>
      </section>

      <section className="relative z-10 border-y-2 border-golden">
        {/* <NewsTicker /> */}
        <Intro />
        {/* <NewsTicker /> */}
      </section>

      <section className="relative py-80 pb-40">
        {/* <div className="my-20 mb-40 h-[25px] w-[100%] bg-golden/30"></div> */}
        <Laurels />
        {/* <div className="pointer-events-none absolute -left-[500px] -top-[300px] z-0 h-[1000px] w-[1000px] rounded-full border-[40px] border-golden/60 "></div> */}
        <div className="pointer-events-none absolute -bottom-[300px] -right-[500px] z-0 h-[1000px] w-[1000px] rounded-full border-[40px] border-golden/60 "></div>
        <div className="padding-x absolute -left-16 top-32 opacity-50 ">
          <img
            src={fd5}
            alt="food-image"
            className="animate-spinS rounded-full border-[20px] border-golden "
          />
        </div>
        <div className="absolute right-20 top-28 flex items-end justify-end">
          <h1 className="font-cormorant text-[82px] font-extrabold uppercase tracking-widest text-golden opacity-30">
            Awards & Recognition
          </h1>
        </div>
      </section>

      <section className="padding-x relative">
        <Reservation />
        <div className="absolute left-20 top-0 z-0">
          <img src={G} alt="g-logo" width={600} className="" />
        </div>
        <div className="absolute left-48 top-[130px] z-0 ">
          <img
            src={fd6}
            alt="food-image"
            className="animate-spinS rounded-full"
          />
        </div>
      </section>

      <section className="padding-x relative">
        <FindUs />
        <div className="absolute -right-10 top-[390px]">
          <h1 className="mt-1 rotate-90 font-cormorant text-[72px] font-extrabold uppercase tracking-[40px]  text-golden opacity-50">
            Find Us
          </h1>
        </div>
        <div className="absolute -right-40 top-24 -rotate-45 opacity-50">
          <img width={800} src={chopsticks} alt="chopsticks" />
        </div>
        <div className="absolute z-0 opacity-50 top-[110px] -left-[400px] border-[20px] border-golden/30 rounded-full">
          <img
            src={fd7}
            alt="food-image"
            className="object-cover object-center animate-spinS"
          />
        </div>
        {/* <div className="pointer-events-none absolute -left-[500px] top-[400px] z-0 h-[1000px] w-[1000px] rounded-full border-[40px] border-golden/60 "></div> */}
      </section>

      <section className="padding-x">
        <Footer />
      </section>
    </main>
  );
};

export default App;
