import React from "react";
import { useEffect, useRef, useState } from "react";
import Item from "./Item";
import Navbar from "./Navbar";

const Dashboard = () => {
  const [detail, setDetail] = useState({
    wind_dir: "",
    wind_speed: "",
    country: "",
    region: "",
    update_time: "",
    temp_c: "",
  });

  const [city, setCity] = useState("london");

  const getdata = async (city) => {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}%2C-0.13`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "d1b0ff6210msh667e78eebf1764ep1db157jsn17a753c2129b",
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      },
    };

    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    setDetail({
        wind_dir: result.current.wind_dir,
      wind_speed: result.current.wind_kph,
      country: result.location.country,
      region: result.location.region,
      update_time: result.current.last_updated,
      temp_c: result.current.temp_c,
    });
  };

  const handleClick = (c) => {
    setCity(c);
    getdata(c);
  };

  useEffect(() => {
    getdata(city);
  }, []);

  return (
    <div>
      <Navbar handleClick={handleClick} />
      <Item city={city} detail={detail} />
    </div>
  );
};

export default Dashboard;
