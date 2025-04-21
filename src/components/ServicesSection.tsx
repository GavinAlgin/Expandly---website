import React from 'react';
import bgImg from '../assets/ChatGPT Image Apr 15, 2025, 02_07_45 PM.png';

const ServicesSection = () => {
  return (
    <div className="font-Lato">
      <p className="text-lg mt-6 font-semibold text-[#08201D] text-center">What can we do for you?</p>
      <h1 className="mt-2 mb-6 text-3xl font-bold text-black text-center">Development and Marketing</h1>
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold md:text-3xl">
                Innovative Development Solutions for <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#08201D] to-white font-semibold'>Smalt Success</span> 
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
                We help your brand grow through cutting-edge development by specializing in crafting unique web and mobile solutions tailored to your businesses needs.From innovative features to seamless functionality we bring your ideas to life.
            </p>

            <div className="mt-4 md:mt-8">
                <a href="#" className="inline-block rounded-md bg-lime-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-lime-600 focus:ring-3 focus:ring-green-400 focus:outline-hidden">
                Let's Go
                </a>
            </div>
            </div>
        </div>

        <img
            alt=""
            src={bgImg}
            className="h-56 w-full object-cover sm:h-full"
        />
        </section>
    </div>
  );
};

export default ServicesSection;
