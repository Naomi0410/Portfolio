import { aboutImg } from "@/assets";
import { Container, Image } from "react-bootstrap";
import Texts from "./Texts";
import Headings from "./Headings";

const About = () => {
  return (
    <Container
      fluid="xl"
      className="px-3 py-5 d-flex align-items-center justify-content-between"
    >
      <Image src={aboutImg} style={{ maxWidth: "500px" }} />
      <div style={{ maxWidth: "500px" }}>
        <Texts text="About" className="fw-bold" />
        <Headings text="About Me" />
        <Texts
          text="As a highly motivated and detail-oriented developer, I bring a passion for innovation and a drive for excellence to every project I undertake. With a strong foundation in computer science and a keen interest in staying up-to-date with the latest technologies, I am confident in my ability to deliver high-quality solutions that meet and exceed expectations.
"
        />
        <Texts
          text="Proficient in a range of programming languages, including JavaScript, and HTML/CSS.
Experience with front-end frameworks such as React.
Knowledge of back-end development with Node.js
"
        />
      </div>
    </Container>
  );
};

export default About;
