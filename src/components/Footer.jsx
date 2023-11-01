import "../styles/Footer.css";
import Section from "./Section";

const FooterSection = (props) => (
  <div className="footer-section">
    {props.title && <div className="footer-section-title">{props.title}</div>}
    {props.children}
  </div>
);

const Footer = () => {
  return (
    <footer>
      <Section innerClassName={"footer"}>
        <FooterSection>
          <div className="footer-logo">
            <div>Royal</div>
            <div>Partners Ltd.</div>
          </div>
        </FooterSection>

        <div className="flex-footer-sections">
          <FooterSection title={"Post Office"}>
            <ul>
              <li>
                <span>POB</span> <span>CT9598</span>
              </li>
              <li>
                <span>Cantoments-Accra</span>
              </li>
              <li>
                <span>Ghana</span>
              </li>
            </ul>
          </FooterSection>

          <FooterSection title={"Location"}>
            <ul>
              <li>
                <span>House No 62</span>
              </li>
              <li>
                <span>Swaniker Street</span>
              </li>
              <li>
                <span>Abelemkpe-Accra, Ghana</span>
              </li>
            </ul>
          </FooterSection>

          <FooterSection title={"Contact"}>
            <ul>
              <li>
                <span>Phone Mr Amegadzi +233242606254</span>
              </li>
              <li>
                <span>email-collins283@gmail.com</span>
              </li>
              <li>
                <span>email-trusco2018@gmail.com</span>
              </li>
            </ul>
          </FooterSection>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
