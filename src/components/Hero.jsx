import { Card, Container, Image } from "react-bootstrap";
import { temi, responsive, webFlow, framework } from "@/assets";
import Texts from "./Texts";
import Headings from "./Headings";
import Scrollicons from "./Scrollicons"
import ActionButton from "./ActionButton";
import { useScroll } from "@/hooks";

const Hero = () => {
  const [scroll, scrollRef] = useScroll();
  return (
    <>
      <div style={{ backgroundColor: "var(--bg-pale-blue)" }}>
        <Container
          fluid="xl"
          className=" px-3 py-5 d-md-flex align-items-center justify-content-between"
        >
          <div className="heroText d-none d-md-block mt-5">
            <Texts
              text="Hey, I am Temi"
              className="fw-bold textMar"
              size="20px"
            />
            <Headings
              text="I develop dynamic and User-Centered Web  Applications"
              size="4vw"
              className="textMar"
            />
            <Texts
              text="My expertise spans both front-end and back-end development, enabling me to build comprehensive solutions that meet diverse client needs."
              className="textMar"
              size="20px"
            />
            <a href="#contact">
              <ActionButton
                variant="none"
                text="Get In Touch"
                style={{ backgroundColor: "var(--blue-magenta)" }}
                className="rounded-1 text-white mb-3 "
              />
            </a>
          </div>
          {/* small screen */}
          <div className="heroText d-md-none">
            <Texts text="Hey, I am Temi" className="fw-bold" />
            <Headings text="I develop dynamic and User-Centered Web  Applications" />
            <Texts text="My expertise spans both front-end and back-end development, enabling me to build comprehensive solutions that meet diverse client needs." />
            <a href="#contact">
              <ActionButton
                variant="none"
                text="Get In Touch"
                style={{ backgroundColor: "var(--blue-magenta)" }}
                className="rounded-1 text-white mb-3 "
              />
            </a>
          </div>
          <Image src={temi} className="heroImg" />
        </Container>
      </div>
      <div>
        <Container fluid="xl" className="px-3 py-5 heroSection">
          <Texts text="My Skills" className="fw-bold" />
          <Headings text="My Expertise" />
          <div className="position-relative mt-5">
          <div className="d-flex overflow-x-scroll overflow-y-hidden scrollBody gap-4" ref={scrollRef}>
            <Card
              style={{
                maxWidth: "19rem",
                minWidth: "19rem",
                backgroundColor: "var(--bg-pale-blue)",
                border: "0",
              }}
              className="mb-3"
            >
              <Card.Body >
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
                maxWidth: "19rem",
                minWidth: "19rem",
                backgroundColor: "var(--bg-pale-blue)",
                border: "0",
              }}
              className="mb-3"
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
                maxWidth: "19rem",
                minWidth: "19rem",
                backgroundColor: "var(--bg-pale-blue)",
                border: "0",
              }}
              className="mb-3"
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
                maxWidth: "19rem",
                minWidth: "19rem",
                backgroundColor: "var(--bg-pale-blue)",
                border: "0",
              }}
              className="mb-3"
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
            <Scrollicons scroll={scroll} />
          </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
