import React from "react";
import { Typography, Grid } from "@mui/material";

const Header = () => {
	return (
		<div
			style={{
				textAlign: "center",
				height: "100vh",
				width: "100vw",
				marginTop: "20px",
				position: "Absolute"
			}}
		>
			<Grid container>
				<Grid item xs={4.5}></Grid>
				<Grid item xs={1}>
					<Typography style={{ fontSize: "18px" }}>Eat</Typography>
				</Grid>
				<Grid item xs={1}>
					<Typography style={{ fontSize: "18px" }}>Sleep</Typography>
				</Grid>
				<Grid item xs={1}>
					<Typography style={{ fontSize: "18px" }}>Visit</Typography>
				</Grid>
				<Grid item xs={4.5}></Grid>
			</Grid>
		</div>
	);
};

export default Header;
