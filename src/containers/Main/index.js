import React from "react";
import MainText from "../../containers/Main/MainText";

const MAIN_IMAGE =
	"https://images.squarespace-cdn.com/content/v1/60d9cb21964164103233a604/1624892482911-M4ZSAKO67TYR87FSWXGS/polina-kuzovkova-7ZsAESWyF28-unsplash.jpg?format=2500w";

const Main = () => {
	return (
		<div>
			<MainText />
			<img
				style={{ width: "100vw", height: "100vh" }}
				src={MAIN_IMAGE}
				alt="mainImage"
			/>
		</div>
	);
};

export default Main;
