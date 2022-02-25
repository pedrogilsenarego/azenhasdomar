import React from "react";
import "./styles.scss";
import { Typography, Grid } from "@mui/material";

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
			<div className="images-container-2">
				<img
					className="waves-image"
					alt=""
					src="https://images.unsplash.com/photo-1616141893496-fbc65370493e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmlnJTIwd2F2ZXxlbnwwfHwwfHw%3D&w=1000&q=80"
				/>
				<svg fill="hotPink" viewBox="0 0 1 1">
					<defs>
						<clipPath clipPathUnits="ObjectBoundingBox" id="wavesMask">
							<path d="M84.2163432,86.4589839 C75.2720219,94.8564365 63.2366828,100 50,100 C22.3857625,100 0,77.6142375 0,50 C0,22.3857625 22.3857625,1.13686838e-13 50,1.13686838e-13 C63.1983248,1.13686838e-13 75.2022585,5.11379605 84.1385074,13.4680944 L76.3546493,21.2519525 C69.4138659,14.8856019 60.1606984,11 50,11 C28.4608948,11 11,28.4608948 11,50 C11,71.5391052 28.4608948,89 50,89 C60.1990671,89 69.4837363,85.0849972 76.4331793,78.67582 L84.2163432,86.4589839 L84.2163432,86.4589839 Z" />
						</clipPath>
					</defs>
				</svg>
			</div>
		</div>
	);
};

export default Second;
