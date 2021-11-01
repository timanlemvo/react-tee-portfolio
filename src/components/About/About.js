import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://raw.githubusercontent.com/timanlemvo/react-tee-portfolio/main/src/Assets/NewMemoji.png"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
          Hello! My name is <strong>Tima Nlemvo</strong>. I enjoy creating and designing front-ends. I have recently completed a six-month Full Stack boot camp, which instilled the foundation of the MERN Stack. I have always had a strong interest in web development and its now my time to shine!
          </div>
          <div className="AboutBio tagline2">
            I have comprehensive knowledge using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
