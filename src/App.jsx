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
          <section className="padding-x bg-gradient-to-b from-black via-black/70 to-transparent sm:pb-12 md:pb-14 lg:pb-20 xl:pb-24">
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
          <div className="lap:bg-fill pointer-events-none absolute z-0 animate-spinS rounded-full border-golden/30 bg-[url('./assets/fd1.png')] bg-center lg:-top-[50px] lg:left-[510px] lg:min-h-[270px] lg:min-w-[270px] lg:border-[14px] lg:bg-contain xl:-top-[30px] xl:left-[480px] xl:min-h-[350px] xl:min-w-[350px] xl:border-[16px] lap:-top-[20px] lap:left-[640px] lap:min-h-[400px] lap:min-w-[400px] lap:border-[20px]"></div>
          <div className="pointer-events-none absolute z-0 rounded-full border-golden/30 sm:-bottom-[250px] sm:-left-[290px] sm:h-[530px] sm:w-[530px] sm:border-[20px] md:-bottom-[300px] md:-left-[300px] md:h-[600px] md:w-[600px] md:border-[28px] lg:-bottom-[325px] lg:-left-[325px] lg:h-[650px] lg:w-[650px] lg:border-[32px] xl:-bottom-[400px] xl:-left-[400px] xl:h-[800px] xl:w-[800px] xl:border-[40px] lap:-bottom-[500px] lap:-left-[500px] lap:h-[1000px] lap:w-[1000px] "></div>
        </section>

        <section className="padding-x bg-gradient-to-r from-[#090909] via-[#151513] to-[#161616]">
          <SpecialMenu />
        </section>

        <section className="relative z-10">
          <Gallery />
        </section>

        <section className="relative padding-x ">
          <Chef />
          <div className="pointer-events-none absolute z-0 rounded-full border-golden/60 sm:-left-[260px] sm:-top-[37px] sm:h-[500px] sm:w-[500px] sm:border-[18px] md:-left-[280px] md:-top-[60px] md:h-[550px] md:w-[550px] md:border-[20px] lg:-left-[280px] lg:-top-[60px] lg:h-[560px] lg:w-[560px] lg:border-[25px] xl:-left-[500px] xl:-top-[100px] xl:h-[850px] xl:w-[850px] xl:border-[35px] lap:-left-[500px] lap:-top-[100px] lap:h-[1000px] lap:w-[1000px] lap:border-[40px] "></div>
          <div className="pointer-events-none absolute z-0 rounded-full border-golden/60 sm:-bottom-[280px] sm:-right-[280px] sm:h-[550px] sm:w-[550px] sm:border-[18px] md:-bottom-[320px] md:-right-[320px] md:h-[600px] md:w-[600px] md:border-[20px] lg:-bottom-[350px] lg:-right-[350px] lg:h-[700px] lg:w-[700px] lg:border-[25px] xl:-bottom-[400px] xl:-right-[400px] xl:h-[800px] xl:w-[800px] xl:border-[35px] lap:-bottom-[500px] lap:-right-[500px] lap:h-[1000px] lap:w-[1000px] lap:border-[40px]"></div>
          <div className="absolute z-0 opacity-80 sm:-left-[245px] sm:-top-4 md:-left-[250px] md:-top-4 lg:-left-[250px] lg:-top-6 xl:-left-[400px] xl:-top-2 lap:-left-[450px] lap:-top-6 ">
            <img
              src={fd4}
              alt="black-dish"
              width={700}
              className="animate-spinS object-cover object-center sm:w-[450px] md:w-[450px] lg:w-[480px] xl:w-[650px] lap:w-[850px]"
            />
          </div>
        </section>

        <section className="relative z-10 border-y-2 border-golden">
          {/* <NewsTicker /> */}
          <Intro />
          {/* <NewsTicker /> */}
        </section>

        <section className="relative md:pb-38 sm:py-52 sm:pb-32 md:py-56 lg:py-60 lg:pb-40 xl:py-72 xl:pb-32 lap:py-80 lap:pb-40">
          {/* <div className="my-20 mb-40 h-[25px] w-[100%] bg-golden/30"></div> */}
          <Laurels />
          {/* <div className="pointer-events-none absolute -left-[500px] -top-[300px] z-0 h-[1000px] w-[1000px] rounded-full border-[40px] border-golden/60 "></div> */}
          <div className="pointer-events-none absolute z-0 rounded-full border-golden/60 md:-bottom-[100px] md:-right-[280px] md:h-[600px] md:w-[600px] md:border-[25px] lg:-bottom-[150px] lg:-right-[300px] lg:h-[650px] lg:w-[650px] lg:border-[30px] xl:-bottom-[200px] xl:-right-[450px] xl:h-[800px] xl:w-[800px] xl:border-[35px] lap:-bottom-[300px] lap:-right-[500px] lap:h-[1000px] lap:w-[1000px] lap:border-[40px] "></div>
          <div className="absolute opacity-50 padding-x sm:-left-8 sm:top-20 md:-left-14 md:top-16 lg:-left-16 lg:top-20 xl:-left-16 xl:top-28 lap:top-32">
            <img
              src={fd5}
              alt="food-image"
              className="animate-spinS rounded-full border-golden sm:w-[270px] md:w-[290px] md:border-[10px] lg:w-[290px] lg:border-[12px] xl:w-[380px] xl:border-[15px] lap:border-[20px]"
            />
          </div>
          <div className="absolute flex items-end justify-end sm:right-20 sm:top-28 md:right-20 md:top-28 lg:right-20 lg:top-28 xl:right-20 xl:top-28">
            <h1 className="relative font-cormorant font-extrabold uppercase tracking-widest text-golden opacity-30 max-[971px]:-top-10 max-md:-top-12 sm:text-[40px] lg:text-[45px] xl:text-[68px] 2lap:text-[82px]">
              <span className="max-[971px]:relative max-[971px]:-right-[182px] max-md:-right-[182px]">
                Awards
              </span>
              <span className="min-[941px]:hidden">
                <br />
              </span>{" "}
              & Recognition
            </h1>
          </div>
        </section>

        <section className="relative padding-x max-md:py-4">
          <Reservation />
          <div className="absolute z-0 sm:-top-[19px] sm:left-[57px] md:-top-[20px] md:left-[68px] lg:-top-[25px] lg:left-16 xl:-top-6 xl:left-24 lap:left-20 lap:top-0">
            <img
              src={G}
              alt="g-logo"
              width={600}
              className="sm:w-[330px] md:w-[350px] lg:w-[370px] xl:w-[500px] lap:w-[600px]"
            />
          </div>
          <div className="absolute z-0 sm:left-28 sm:top-[54px] md:left-32 md:top-[55px] lg:left-32 lg:top-[60px] xl:left-48 xl:top-[90px] lap:top-[130px] ">
            <img
              src={fd6}
              alt="food-image"
              className="animate-spinS rounded-full sm:w-[210px] md:w-[230px] lg:w-[240px] xl:w-[290px] lap:w-[380px]"
            />
          </div>
        </section>

        <section className="relative padding-x">
          <FindUs />
          <div className="absolute sm:-right-3 sm:top-[250px] md:-right-3 md:top-[250px] lg:-right-4 lg:top-[250px] xl:-right-6 xl:top-[320px] lap:-right-2 lap:top-[350px]">
            <h1 className=" rotate-90 font-cormorant font-extrabold uppercase text-golden opacity-70 sm:text-[36px] sm:tracking-[16px] md:text-[38px] md:tracking-[18px] lg:text-[40px] lg:tracking-[20px] xl:text-[55px] xl:tracking-[29px] lap:text-[68px] lap:tracking-[30px]">
              Find Us
            </h1>
          </div>
          <div className="absolute -rotate-45 opacity-70 sm:-right-20 sm:top-20 md:-right-24 md:top-20 lg:-right-24 lg:top-20 xl:-right-28 xl:top-20 lap:-right-28 lap:top-24">
            <img
              width={800}
              src={chopsticks}
              alt="chopsticks"
              className="sm:w-[400px] md:w-[450px] lg:w-[470px] xl:w-[610px] lap:w-[700px]"
            />
          </div>
          <div className="absolute z-0 rounded-full border-golden/30 opacity-50 sm:-left-[130px] sm:top-[85px] sm:border-[16px] md:-left-[170px] md:top-[110px] md:border-[20px] lg:-left-[200px] lg:top-[105px] xl:-left-[350px] xl:top-[100px]">
            <img
              src={fd7}
              alt="food-image"
              className="animate-spinS object-cover object-center sm:w-[360px] md:w-[400px] lg:w-[430px] xl:w-[590px] lap:w-[700px]"
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
