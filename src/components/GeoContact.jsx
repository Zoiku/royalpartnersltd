import "../styles/GeoContact.css";
import Map from "./Map";
import Contact from "./Contact";
import Section from "./Section";

const GeoContact = () => {
  return (
    <div className="geo-contact">
      <Map />
      <div className="geo-contact-contact-container">
        <Section>
          <Contact />
        </Section>
      </div>
    </div>
  );
};

export default GeoContact;
