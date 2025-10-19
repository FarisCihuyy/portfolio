import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Icon } from "@iconify-icon/react";

import Sparkle from "./components/Sparkle";
import Twinkle from "./components/Twinkle";
import FadeDownAnimation from "./layouts/FadeDownAnimation";
import Underliying from "./components/Underliying";
import BounceAnimation from "./components/BounceAnimation";
import TechIcons from "./components/TechIcons";
import Experiences from "./components/Experiences";

const skills = ["front-end", "back-end", "design"];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <FadeDownAnimation style="hero h-[60vh] lg:h-screen relative flex justify-center items-center overflow-hidden">
        <Underliying
          color={["#4CCD99", "#6499E9", "#78C841"]}
          position={{
            bottom: "30%",
          }}
        ></Underliying>
        <Underliying
          style="animate-float"
          color={["#78C841", "#4CCD99", "#6499E9"]}
          position={{
            left: "-20%",
            bottom: "33.33%",
          }}
        />
        <Underliying
          style="animate-float"
          color={["#6499E9", "#78C841", "#4CCD99"]}
          position={{
            bottom: "40%",
            right: "-20%",
          }}
        />
        <div className="flex flex-col justify-center items-center gap-2 mt-12">
          <h1 className="font-Acorn text-6xl font-bold relative lg:text-8xl">
            Hi! I’m Faris.
            <Twinkle />
            <span className="absolute -top-15 -right-5 rotate-3 animate-scale">
              <Sparkle size={50} fill="white" />
            </span>
            <span className="lg:block hidden absolute -bottom-20 -left-20 rotate-3 animate-scale">
              <Sparkle size={50} fill="white" />
            </span>
          </h1>
          <p className="text-2xl lg:text-3xl">Teacher & Frontend Developer.</p>
          <div className="mt-2 w-1/3 flex justify-between text-xl lg:text-2xl">
            <span className="rotate-6">20</span>
            <span>
              <Sparkle size={24} />
            </span>
            <span className="-rotate-6">25</span>
          </div>
        </div>
      </FadeDownAnimation>
      <FadeDownAnimation style="bg-secondary text-primary text-lg lg:text-2xl font-semibold lg:tracking-[0.2em] py-8 mb-6 flex justify-center items-center gap-4">
        {skills.map((skill, i) => {
          return (
            <span key={skill} className="flex gap-4  items-center">
              {skill}
              {i < skills.length - 1 && <Sparkle fill="#FDDE55" size="16" />}
            </span>
          );
        })}
      </FadeDownAnimation>
      <FadeDownAnimation style="max-w-2xl mx-auto lg:max-w-full">
        <h2 className="font-Acorn px-16 text-4xl font-bold text-center lg:mt-12 lg:text-left lg:text-6xl">
          <span className="relative mr-3">
            about
            <Twinkle />
          </span>
          me
        </h2>
        <div className="relative px-6 pt-4 pb-12 lg:px-16 w-full lg:flex lg:justify-between lg:gap-20 lg:items-start">
          <div className="flex-1 space-y-6">
            <p className="leading-5 text-sm text-justify">
              I’m a Frontend Web Developer who’s passionate about building
              clean, responsive, and user-friendly interfaces using{" "}
              <span className="text-highlight">JavaScript or Typescript.</span>{" "}
              I enjoy learning new technologies, improving my coding skills, and
              turning ideas into real, functional web experiences. Currently,
              I’m focused on growing my portfolio through hands-on projects that
              help me learn and showcase my development journey.
            </p>
            <div>
              <h3 className="font-semibold text-2xl md:text-3xl tracking-widest mb-2">
                education
              </h3>
              <div className="flex gap-4 items-start">
                <p className="basis min-w-[87px] text-right text-xs">
                  2023 - present
                </p>
                <p className="text-sm leading-none">
                  <b className="font-medium">system of information,</b> at UNP
                  Kediri
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-2xl md:text-3xl tracking-widest mb-2">
                experience <span className="font-Acorn">&</span> projects
              </h3>
              <ul className="text-xs tracking-wide space-y-4">
                <Experiences />
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-2xl tracking-widest mb-2">
                contact
              </h3>
              <p className="text-sm w-fit">
                <a
                  href="mailto:farissulianto22@gmail.com"
                  className="flex gap-2"
                >
                  <Icon icon="quill:mail" width="24" height="24" />
                  farissulianto22@gmail.com
                </a>
              </p>
              <p className="text-sm">
                <a
                  href="https://www.linkedin.com/in/faris-sulianto/"
                  className="flex gap-2"
                >
                  <Icon icon="la:linkedin" width="24" height="24" />
                  Linkedin
                </a>
              </p>
            </div>
          </div>
          <div className="hidden min-lg:block w-0.5 bg-[#FDDE55] absolute top-0 left-1/2 bottom-8 before:absolute before:-ml-[8.5px] before:-top-3 before:inline-block before:size-5 before:bg-[url('/sparkle.svg')] before:bg-contain after:absolute after:-ml-[8.5px] after:-bottom-3 after:inline-block after:size-5 after:bg-[url('/sparkle.svg')] after:bg-contain"></div>
          <div className="flex-1 space-y-6">
            <div>
              <h3 className="font-semibold text-2xl tracking-widest mb-2">
                technical skill
              </h3>
              <div className="space-y-4">
                <ul className="flex gap-4 lg:gap-6 items-center flex-wrap">
                  <TechIcons />
                </ul>
                <ul className="space-y-6">
                  <li>
                    <h4 className="uppercase font-medium text-xs mb-3">
                      programming languages:
                    </h4>
                    <BounceAnimation
                      className="text-highlight ml-8 w-fit lg:text-xl -rotate-2"
                      delay={0.1}
                    >
                      Javascript(ES6), Typescript, PHP
                    </BounceAnimation>
                  </li>
                  <li>
                    <h4 className="uppercase font-medium text-xs mb-3">
                      frameworks:
                    </h4>
                    <BounceAnimation
                      className="text-highlight ml-8 w-fit lg:text-xl rotate-1"
                      delay={0.2}
                    >
                      React, NextJS, TailwindCSS
                    </BounceAnimation>
                  </li>
                  <li>
                    <h4 className="uppercase font-medium text-xs mb-3">
                      design <span>&</span> prototyping:
                    </h4>
                    <BounceAnimation
                      className="text-highlight ml-8 w-fit lg:text-xl rotate-2"
                      delay={0.3}
                    >
                      Figma, Canva
                    </BounceAnimation>
                  </li>
                  <li>
                    <h4 className="uppercase font-medium text-xs mb-3">
                      others:
                    </h4>
                    <p className="ml-8 w-fit lg:text-xl">
                      Git, GitHub, Typescript, WordPress
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-2xl tracking-widest mb-2">
                professional skills
              </h3>
              <p className="text-sm">
                Project coordination <span className="font-Acorn">&</span>{" "}
                <span className="text-highlight">Agile</span> fundamentals.
              </p>
              <p className="text-sm">
                Creative problem solving <span>&</span> adaptability.
              </p>
              <p className="text-sm">
                Team work <span>&</span> effective communication.
              </p>
            </div>
          </div>
        </div>
      </FadeDownAnimation>
    </>
  </StrictMode>
);
