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

const Image2 =
	"https://www.viajantecomum.com/wp-content/uploads/2016/09/palacio-de-sintra.jpg";

const Image3 =
	"https://lifecooler.com/files/registos/imagens/381332/331343.jpg";

const Component0 = () => {
	return (
		<div style={{ position: "absolute", marginTop: "110vh", width: "100vw" }}>
			<Box
				style={{
					backgroundColor: "white",

					width: "96vw",
					padding: "20px",
					marginLeft: "2vw"
				}}
			>
				<Grid container>
					<Grid item xs={4} style={{ overflow: "hidden" }}>
						<Card sx={{ borderRadius: "0px" }}>
							<CardMedia component="img" height="140" image={Image1} alt="" />
							<CardContent>
								<Typography gutterBottom variant="h5">
									Azenhas do Mar
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
							<CardMedia component="img" height="140" image={Image3} alt="" />
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Sea Food
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
							<CardMedia component="img" height="140" image={Image2} alt="" />
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Sintra
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
