import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import "./styles.scss";

const MainText = () => {
	const [fade, setFade] = useState("fade-out");

	useEffect(() => {
		const timeout = setTimeout(() => {
			setFade("fade-in");
		}, 500);

		return () => clearInterval(timeout);
	}, [fade]);

	return (
		<div
			className={fade}
			style={{
				textAlign: "center",
				height: "100vh",
				width: "100vw",
				position: "Absolute"
			}}
		>
			<Typography
				variant={"h2"}
				style={{
					color: "white",
					marginTop: "35vh",
					fontFamily: "Zen Kurenaido, sans-serif"
				}}
			>
				Find yourself...
			</Typography>
			<Typography
				variant={"h6"}
				style={{
					color: "white",
					marginTop: "2vh",
					fontFamily: "Zen Kurenaido, sans-serif"
				}}
			>
				...visiting the most pittoresque
				<br /> Portuguese village
			</Typography>
		</div>
	);
};

export default MainText;
