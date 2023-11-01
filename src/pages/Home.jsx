import "../styles/Home.css";
import Section from "../components/Section";
import globe from "../assets/globe.png";
import collins from "../assets/collins.jpg";
import philip from "../assets/philip.jpg";
import arrowdownimage from "../assets/arrow-down.webp";
import Slider from "../components/Slider";
import { categories, choosingUs } from "../data/index";
import { useState } from "react";
import Collapse from "@mui/material/Collapse";

const LandingGridItem = (props) => (
  <div
    className={`landing-grid-item landing-grid-${props.gridArea} ${
      props.nopadding ? "no-padding" : ""
    }`}
  >
    {props.children}
  </div>
);

const GridCItem = (props) => (
  <div
    className="grid-c-item"
    style={{ background: props.background, color: props.color }}
  >
    {props.title}
  </div>
);

const CustomSection = (props) => (
  <Section innerClassName={"custom-home-section"}>
    <div className="custom-home-section-title">{props.title}</div>
    <div className={props.className}>{props.children}</div>
  </Section>
);

const ChooseUs = (props) => (
  <div className="choose-us">
    <div className="choose-us-image">
      <img src={props.img} alt="" />
    </div>
    <div className="choose-us-details">
      <div className="choose-us-title">{props.title}</div>
      <div className="choose-us-text">{props.text}</div>
    </div>
  </div>
);

const Member = (props) => (
  <div className="member">
    <div className="member-image">
      <img src={props.image} alt="" />
    </div>
    <div className="member-details">
      <div className="member-position">{props.position}</div>
      <div className="member-name">{props.name}</div>
    </div>
  </div>
);

const Home = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(null);
  const handleChangeActiveCategoryIndex = (index) => () => {
    if (index === activeCategoryIndex) {
      setActiveCategoryIndex(null);
    } else {
      setActiveCategoryIndex(index);
    }
  };

  return (
    <div className="homepage">
      <Section innerClassName={"landing-grid"}>
        <LandingGridItem gridArea={"a"}>
          <div>Royal</div>
          <div>Partners Ltd.</div>
          <div className="landing-grid-a-image">
            <img src={globe} alt="" />
          </div>
        </LandingGridItem>

        <LandingGridItem gridArea={"b"}></LandingGridItem>
        <LandingGridItem gridArea={"c"} nopadding>
          <Slider
            slides={categories.map((category) => (
              <GridCItem
                background={category.background}
                color={category.color}
                title={category.title}
              />
            ))}
          />
        </LandingGridItem>

        <LandingGridItem gridArea={"d"}>
          <div className="arrow-down-image">
            <img src={arrowdownimage} alt="" />
          </div>
        </LandingGridItem>
      </Section>

      <CustomSection title={"What We Do"} className={"categories"}>
        {categories.map((category, index) => (
          <div className="category" key={index}>
            <div
              onClick={handleChangeActiveCategoryIndex(index)}
              className="category-heading"
            >
              <div>{category.title}</div>
              <div>0{1 + index}</div>
            </div>
            <Collapse in={activeCategoryIndex === index}>
              <div className="category-more">
                <div className="category-body">{category.body}</div>
                <div className="category-more-link">
                  <span>Read more</span>
                </div>
              </div>
            </Collapse>
          </div>
        ))}
      </CustomSection>

      <CustomSection title={"Why Choose Us"}>
        <div className="choose-us-items">
          {choosingUs.map((reason) => (
            <ChooseUs
              title={reason.title}
              text={reason.text}
              img={reason.img}
            />
          ))}
        </div>
      </CustomSection>

      <CustomSection title={"Meet The Team"}>
        <div className="members">
          <Member
            image={collins}
            name={"Collins Kumah (GHA)"}
            position={"Co-Director"}
          />
          <Member
            image={philip}
            name={"Philip Scolavo (USA)"}
            position={"Co-Director"}
          />
        </div>
      </CustomSection>
    </div>
  );
};

export default Home;
