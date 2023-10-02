import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay } from '../components';
import { gericht, spoon } from '../assets';

const Footer = () => (
  <section className="w-full flex items-center flex-col justify-between padding-x text-golden font-cormorant pt-24" id="footer-section">
    <FooterOverlay />


    <div className=" border-2 flex gap-10 items-start justify-betw">
      <div className="w-1/3 flex flex-1 flex-col item-center border-2 justify-center h-full">
        <div>
          <h1 className="text-white">Contact Us</h1>
          <p className="font-alt">Street A Bunglow, WallStreet Lane Right, Atlantis, NAM-0R</p>
          <p className="font-alt">+0 123-423-1234</p>
          <p className="font-alt">+0 123-423-1234</p>
        </div>
      </div>

      <div className="w-1/3 flex flex-1 flex-col item-start justify-between">
        <img src={gericht} alt="footer_logo" />
        <p className="">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={spoon} className="mt-4" />
        <div className="bg-white">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="w-1/3  border-2  ">
        <div className='flex flex-col items-center'>
          <h1 className="text-white">Working Hours</h1>
          <p className="font-alt">Monday-Friday:</p>
          <p className="font-alt">08:00 am - 12:00 am</p>
          <p className="font-alt">Saturday-Sunday:</p>
          <p className="font-alt">07:00 am - 11:00 pm</p></div>
      </div>
    </div>

    <div className="">
      <p className="font-alt">2021 Gericht. All Rights reserved.</p>
    </div>
  </section>
);

export default Footer;
