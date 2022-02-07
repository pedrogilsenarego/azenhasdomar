import React from "react";
import { Typography } from "@mui/material";

const MainText = () => {
	return (
		<div
			style={{
				textAlign: "center",
				height: "100vh",
				width: "100vw",
				position: "Absolute"
			}}
		>
			<Typography variant={"h2"} style={{ color: "white", marginTop: "35vh" }}>
				Find yourself
			</Typography>
			<Typography variant={"h6"} style={{ color: "white", marginTop: "2vh" }}>
				visiting the most pittoresque
				<br /> Portuguese village
			</Typography>
		</div>
	);
};

export default MainText;
