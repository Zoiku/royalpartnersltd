import "../styles/Nav.css";
import Section from "../components/Section";
import Button from "./Button";

const Nav = () => {
  return (
    <nav>
      <Section innerClassName="nav">
        <div className="nav-logo">Royal Partners Ltd.</div>
        <div>
          <ul className="nav-links"></ul>
        </div>
        <div>
          <Button label={"Let's Talk"} styles={"110"} />
        </div>
      </Section>
    </nav>
  );
};

export default Nav;
