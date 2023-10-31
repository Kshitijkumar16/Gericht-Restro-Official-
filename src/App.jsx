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
          <section className="padding-x bg-gradient-to-b from-black via-black/70 to-transparent md:pb-14 lg:pb-20 xl:pb-24">
            <Navbar />
          </section>
          <section className="">
            <Hero />
          </section>
        </div>

        <section className="">
          <Goal />
        </section>

        <section className="lg:padding-x relative z-0 bg-gradient-to-r from-[#090909] via-[#151513] to-[#161616] lap:pt-12">
          <InfoSection />
          <div className="lap:bg-fill pointer-events-none absolute z-0 animate-spinS rounded-full border-golden/30 bg-[url('./assets/fd1.png')] bg-contain bg-center lg:-top-[50px] lg:left-[510px] lg:min-h-[270px] lg:min-w-[270px] lg:border-[14px] xl:-top-[30px] xl:left-[480px] xl:min-h-[350px] xl:min-w-[350px] xl:border-[16px] lap:-top-[20px] lap:left-[640px] lap:min-h-[400px] lap:min-w-[400px] lap:border-[20px]"></div>
          <div className="pointer-events-none absolute z-0 rounded-full border-golden/30 lg:-bottom-[325px] lg:-left-[325px] lg:h-[650px] lg:w-[650px] lg:border-[32px] xl:-bottom-[400px] xl:-left-[400px] xl:h-[800px] xl:w-[800px] xl:border-[40px] lap:-bottom-[500px] lap:-left-[500px] lap:h-[1000px] lap:w-[1000px] "></div>
        </section>

        <section className="padding-x bg-gradient-to-r from-[#090909] via-[#151513] to-[#161616]">
          <SpecialMenu />
        </section>

        <section className="relative z-10">
          <Gallery />
        </section>

        <section className="relative padding-x ">
          <Chef />
          <div className="pointer-events-none absolute z-0 rounded-full border-golden/60 lg:-left-[280px] lg:-top-[60px] lg:h-[560px] lg:w-[560px] lg:border-[25px] xl:-left-[500px] xl:-top-[100px] xl:h-[850px] xl:w-[850px] xl:border-[35px] lap:-left-[500px] lap:-top-[100px] lap:h-[1000px] lap:w-[1000px] lap:border-[40px] "></div>
          <div className="pointer-events-none absolute z-0 rounded-full border-golden/60 lg:-bottom-[350px] lg:-right-[350px] lg:h-[700px] lg:w-[700px] lg:border-[25px] xl:-bottom-[400px] xl:-right-[400px] xl:h-[800px] xl:w-[800px] xl:border-[35px] lap:-bottom-[500px] lap:-right-[500px] lap:h-[1000px] lap:w-[1000px] lap:border-[40px]"></div>
          <div className="absolute z-0 opacity-80 lg:-left-[250px] lg:-top-6 xl:-left-[400px] xl:-top-2 lap:-left-[450px] lap:-top-6 ">
            <img
              src={fd4}
              alt="black-dish"
              width={700}
              className="animate-spinS object-cover object-center lg:w-[480px] xl:w-[650px] lap:w-[850px]"
            />
          </div>
        </section>

        <section className="relative z-10 border-y-2 border-golden">
          {/* <NewsTicker /> */}
          <Intro />
          {/* <NewsTicker /> */}
        </section>

        <section className="relative lg:py-60 lg:pb-40 xl:py-72 xl:pb-32 lap:py-80 lap:pb-40">
          {/* <div className="my-20 mb-40 h-[25px] w-[100%] bg-golden/30"></div> */}
          <Laurels />
          {/* <div className="pointer-events-none absolute -left-[500px] -top-[300px] z-0 h-[1000px] w-[1000px] rounded-full border-[40px] border-golden/60 "></div> */}
          <div className="pointer-events-none absolute z-0 rounded-full border-golden/60 lg:-bottom-[150px] lg:-right-[300px] lg:h-[650px] lg:w-[650px] lg:border-[30px] xl:-bottom-[200px] xl:-right-[450px] xl:h-[800px] xl:w-[800px] xl:border-[35px] lap:-bottom-[300px] lap:-right-[500px] lap:h-[1000px] lap:w-[1000px] lap:border-[40px] "></div>
          <div className="absolute opacity-50 padding-x lg:-left-16 lg:top-20 xl:-left-16 xl:top-28 lap:top-32">
            <img
              src={fd5}
              alt="food-image"
              className="animate-spinS rounded-full border-golden lg:w-[290px] lg:border-[12px] xl:w-[380px] xl:border-[15px] lap:border-[20px]"
            />
          </div>
          <div className="absolute flex items-end justify-end lg:right-20 lg:top-28 xl:right-20 xl:top-28">
            <h1 className="font-cormorant font-extrabold uppercase tracking-widest text-golden opacity-30 lg:text-[45px] xl:text-[68px] 2lap:text-[82px]">
              Awards & Recognition
            </h1>
          </div>
        </section>

        <section className="relative padding-x">
          <Reservation />
          <div className="absolute z-0 lg:-top-[25px] lg:left-16 xl:-top-6 xl:left-24 lap:left-20 lap:top-0">
            <img
              src={G}
              alt="g-logo"
              width={600}
              className="lg:w-[370px] xl:w-[500px] lap:w-[600px]"
            />
          </div>
          <div className="absolute z-0 lg:left-32 lg:top-[60px] xl:left-48 xl:top-[90px] lap:top-[130px] ">
            <img
              src={fd6}
              alt="food-image"
              className="animate-spinS rounded-full lg:w-[240px] xl:w-[290px] lap:w-[380px]"
            />
          </div>
        </section>

        <section className="relative padding-x">
          <FindUs />
          <div className="absolute lg:-right-4 lg:top-[250px] xl:-right-6 xl:top-[320px] lap:-right-2 lap:top-[350px]">
            <h1 className=" rotate-90 font-cormorant font-extrabold uppercase text-golden opacity-70 lg:text-[40px] lg:tracking-[20px] xl:text-[55px] xl:tracking-[29px] lap:text-[68px] lap:tracking-[30px]">
              Find Us
            </h1>
          </div>
          <div className="absolute -rotate-45 opacity-70 lg:-right-24 lg:top-20 xl:-right-28 xl:top-20 lap:-right-28 lap:top-24">
            <img
              width={800}
              src={chopsticks}
              alt="chopsticks"
              className="lg:w-[470px] xl:w-[610px] lap:w-[700px]"
            />
          </div>
          <div className="absolute z-0 rounded-full border-[20px] border-golden/30 opacity-50 lg:-left-[200px] lg:top-[105px] xl:-left-[350px] xl:top-[100px]">
            <img
              src={fd7}
              alt="food-image"
              className="animate-spinS object-cover object-center lg:w-[430px] xl:w-[590px] lap:w-[700px]"
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
