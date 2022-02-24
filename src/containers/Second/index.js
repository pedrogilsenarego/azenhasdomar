import React from "react";
import "./styles.scss";
import { Typography } from "@mui/material";

const Second = () => {
	return (
		<div className="container2">
			<div className="text-container-2">
				<Typography className="txt" variant={"subheader2"}>
					The house over the ocean
				</Typography>
				<Typography
					className="txt"
					variant={"h4"}
					style={{ fontWeight: "600" }}
				>
					A rustic house where you can relax and enjoy a familiar environment
				</Typography>
				<Typography className="txt" style={{ fontSize: "12px" }}>
					Breed, Listen, Feel and Taste a new experience...
				</Typography>
			</div>
		</div>
	);
};

export default Second;
