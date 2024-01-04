import React from "react";
import "./Project.css";
// import image from '../../assets/webdev4.jpeg'
import Card from "../ui/Card";
import data from "./data";

const Projects = () => {
  return (
    <section name="projectSection" className="projectSection">
      <h2>Projects👨🏻‍💻</h2>
      <div className="projetsContainer">
        {data.map((dataElement, ind) => (
          <Card
            imgUrl={dataElement.imgUrl}
            key={ind}
            title={dataElement.title}
            alt={dataElement.alt}
            content={dataElement.content}
            repoLink={dataElement.repoLink}
            viewLink={dataElement.viewLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
