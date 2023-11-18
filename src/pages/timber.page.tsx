import { Box, Card, CardContent, CardMedia, Link, Typography } from "@mui/material";
import Navbar from "components/navbar.component";
import { timberData } from "helpers/timber.data";
import React from "react";

const TimberPage = () => {
	return (
		<Box>
			<Navbar />
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: { md: "1fr 1fr 1fr", sm: "1fr 1fr" },
					gap: "20px",
					padding: "20px 10px"
				}}>
				{timberData.map((cabin) => (
					<Link
						key={cabin.id}
						href={`/timber/${cabin.id}`}
						style={{ textDecoration: "none" }}>
						<Card>
							<CardMedia
								component="img"
								alt={cabin.name}
								height="200"
								image={require(`../assets/Timber/${cabin.name}/1.jpg`)}
							/>
							<CardContent>
								<Typography variant="h5">{cabin.name}</Typography>
							</CardContent>
						</Card>
					</Link>
				))}
			</Box>
		</Box>
	);
};
export default TimberPage;
