import { avatar1, avatar2, avatar3, stars } from "@/assets";
import { Card, Container, Image } from "react-bootstrap";
import Texts from "./Texts";
import Headings from "./Headings";

const Testimonial = () => {
  return (
    <div style={{ backgroundColor: "var(--bg-pale-blue)" }}>
      <Container
        fluid="xl"
        className="px-3 py-5"
      >
         <Texts text="Clients Feedback" className="fw-bold" />
         <Headings text="Customer Testimonials" />
        <div className=" d-flex align-items-center justify-content-between mt-5">
          <Card style={{ maxWidth: "350px", backgroundColor: "var(--bg-pale-blue)" }} className="reviewCard">
            <Card.Body>
              <Image src={stars} width="100px" />
              <Texts
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra"
                className="mt-3"
              />
              <div className="d-flex gap-3">
                <Image src={avatar1} width="50px"/>
                <div>
                    <div className="d-flex flex-column">
                    <span>Dianne Russell</span>
                    <span>Starbucks</span>
                    </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ maxWidth: "350px", backgroundColor: "var(--bg-pale-blue)"  }} className="reviewCard">
            <Card.Body>
              <Image src={stars} width="100px" />
              <Texts
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra"
                className="mt-3"
              />
              <div className="d-flex gap-3">
                <Image src={avatar2} width="50px"/>
                <div>
                    <div className="d-flex flex-column">
                    <span>Dianne Russell</span>
                    <span>Starbucks</span>
                    </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ maxWidth: "350px", backgroundColor: "var(--bg-pale-blue)"}} className="reviewCard">
            <Card.Body>
              <Image src={stars} width="100px" />
              <Texts
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra"
                className="mt-3"
              />
              <div className="d-flex gap-3">
                <Image src={avatar3} width="50px"/>
                <div>
                    <div className="d-flex flex-column">
                    <span>Dianne Russell</span>
                    <span>Starbucks</span>
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
