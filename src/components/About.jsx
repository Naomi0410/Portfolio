import { temi } from "@/assets";
import { Container, Image } from "react-bootstrap";
import Texts from "./Texts";
import Headings from "./Headings";

const About = () => {
  return (
    <Container
      fluid="xl"
      className="px-3 py-5 d-md-flex align-items-center justify-content-between"
    >
      <Image src={temi} style={{ maxWidth: "500px" }} className="aboutImg" />
      <div style={{ maxWidth: "500px" }}>
        <Texts text="About" className="fw-bold" />
        <Headings text="About Me" />
        <Texts
          text="I'm Temitope Abiola, a driven and detail-oriented individual with a unique blend of scientific and technical expertise. After completing my degree in biochemistry, I discovered a passion for coding and problem-solving. I leveraged my analytical skills and research experience to transition into full-stack web development."
        />
        <Texts
          text="Proficient in HTML5, CSS3, JavaScript, React, Node.js, bootstrap and MongoDB.
"
        />
        <Texts
        text=" As a full-stack web developer, my goal is to build innovative and user-friendly applications. I aim to continuously learn and grow in the industry, staying up-to-date with the latest technologies and trends."
        />
      </div>
    </Container>
  );
};

export default About;
