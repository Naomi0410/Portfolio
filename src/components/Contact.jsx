import Texts from "./Texts";
import Headings from "./Headings";
import { Container, Form } from "react-bootstrap";
import ActionButton from "./ActionButton";

const Contact = () => {
  return (
    <>
      <Container fluid="xl" className="px-3 py-5">
        <div className="text-center">
          <Texts text="Get In Touch" className="fw-bold" />
          <Headings text="Contact me" />
        </div>
        <div className="contactForm mx-auto">
          <Form className="mx-auto form contactForm">
            <div className="d-flex justify-content-between">
              <div style={{ width: "45%" }}>
                <Form.Label>First name</Form.Label>
                <Form.Control type="name" />
              </div>
              <div style={{ width: "45%" }}>
                <Form.Label>Last name</Form.Label>
                <Form.Control type="name" />
              </div>
            </div>
            <div className="d-flex justify-content-between my-3">
              <div style={{ width: "45%" }}>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" />
              </div>
              <div style={{ width: "45%" }}>
                <Form.Label>Phone number</Form.Label>
                <Form.Control type="contact" />
              </div>
            </div>
            <Form.Label>Message</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              placeholder="Type your message..."
            />
            {["checkbox"].map((type) => (
              <div key={`default-${type}`} className="mt-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label="I accept the terms"
                />
              </div>
            ))}
          </Form>
          <ActionButton
              variant="none"
              text="Submit"
              style={{ backgroundColor: "var(--blue-magenta)" }}
              className="rounded-1 text-white w-100 mt-4"
              size="lg"
            />
        </div>
      </Container>
    </>
  );
};

export default Contact;
