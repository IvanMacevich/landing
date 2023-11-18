import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Navbar from "components/navbar.component";
import { timberData } from "helpers/timber.data";
import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { useParams } from "react-router-dom";

const TimberDetail = () => {
	const { id } = useParams();
	const cabinId = id ? parseInt(id, 10) : 0;
	const cabin = timberData.find((x) => x.id === cabinId);
	const cabinName = cabin ? cabin.name : null;
	const [mainPhoto, setMainPhoto] = useState(`${cabinName}/1.jpg`);
	console.log(mainPhoto);
	const handleThumbnailClick = (index: number) => {
		setMainPhoto(`${cabinName}/${index}.jpg`);
	};

	if (!cabin) {
		return <div>Cabin not found</div>;
	}
	const imgs = Array.from({ length: cabin.amount_of_images });
	console.log(id);
	return (
		<Box>
			<Navbar />
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					padding: "10px 50px"
				}}>
				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<Box>
						<img
							style={{ width: "800px", height: "500px"}}
							src={require(`../assets/Timber/${mainPhoto}`)}
							alt="house"
						/>
					</Box>
					<Box
						sx={{
							display: "grid",
							gridTemplateColumns:'1fr 1fr 1fr 1fr',
							gap: "10px",
							marginTop: "10px",
							border: "1px solid #58896f",
							padding: "10px",
							borderRadius: "5px",
							backgroundColor: "#c6e8e8"
						}}>
						{imgs.map((_, index) => (
							<Box
								sx={{
									width: "200px",
									"&:hover": {
										opacity: "80%"
									}
								}}
								key={index+1}>
								<Box
									onClick={() => handleThumbnailClick(index+1)}
									style={{ cursor: "pointer" }}>
									<img
										key={index}
										src={require(`../assets/Timber/${cabin.name}/${
											index + 1
										}.jpg`)}
										alt={`${cabin.name}${index + 1}`}
										style={{ width: "100%", marginBottom: "5px" }}
									/>
								</Box>
							</Box>
						))}
					</Box>
				</Box>
				<Box
					sx={{
						justifyContent: "center",
						width: "40%" // Adjust the width as needed
					}}>
					<Typography variant="h5">{cabin.name}</Typography>
					<Typography>Size: {cabin.sq}</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default TimberDetail;