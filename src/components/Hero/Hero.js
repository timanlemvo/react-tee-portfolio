import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Hi there, I'm Tima</h1>
            <h5>Full Stack Developer | Front End Specialist</h5>
            <p>
            I create appealing designs with considerable amounts of creativity, which makes me love what I do!
            </p>
          </HeroLeft>
          <HeroRight>
            <Image
              src="https://raw.githubusercontent.com/timanlemvo/react-tee-portfolio/main/src/Assets/NewMemoji.png"
              alt="man-svgrepo"
            />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
            <img
              src="https://raw.githubusercontent.com/timanlemvo/react-tee-portfolio/eacc372de526d110c6754082f63f9411fd29554b/src/Assets/scroll.png"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
