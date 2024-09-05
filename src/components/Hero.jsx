import { Card, Container, Image } from "react-bootstrap";
import { heroImg, responsive, testing, webFlow, framework } from "@/assets";
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
          <Image
            src={heroImg}
            style={{ maxWidth: "600px" }}
            className="heroImg"
          />
        </Container>
      </div>
      <div>
        <Container fluid="xl" className="px-3 py-5 heroSection">
          <Texts text="My Skills" className="fw-bold" />
          <Headings text="My Expertise" />
          <div className="d-flex  justify-content-between mt-5">
            <Card
              style={{
                width: "18rem",
                backgroundColor: "var(--bg-pale-blue)",
                border: "0",
              }}
            >
              <Card.Body>
                <Image src={responsive} width="50px" />
                <Texts
                  text="Responsive Design"
                  className="mt-3 fw-bold"
                  size="1.25rem"
                />
                <Card.Text>
                  Responsive design ensures a website adapts to different screen
                  sizes and devices, providing an optimal user experience.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "18rem",
                backgroundColor: "var(--bg-pale-blue)",
                border: "0",
              }}
            >
              <Card.Body>
                <Image src={framework} width="50px" />
                <Texts
                  text="Front-End Frameworks"
                  className="mt-3 fw-bold"
                  size="1.25rem"
                />
                <Card.Text>
                  Pre-built structures for efficient front-end development.
                  Standardize coding practices and improve collaboration and
                  enable rapid prototyping and development
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "18rem",
                backgroundColor: "var(--bg-pale-blue)",
                border: "0",
              }}
            >
              <Card.Body>
                <Image src={testing} width="50px" />
                <Texts
                  text="Testing and Debugging"
                  className="mt-3 fw-bold"
                  size="1.25rem"
                />
                <Card.Text>
                  Ensure software quality and reliability, identify and fix
                  errors, bugs, and issues and validate functionality,
                  performance, and security
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "18rem",
                backgroundColor: "var(--bg-pale-blue)",
                border: "0",
              }}
            >
              <Card.Body>
                <Image src={webFlow} width="50px" />
                <Texts
                  text="Cloud Services"
                  className="mt-3 fw-bold"
                  size="1.25rem"
                />
                <Card.Text>
                  On-demand access to scalable and flexible computing resources.
                  Eliminate upfront costs, reduce maintenance, and increase
                  agility.
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
