import { Container, Image } from "react-bootstrap";
import { logo } from "@/assets";
import ActionButton from "./ActionButton";
import { useLocation } from "react-router-dom";


const Nav = () => {
  const location = useLocation();

  return (
    <header>
      <Container
        fluid="xl"
        className="p-3 d-flex align-items-center justify-content-between"
      >
        <div>
          <Image src={logo} width="30px" alt="logo" />
          <span style={{ fontWeight: "bold", color: "var(--bg-arsenic-100)" }}>
            TemiDev,
          </span>
        </div>
        <div className="d-md-flex gap-5 d-none">
          <a
            href="#hero"
            className={
              location.hash === "#hero" ? "active-link" : "inactive-link"
            }
          >
            Home
          </a>
          <a href="#portfolio"  className={
              location.hash === "#portfolio" ? "active-link" : "inactive-link"
            }>Portfolio</a>
          <a href="#about"  className={
              location.hash === "#about" ? "active-link" : "inactive-link"
            }>About me</a>
          <a href="#testimonials"  className={
              location.hash === "#testimonials" ? "active-link" : "inactive-link"
            }>Testimonials</a>
        </div>
        <a href="#contact">
          <ActionButton
            variant="none"
            size="md"
            text="Contact Me"
            style={{ color: "var(--blue-magenta)" }}
            className="navButton rounded-1"
          />
        </a>
      </Container>
    </header>
  );
};

export default Nav;
