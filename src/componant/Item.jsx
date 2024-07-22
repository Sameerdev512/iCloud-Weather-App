import React, { useState } from "react";
import '../../src/scss/style.css'

const Item = ({city,detail }) => {

  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let AmPm = h>12?"PM":"PM";

  let now = new Date().toLocaleDateString("en-us", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container-cu">
      <div className="header ">{city}</div>
      <div className="date-time">{now}</div>
      <div>{`${h} : ${m} : ${AmPm}`}</div>
      <div className="weather-status">
        <i className="fa-solid fa-cloud "></i> Clear{" "}
      </div>
      <div className="temp">
        {detail.temp_c}&deg;<span style={{ fontSize: "4rem" }}>C</span>
      </div>
      <div className="info">
        <div className="left">
          <div>Wind km/h : </div>
          <div>Wind dirc &ensp; : </div>
          <div>Country &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </div>
          <div>Region&ensp;&ensp;&ensp;&ensp;: </div>
          <div>Last updated :&nbsp;</div>
        </div>
        <div className="right">
          <div>{detail.wind_speed ? detail.wind_speed : "Nan"}</div>
          <div>{detail.wind_dir ? detail.wind_dir : "Nan"}</div>
          <div>{detail.country ? detail.country : "Nan"}</div>
          <div>{detail.region ? detail.region : "Nan"}</div>
          <div>{detail.update_time ? detail.update_time : "Nan"}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
