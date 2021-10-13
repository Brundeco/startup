import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Header } from "../components";

import VideoOne from "./../assets/videos/apps.mp4";
import VideoTwo from "./../assets/videos/branding.mp4";
import VideoThree from "./../assets/videos/websites.mp4";

AOS.init();

export default () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="pt-24 px-16 lg:px-10 flex flex-row items-center">
          <a href="" className="text-6xl font-bold pr-6">
            About
          </a>
          <a href="" className="text-6xl font-bold pr-6">
            Goal
          </a>
          <a href="" className="text-6xl font-bold pr-6">
            Projects
          </a>
        </div>

        <div className="pt-28">
          <a href="">
            <video src={VideoOne} loop autoPlay muted preload="auto"></video>
          </a>
          <a href="">
            <video src={VideoTwo} loop autoPlay muted preload="auto"></video>
          </a>
          <a href="">
            <video src={VideoThree} loop autoPlay muted preload="auto"></video>
          </a>
        </div>
      </main>
    </>
  );
};