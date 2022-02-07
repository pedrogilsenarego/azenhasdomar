import React from "react";
import {
	Box,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	Button
} from "@mui/material";

const Image1 =
	"https://windows10spotlight.com/wp-content/uploads/2021/10/8c9a96d1134960996924700f5741fe5c.jpg";

const Component0 = () => {
	return (
		<div style={{ position: "absolute", marginTop: "110vh", width: "100vw" }}>
			<Card
				sx={{ maxWidth: 345 }}
				style={{ position: "absolute", marginTop: "10vh", marginLeft: "40vw" }}
			>
				<CardMedia
					component="img"
					height="140"
					image={Image1}
					alt="green iguana"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Lizard
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Lizards are a widespread group of squamate reptiles, with over 6,000
						species, ranging across all continents except Antarctica
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small">Share</Button>
					<Button size="small">Learn More</Button>
				</CardActions>
			</Card>
			<Box
				style={{
					backgroundColor: "lightGrey",
					height: "30vh",
					width: "50vw",

					marginLeft: "5vw"
				}}
			></Box>
		</div>
	);
};

export default Component0;
