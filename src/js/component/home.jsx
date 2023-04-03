import React, { useState, useEffect, useCallback }  from "react";
import Light from "./light.jsx";

//include images into your bundle

//create your first component
const Home = () => {
	let [pickColor, setPickColor] = useState("");

	useEffect(() => {
	  const interval = setInterval(() => {
		setPickColor((prevColor) => {
		  let colorPicker = ["red", "yellow", "green"];
		  const newPickColor =
			colorPicker[Math.floor(Math.random() * colorPicker.length)];
		  if (prevColor === newPickColor) {
			return pickColor; // keep the current color
		  } else {
			return newPickColor; // update to a new color
		  }
		});
	  }, 1000);
  
	  return () => clearInterval(interval);
	}, [pickColor]);
  
	const setGlow = useCallback(
	  (light) => {
		if (pickColor === light) {
		  return "glow";
		} else {
		  return "";
		}
	  },
	  [pickColor]
	);
  
	return (
	  <div className="container mt-0">
		<h1 className="justify-content-center mx-auto mb-0" id="rope"></h1>
		<Light Glow={setGlow} />
	  </div>
	);
  };

export default Home;
