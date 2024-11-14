import { avatar1, avatar2, avatar3, stars } from "@/assets";
import { Card, Container, Image } from "react-bootstrap";
import Texts from "./Texts";
import Headings from "./Headings";

const Testimonial = () => {
  return (
    <div style={{ backgroundColor: "var(--bg-pale-blue)" }}>
      <Container fluid="xl" className="px-3 py-5">
        <Texts text="Clients Feedback" className="fw-bold" />
        <Headings text="Customer Testimonials" />
        <div className=" d-md-flex flex-wrap align-items-center justify-content-between mt-5">
          <Card
            style={{
              maxWidth: "350px",
              backgroundColor: "var(--bg-pale-blue)",
            }}
            className="reviewCard mb-3"
          >
            <Card.Body>
              <Image src={stars} width="100px" />
              <Texts
                text="TemiDev's web development skills are top-notch. I highly recommend them for any web development project."
                className="mt-3"
              />
              <div className="d-flex gap-3">
                <Image src={avatar1} width="50px" />
                <div>
                  <div className="d-flex flex-column">
                    <span>Bob Johnson</span>
                    <span>Small Business Owner</span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card
            style={{
              maxWidth: "350px",
              backgroundColor: "var(--bg-pale-blue)",
            }}
            className="reviewCard mb-3"
          >
            <Card.Body>
              <Image src={stars} width="100px" />
              <Texts
                text="TemiDev passion for web development shines through in their work. They built a website that exceeded my expectations."
                className="mt-3"
              />
              <div className="d-flex gap-3">
                <Image src={avatar2} width="50px" />
                <div>
                  <div className="d-flex flex-column">
                    <span>John Smith</span>
                    <span>Tech Entrepreneur</span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card
            style={{
              maxWidth: "350px",
              backgroundColor: "var(--bg-pale-blue)",
            }}
            className="reviewCard mb-3"
          >
            <Card.Body>
              <Image src={stars} width="100px" />
              <Texts
                text="TemiDev demonstrated exceptional skill and dedication in building a robust and scalable web application."
                className="mt-3"
              />
              <div className="d-flex gap-3">
                <Image src={avatar3} width="50px" />
                <div>
                  <div className="d-flex flex-column">
                    <span>Shaun Doe</span>
                    <span>Project Manager
                    </span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
