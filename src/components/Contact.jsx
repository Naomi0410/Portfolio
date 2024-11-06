import Texts from "./Texts";
import Headings from "./Headings";
import { Container, Form } from "react-bootstrap";
import ActionButton from "./ActionButton";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { firstName, lastName, email, phoneNumber, message } = data;

    const formData = new FormData();
    formData.append("name", `${firstName} ${lastName}`);
    formData.append("email", email);
    formData.append("phone", phoneNumber);
    formData.append("message", message);

    const response = await fetch("https://formspree.io/f/mjkvwwkj", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      console.log("Form submitted successfully");
      document.querySelectorAll("input, textarea").forEach((field) => {
        field.value = "";
      });
      navigate("/#hero"); // Redirect to home section
    } else {
      console.error("Form submission failed");
      document.querySelectorAll("input, textarea").forEach((field) => {
        field.value = "";
      });
      navigate("/#hero"); // Redirect to home section
    }
  };

  return (
    <>
      <Container fluid="xl" className="px-3 py-5">
        <div className="text-center">
          <Texts text="Get In Touch" className="fw-bold" />
          <Headings text="Contact me" />
        </div>
        <div className="contactForm mx-auto">
          <Form
            className="mx-auto form contactForm"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="d-flex justify-content-between">
              <div style={{ width: "45%" }}>
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                />
                {errors.firstName && (
                  <Form.Text className="text-danger">
                    {errors.firstName.message}
                  </Form.Text>
                )}
              </div>
              <div style={{ width: "45%" }}>
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                />
                {errors.lastName && (
                  <Form.Text className="text-danger">
                    {errors.lastName.message}
                  </Form.Text>
                )}
              </div>
            </div>
            <div className="d-flex justify-content-between my-3">
              <div style={{ width: "45%" }}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <Form.Text className="text-danger">
                    {errors.email.message}
                  </Form.Text>
                )}
              </div>
              <div style={{ width: "45%" }}>
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  type="tel"
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                  })}
                />
                {errors.phoneNumber && (
                  <Form.Text className="text-danger">
                    {errors.phoneNumber.message}
                  </Form.Text>
                )}
              </div>
            </div>
            <Form.Label>Message</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              placeholder="Type your message..."
              {...register("message", {
                required: "Message is required",
              })}
            />
            {errors.message && (
              <Form.Text className="text-danger">
                {errors.message.message}
              </Form.Text>
            )}

            {["checkbox"].map((type) => (
              <div key={`default-${type}`} className="mt-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label="I accept the terms"
                  {...register("terms", {
                    required: "You must accept the terms",
                  })}
                />
                {errors.terms && (
                  <Form.Text className="text-danger">
                    {errors.terms.message || "Please accept the terms"}
                  </Form.Text>
                )}
              </div>
            ))}
            <ActionButton
              variant="none"
              text="Submit"
              style={{ backgroundColor: "var(--blue-magenta)" }}
              className="rounded-1 text-white w-100 mt-4"
              size="lg"
            />
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Contact;
