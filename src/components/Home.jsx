import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-white py-4">
            I'm a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md ">
            I have experience of building and designing software. Currently, I
            love to work on web application using technologies like React,
            Tailwind, Next.Js and mySql.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="text-white group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-200">
                <MdOutlineKeyboardArrowRight size={20} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/5 md:w-3/5"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
