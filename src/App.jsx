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
    <div className="bg-black">
      <main className=" m-auto max-w-[1800px] overflow-hidden scroll-smooth bg-black">
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
          <div className="lap:bg-fill pointer-events-none absolute z-0 animate-spinS rounded-full border-golden/30 bg-[url('./assets/fd1.png')] bg-center xl:-top-[30px] xl:left-[550px] xl:min-h-[350px] xl:min-w-[350px] xl:border-[16px] lap:left-[700px] lap:top-[70px] lap:min-h-[400px] lap:min-w-[400px] lap:border-[20px]"></div>
          <div className="pointer-events-none absolute z-0 rounded-full border-[40px] border-golden/30 xl:-bottom-[400px] xl:-left-[400px] xl:h-[800px] xl:w-[800px] lap:-bottom-[500px] lap:-left-[500px] lap:h-[1000px] lap:w-[1000px] "></div>
        </section>

        <section className="padding-x bg-gradient-to-r from-[#090909] via-[#151513] to-[#161616]">
          <SpecialMenu />
        </section>

        <section className="relative z-10">
          <Gallery />
        </section>

        <section className="relative padding-x ">
          <Chef />
          <div className="pointer-events-none absolute z-0 rounded-full border-golden/60 xl:-left-[500px] xl:-top-[100px] xl:h-[850px] xl:w-[850px] xl:border-[35px] lap:-left-[500px] lap:-top-[100px] lap:h-[1000px] lap:w-[1000px] lap:border-[40px] "></div>

          <div className="pointer-events-none absolute z-0 rounded-full border-golden/60 xl:-bottom-[400px] xl:-right-[400px] xl:h-[800px] xl:w-[800px] xl:border-[35px] lap:-bottom-[500px] lap:-right-[500px] lap:h-[1000px] lap:w-[1000px] lap:border-[40px] "></div>
          <div className="absolute z-0 opacity-80 xl:-left-[400px] xl:-top-2 lap:-left-[450px] lap:-top-6 ">
            <img
              src={fd4}
              alt="black-dish"
              width={700}
              className="animate-spinS object-cover object-center xl:w-[650px] lap:w-[850px]"
            />
          </div>
        </section>

        <section className="relative z-10 border-y-2 border-golden">
          {/* <NewsTicker /> */}
          <Intro />
          {/* <NewsTicker /> */}
        </section>

        <section className="relative xl:py-72 xl:pb-32 lap:py-80 lap:pb-40">
          {/* <div className="my-20 mb-40 h-[25px] w-[100%] bg-golden/30"></div> */}
          <Laurels />
          {/* <div className="pointer-events-none absolute -left-[500px] -top-[300px] z-0 h-[1000px] w-[1000px] rounded-full border-[40px] border-golden/60 "></div> */}
          <div className="pointer-events-none absolute z-0 rounded-full border-golden/60 xl:-bottom-[200px] xl:-right-[450px] xl:h-[800px] xl:w-[800px] xl:border-[35px] lap:-bottom-[300px] lap:-right-[500px] lap:h-[1000px] lap:w-[1000px] lap:border-[40px] "></div>
          <div className="absolute opacity-50 padding-x xl:-left-16 xl:top-28 lap:top-32">
            <img
              src={fd5}
              alt="food-image"
              className="animate-spinS rounded-full border-golden xl:w-[380px] xl:border-[15px] lap:border-[20px]"
            />
          </div>
          <div className="absolute flex items-end justify-end right-20 top-28">
            <h1 className="font-cormorant font-extrabold uppercase tracking-widest text-golden opacity-30 xl:text-[68px] lap:text-[82px]">
              Awards & Recognition
            </h1>
          </div>
        </section>

        <section className="relative padding-x">
          <Reservation />
          <div className="absolute z-0 xl:-top-6 xl:left-24 lap:left-20 lap:top-0">
            <img
              src={G}
              alt="g-logo"
              width={600}
              className="xl:w-[500px] lap:w-[600px]"
            />
          </div>
          <div className="absolute z-0 xl:left-48 xl:top-[90px] lap:top-[130px] ">
            <img
              src={fd6}
              alt="food-image"
              className="animate-spinS rounded-full xl:w-[290px] lap:w-[380px]"
            />
          </div>
        </section>

        <section className="relative padding-x">
          <FindUs />
          <div className="absolute lap:-right-2 xl:-right-6 lap:top-[350px] xl:top-[320px]">
            <h1 className=" rotate-90 font-cormorant font-extrabold uppercase text-golden opacity-70 xl:text-[55px] xl:tracking-[29px] lap:text-[68px] lap:tracking-[30px]">
              Find Us
            </h1>
          </div>
          <div className="absolute -rotate-45 opacity-70 lap:-right-28 lap:top-24 xl:top-20 xl:-right-28">
            <img width={800} src={chopsticks} alt="chopsticks" className="lap:w-[700px] xl:w-[610px]"/>
          </div>
          <div className="absolute -left-[350px] top-[100px] z-0 rounded-full border-[20px] border-golden/30 opacity-50">
            <img
              src={fd7}
              alt="food-image"
              className="object-cover object-center animate-spinS lap:w-[700px] xl:w-[590px]"
            />
          </div>
          {/* <div className="pointer-events-none absolute -left-[500px] top-[400px] z-0 h-[1000px] w-[1000px] rounded-full border-[40px] border-golden/60 "></div> */}
        </section>

        <section className="padding-x">
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default App;
