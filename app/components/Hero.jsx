import React from "react";
import vedioBG from "../../public/imgs/NoOutro.mp4";
import Navbar from "./Navbar";
import Landing from "./Landing";

function Hero() {
  return (
    <div className="h-[120vh]">
      <video
        src={vedioBG}
        muted
        autoPlay
        loop
        className="w-[100vw] h-[120vh] -z-10 absolute top-0 object-cover"
      />
      <div className="mx-auto xl:px-40 px-5">
        <Navbar />
        <Landing />
      </div>
    </div>
  );
}

export default Hero;