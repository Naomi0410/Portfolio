import { Card, Container, Image } from "react-bootstrap";
import { temi, responsive, webFlow, framework } from "@/assets";
import Texts from "./Texts";
import Headings from "./Headings";
import ActionButton from "./ActionButton";

const Hero = () => {
  return (
    <>
      <div style={{ backgroundColor: "var(--bg-pale-blue)" }}>
        <Container
          fluid="xl"
          className="px-3 py-5 d-md-flex align-items-center justify-content-between"
        >
          <div style={{ maxWidth: "450px" }}>
            <Texts text="Hey, I am Temi" className="fw-bold" />
            <Headings text="I develop dynamic and User-Centered Web  Applications" />
            <Texts text="My expertise spans both front-end and back-end development, enabling me to build comprehensive solutions that meet diverse client needs." />
            <a href="#contact">
              <ActionButton
                variant="none"
                text="Get In Touch"
                style={{ backgroundColor: "var(--blue-magenta)" }}
                className="rounded-1 text-white"
              />
            </a>
          </div>
          <Image src={temi} style={{ maxWidth: "600px" }} className="heroImg" />
        </Container>
      </div>
      <div>
        <Container fluid="xl" className="px-3 py-5 heroSection">
          <Texts text="My Skills" className="fw-bold" />
          <Headings text="My Expertise" />
          <div className="d-md-flex flex-wrap justify-content-between mt-5">
            <Card
              style={{
                width: "18rem",
                backgroundColor: "var(--bg-pale-blue)",
                border: "0",
              }}
              className="mb-3 heroCard"
            >
              <Card.Body>
                <Image src={responsive} width="50px" />
                <Texts
                  text="Responsive Design"
                  className="mt-3 fw-bold"
                  size="1.25rem"
                />
                <Card.Text>
                  I ensure a website adapts to different screen sizes and
                  devices, providing an optimal user experience.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "18rem",
                backgroundColor: "var(--bg-pale-blue)",
                border: "0",
              }}
              className="mb-3 heroCard"
            >
              <Card.Body>
                <Image src={framework} width="50px" />
                <Texts
                  text="Front-End Structure & Framework "
                  className="mt-3 fw-bold"
                  size="1.25rem"
                />
                <Card.Text>
                  HTML5: Front-End Structure, <br />
                  REACT: Front-End Framework.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "18rem",
                backgroundColor: "var(--bg-pale-blue)",
                border: "0",
              }}
              className="mb-3 heroCard"
            >
              <Card.Body>
                <Image src={webFlow} width="50px" />
                <Texts
                  text="Back-end (Server-side)"
                  className="mt-3 fw-bold"
                  size="1.25rem"
                />
                <Card.Text>
                  JavaScript (Node.js)- Server-side programming with Express.js
                  as framework for building APIs.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "18rem",
                backgroundColor: "var(--bg-pale-blue)",
                border: "0",
              }}
              className="mb-3 heroCard"
            >
              <Card.Body>
                <Image src={framework} width="50px" />
                <Texts
                  text="User-Interface Libraries"
                  className="mt-3 fw-bold"
                  size="1.25rem"
                />
                <Card.Text>
                  Bootstrap,
                  <br /> Tailwind CSS: Rapid development and consistent styling,
                  <br /> CSS3: Styling Language.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
