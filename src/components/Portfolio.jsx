import { Card, Container } from "react-bootstrap";
import Texts from "./Texts";
import Headings from "./Headings";
import Scrollicons from "./Scrollicons";
import ActionButton from "./ActionButton";
import { IoLogoGithub } from "react-icons/io";
import { insure, loopStudio, teemSeller } from "@/assets";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useScroll } from "@/hooks";

const Portfolio = () => {
  const [scroll, scrollRef] = useScroll();
  const handleGitHubClick = () => {
    window.open("https://github.com/Naomi0410", "_blank");
  };

  return (
    <Container fluid="xl" className="px-3 py-5 ">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <Texts text="Recent Projects" className="fw-bold" />
          <Headings text="My Portfolio" />
        </div>
        <ActionButton
          variant="none"
          text={
            <>
              <IoLogoGithub size="20px" /> Visit My GitHub
            </>
          }
          style={{ backgroundColor: "var(--light-blue-magenta)" }}
          className="rounded-4 text-white p-3"
          onClick={handleGitHubClick}
        />
      </div>

      <div className="d-lg-flex d-none align-items-center justify-content-between mt-5">
        <Card
          style={{ maxWidth: "350px" }}
          className="border-0 shadow mb-3 projectCard"
        >
          <Card.Img
            variant="top"
            src={loopStudio}
            style={{ height: "15rem" }}
            className="rounded-3"
          />
          <Card.Body>
            <Card.Title className="fw-bold">LoopStudio</Card.Title>
            <Card.Text>
              Our award-winning creations have transformed businesses through
              digital experiences that bind to their brand.
            </Card.Text>
            <a
              href="https://github.com/Naomi0410/loop-studios"
              className="fw-bold"
            >
              View Project <MdOutlineArrowOutward />
            </a>
          </Card.Body>
        </Card>
        <Card
          style={{ maxWidth: "350px" }}
          className="border-0 shadow mb-3 projectCard"
        >
          <Card.Img
            variant="top"
            src={teemSeller}
            style={{ height: "15rem" }}
            className="rounded-3"
          />
          <Card.Body>
            <Card.Title>Teem-Seller</Card.Title>
            <Card.Text>
              Teem-seller is a flexible commerce engine that gives sellers the
              abilty to manage their products effortlessly.
            </Card.Text>
            <a href="https://teem-seller-weld.vercel.app" className="fw-bold">
              View Website <MdOutlineArrowOutward />
            </a>
          </Card.Body>
        </Card>
        <Card
          style={{ maxWidth: "350px" }}
          className="border-0 shadow mb-3 projectCard"
        >
          <Card.Img
            variant="top"
            src={insure}
            style={{ height: "15rem" }}
            className="rounded-3"
          />
          <Card.Body>
            <Card.Title>Insure</Card.Title>
            <Card.Text>
              Get your life insurance coverage easier and faster. Ensure you and
              your loved ones are protected.
            </Card.Text>
            <a
              href="https://github.com/Naomi0410/insurepageb"
              className="fw-bold"
            >
              View Project <MdOutlineArrowOutward />
            </a>
          </Card.Body>
        </Card>
      </div>

      {/* medium and small screen */}
      <div className="d-lg-none position-relative mt-5">
      <div className="d-flex overflow-x-scroll overflow-y-hidden scrollBody gap-4" ref={scrollRef}>
        <Card
          style={{minWidth:"350px"}}
          className="border-0 shadow mb-3 projectCard"
        >
          <Card.Img
            variant="top"
            src={loopStudio}
            style={{ height: "15rem" }}
            className="rounded-3"
          />
          <Card.Body>
            <Card.Title className="fw-bold">LoopStudio</Card.Title>
            <Card.Text>
              Our award-winning creations have transformed businesses through
              digital experiences that bind to their brand.
            </Card.Text>
            <a
              href="https://github.com/Naomi0410/loop-studios"
              className="fw-bold"
            >
              View Project <MdOutlineArrowOutward />
            </a>
          </Card.Body>
        </Card>
        <Card
          style={{ minWidth:"350px" }}
          className="border-0 shadow mb-3 projectCard"
        >
          <Card.Img
            variant="top"
            src={teemSeller}
            style={{ height: "15rem" }}
            className="rounded-3"
          />
          <Card.Body>
            <Card.Title>Teem-Seller</Card.Title>
            <Card.Text>
              Teem-seller is a flexible commerce engine that gives sellers the
              abilty to manage their products effortlessly.
            </Card.Text>
            <a href="https://teem-seller-weld.vercel.app" className="fw-bold">
              View Website <MdOutlineArrowOutward />
            </a>
          </Card.Body>
        </Card>
        <Card
          style={{ minWidth:"350px" }}
          className="border-0 shadow mb-3 projectCard"
        >
          <Card.Img
            variant="top"
            src={insure}
            style={{ height: "15rem" }}
            className="rounded-3"
          />
          <Card.Body>
            <Card.Title>Insure</Card.Title>
            <Card.Text>
              Get your life insurance coverage easier and faster. Ensure you and
              your loved ones are protected.
            </Card.Text>
            <a
              href="https://github.com/Naomi0410/insurepageb"
              className="fw-bold"
            >
              View Project <MdOutlineArrowOutward />
            </a>
          </Card.Body>
        </Card>
        <Scrollicons scroll={scroll} />
        </div>
      </div>
    </Container>
  );
};

export default Portfolio;
