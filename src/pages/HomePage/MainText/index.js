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
			<Typography variant={"h3"} style={{ color: "white", marginTop: "30vh" }}>
				Find yourself <br />
				visiting the most pittoresque
				<br /> Portuguese village
			</Typography>
		</div>
	);
};

export default MainText;
