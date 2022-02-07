import React from "react";
import {
	Box,
	Grid,
	CardMedia,
	Card,
	CardContent,
	Typography
} from "@mui/material";

const Image1 =
	"https://windows10spotlight.com/wp-content/uploads/2021/10/8c9a96d1134960996924700f5741fe5c.jpg";

const Component0 = () => {
	return (
		<div style={{ position: "absolute", marginTop: "110vh", width: "100vw" }}>
			<Box
				style={{
					backgroundColor: "#00000066",

					width: "96vw",
					padding: "20px",
					marginLeft: "2vw",
					borderRadius: "8px"
				}}
			>
				<Grid container>
					<Grid item xs={4} style={{ overflow: "hidden" }}>
						<Card sx={{ borderRadius: "0px" }}>
							<CardMedia component="img" height="140" image={Image1} alt="" />
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Lizard
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={4} style={{ overflow: "hidden" }}>
						<Card sx={{ borderRadius: "0px" }}>
							<CardMedia component="img" height="140" image={Image1} alt="" />
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Lizard
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={4} style={{ overflow: "hidden" }}>
						<Card sx={{ borderRadius: "0px" }}>
							<CardMedia component="img" height="140" image={Image1} alt="" />
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Lizard
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
};

export default Component0;
