import React from "react";
import MainText from "./MainText";
import Component0 from "./Component0";
import "./styles.scss";

const mainImage =
	"https://images.squarespace-cdn.com/content/v1/60d9cb21964164103233a604/1624892482911-M4ZSAKO67TYR87FSWXGS/polina-kuzovkova-7ZsAESWyF28-unsplash.jpg?format=2500w";

const HomePage = () => {
	return (
		<div>
			<MainText />
			<Component0 />
			<img style={{ width: "100vw" }} src={mainImage} alt="mainImage" />
		</div>
	);
};

export default HomePage;
