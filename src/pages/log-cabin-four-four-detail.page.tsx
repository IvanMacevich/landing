import { Typography, Button, Modal } from "@mui/material";
import { Box, display, textAlign } from "@mui/system";
import Footer from "components/footer.component";
import { FullScreenSlider } from "components/full-screen-slider";
import Navbar from "components/navbar.component";
import { logCabinFourFourData } from "helpers/logFourFourData";
import { timberData } from "helpers/timber.data";
import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { useParams } from "react-router-dom";

const TimberDetail = () => {
	const { id } = useParams();
	const cabinId = id ? parseInt(id, 10) : 0;
	const cabin = logCabinFourFourData.find((x) => x.id === cabinId);
	const cabinName = cabin ? cabin.name : null;
	const [mainPhotoIndex, setMainPhotoIndex] = useState(0);
	const [isFullScreenOpen, setFullScreenOpen] = useState(false);
	let clickedInd = 1;

	if (!cabin) {
		return <div>Cabin not found</div>;
	}
	const onButtonClick = () => {
		const pdfUrl = require("../assets/Catalogue 34mm PDF.pdf");
		const link = document.createElement("a");
		link.href = pdfUrl;
		link.download = "Catalogue 34mm PDF.pdf"; // specify the filename
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};
	const handleThumbnailClick = (index: any) => {
		clickedInd = index;
		setMainPhotoIndex(index);
		handleFullScreenOpen(); // Open full screen slider when clicking a thumbnail
	};

	const handleFullScreenOpen = () => {
		setFullScreenOpen(true);
	};

	const handleFullScreenClose = () => {
		setFullScreenOpen(false);
	};

	const imgs = Array.from({ length: cabin.amount_of_images }).map(
		(_, index) => `${cabinName}/${index + 1}.jpg`
	);

	return (
		<Box>
			<Navbar />
			<Box
				sx={{
					maxWidth: "1200px",
					margin: "10px auto 0px auto",
					textAlign: "right"
				}}>
				<Button
					onClick={onButtonClick}
					sx={{
						backgroundColor: "#517F83",
						"&:hover": {
							backgroundColor: "#171219"
						}
					}}>
					Download Catalogue
				</Button>
			</Box>
			<Typography
				variant="h5"
				sx={{
					maxWidth: "1200px",
					margin: "10px auto",
					textAlign: "left",
					fontWeight: "800",
					fontSize: "30px"
				}}>
				{cabin.name}
			</Typography>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center", // Center the images and slider
					alignItems: "center", // Center the images and slider
					flexDirection: "column",
					padding: "10px 50px",
					marginBottom: "70px"
				}}>
				<Carousel
					className="carousel"
					sx={{
						width: { md: "800px", xs: "100%" },
						height: { md: "500px", xs: "250px" }
					}}
					index={mainPhotoIndex}
					autoPlay={true}
					navButtonsAlwaysVisible>
					{imgs.map((_, index) => (
						<Box key={index}>
							<Box
								component="img"
								sx={{
									width: { md: "800px", xs: "100%" },
									height: { md: "500px", xs: "auto" },
									cursor: "pointer"
								}}
								src={require(`../assets/Log Cabins 44/${cabinName}/${
									index + 1
								}.jpg`)}
								alt={`${cabin.name}${index + 1}`}
								onClick={() => handleThumbnailClick(index)}
							/>
						</Box>
					))}
				</Carousel>

				<FullScreenSlider
					open={isFullScreenOpen}
					onClose={handleFullScreenClose}
					images={imgs}
					index={mainPhotoIndex}
					name="Log Cabins 44"
				/>
			</Box>

			<Typography sx={{ maxWidth: "1200px", margin: "0 auto", marginBottom:'90px'}}>
				{cabin.descripton}
			</Typography>

			<Footer />
		</Box>
	);
};

export default TimberDetail;
