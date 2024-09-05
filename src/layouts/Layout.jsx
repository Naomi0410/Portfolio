import { logo } from "@/assets";
import { Nav } from "@/components";
import { Container, Image } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <footer style={{ backgroundColor: "var(--bg-pale-blue)" }}>
        <Container fluid="xl" className="px-3 py-5">
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div>
              <Image src={logo} width="30px" alt="logo" />
              <span
                style={{ fontWeight: "bold", color: "var(--bg-arsenic-100)" }}
              >
                TemiDev,
              </span>
            </div>
            <div className="d-flex gap-5">
              <a href="#hero">Home</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#about">About me</a>
              <a href="#testimonials">Testimonials</a>
            </div>
            <div className="d-flex gap-3">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedin />
            </div>
          </div>
          <hr/>
          <div className="d-flex justify-content-between mt-5">
            <p>Made by Temitope</p>
            <div className="d-flex gap-3">
              <p>Privacy policy</p>
              <p>Terms of service</p>
              <p>Cookies settings</p>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Layout;
