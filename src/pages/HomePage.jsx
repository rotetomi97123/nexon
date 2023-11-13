import React from "react";
import jsonData from "../components/data.json";
import "../global.scss";

const HomePage = () => {
  return (
    <div className="Wrapper">
      <div className="content">
        <div className="imgWrapper">
          <img src="https://i.ibb.co/p0yDJqX/header-Image2022.png" />
        </div>
        <div className="coathanger">
          <img src="https://i.ibb.co/g6B5dQK/coathanger.png" />
          <div className="sweaterWrapper">
            {jsonData.sweaters.map((item, index) => {
              return (
                <div key={index} className="sweater">
                  <img src={item.img} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
