import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className=" text-xl mt-20">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          fugit nesciunt dolore nihil aperiam quae necessitatibus, accusamus,
          sequi minus aliquid quod laborum dolorem voluptas perspiciatis nobis
          consequuntur! Quaerat, nemo architecto dolores, aspernatur dignissimos
          ea nihil quo eos, officia cupiditate ipsum quasi vel! Impedit
          quibusdam ipsam nulla ut, officiis laboriosam eveniet?
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          perspiciatis ipsam repudiandae ducimus nobis ad distinctio deleniti
          nemo necessitatibus adipisci, est earum accusamus dignissimos, dolorum
          voluptas? Vero explicabo obcaecati quisquam soluta doloremque nobis
          deserunt illo optio aut, neque culpa in?
        </p>
      </div>
    </div>
  );
};

export default About;
