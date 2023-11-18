import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Box, CardMedia, Grid, Typography } from "@mui/material";
import Navbar from "components/navbar.component";
import { logCabinsDate } from "helpers/log-cabins.data";

export const LogCabinDetail = () => {
	const { id } = useParams();
	const cabinId = id ? parseInt(id, 10) : 0;
	const cabin = logCabinsDate.find((x) => x.id === cabinId);
	const cabinImg = cabin ? cabin.img1 : null;
	const [mainPhoto, setMainPhoto] = useState(cabinImg);
	if (!cabin) {
		return <div>Cabin not found</div>;
	}
	const handleThumbnailClick = (img: string) => {
		setMainPhoto(img);
	};

	return (
		<Box>
			<Navbar />
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					padding: "20px 50px",
				}}>
				<Box sx={{ display: "flex", flexDirection: "column", }}>
					<Box>
						<img
							style={{ height: "300px" }}
							src={require(`../assets/Log Cabins/${mainPhoto}`)}
							alt="house"
						/>
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							gap: "10px",
							marginTop: "10px",
							border: "1px solid #58896f",
							padding: "10px",
							borderRadius: "5px",
							backgroundColor: "#c6e8e8"
						}}>
						{[cabin.img1, cabin.img2, cabin.img3].map(
							(imgKey: string, index) => (
								<Box
									sx={{
										width: "200px",
										"&:hover": {
											opacity: "80%"
										}
									}}
									key={index}>
									<Box
										onClick={() => handleThumbnailClick(imgKey)}
										style={{ cursor: "pointer" }}>
										<img
											alt={cabin.name}
											style={{ height: "100px", width: "150px" }}
											src={require(`../assets/Log Cabins/${imgKey}`)}
										/>
									</Box>
								</Box>
							)
						)}
					</Box>
				</Box>
				<Box sx={{ justifyContent: "center", width: "100%" }}>
					<Typography variant="h5">{cabin.name}</Typography>
					<Typography>fewdlwqdqk</Typography>
					{/* Add more details or text as needed */}
				</Box>
			</Box>
		</Box>
	);
};
