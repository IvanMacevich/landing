import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Stack, Typography } from "@mui/material";
import Navbar from "components/navbar.component";
import { logCabinsDate } from "helpers/log-cabins.data";
import { FullScreenSlider } from "components/full-screen-slider";
import Carousel from "react-material-ui-carousel";
import { residential } from "helpers/residentialData";
import Footer from "components/footer.component";

export const ResCabinDetail = () => {
	const { id } = useParams();
	const cabinId = id ? parseInt(id, 10) : 0;
	const cabin = residential.find((x) => x.id === cabinId);
	const cabinImg = cabin ? cabin.img1 : null;
	const [mainPhoto, setMainPhoto] = useState(cabinImg);
	const [mainPhotoIndex, setMainPhotoIndex] = useState(0);

	const [isModalOpen, setIsModalOpen] = useState(false); // Step 2

	if (!cabin) {
		return <div>Cabin not found</div>;
	}
	console.log(cabin);
	const handleThumbnailClick = (img: string, index: number) => {
		setMainPhoto(img);
		setMainPhotoIndex(index);
		openModal();
	};

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<Box>
			<Navbar />
			<Typography
				variant="h5"
				sx={{
					maxWidth: "1200px",
					margin: "30px auto",
					textAlign: "left",
					fontWeight: "800",
					fontSize: "30px"
				}}>
				{cabin.name}
			</Typography>
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: { lg:'1fr 1fr', md: "1fr", xs: "1fr", sm:'1fr' },
					gap: "30px",
					justifyContent: "space-between",
					padding: "20px 50px"
				}}>
				<Carousel
					sx={{
						margin: "10px auto",
						width: { md: "700px", xs: "90%" },
						height: { md: "400px", xs: "250px" }
					}}
					autoPlay={true}
					navButtonsAlwaysVisible>
					{[cabin.img1, cabin.img2, cabin.img3].map(
						(cabinName: string, index) => (
							<Box key={index}>
								<img
									style={{ width: "90%", height: "400px", cursor: "pointer" }}
									src={require(`../assets/Log Cabins/${cabinName}`)}
									alt={`${cabin.name}${index + 1}`}
									onClick={() => handleThumbnailClick(cabinName, index)}
								/>
							</Box>
						)
					)}
				</Carousel>
				<Box
					sx={{
						marginBottom: "30px",
						border: "1px solid #d4d4d4",
						borderRadius: "10px",
						marginTop: "10px",
						maxWidth: "1200px",
						margin: "10px auto",
						paddingBottom: "10px",
						display: "grid",
						gridTemplateColumns: { md: "1fr", xs: "1fr" }
					}}>
					<p
						style={{
							display: "flex",
							alignItems: "center",
							gap: "10px",
							marginLeft: "10px",
							paddingBottom: "10px",
							borderBottom: "1px solid #d4d4d4"
						}}>
						<img
							src={require("../assets/svg/window.png")}
							width="30px"
							alt="Floor Icon"
						/>
						Windows: {cabin.windows}
					</p>
					<p
						style={{
							display: "flex",
							alignItems: "center",
							gap: "10px",
							marginLeft: "10px",
							paddingBottom: "10px",
							borderBottom: "1px solid #d4d4d4"
						}}>
						<img
							src={require("../assets/svg/door.png")}
							width="30px"
							alt="Terrace Icon"
						/>
						Door: {cabin.doors}
					</p>
					<p
						style={{
							display: "flex",
							alignItems: "center",
							gap: "10px",
							marginLeft: "10px",
							paddingBottom: "10px",
							borderBottom: "1px solid #d4d4d4"
						}}>
						<img
							src={require("../assets/svg/wall_thick.png")}
							width="30px"
							alt="Bathroom Icon"
						/>
						Wall thickness: {cabin.wall_sickness}
					</p>
					<p
						style={{
							display: "flex",
							alignItems: "center",
							gap: "10px",
							marginLeft: "10px",
							paddingBottom: "10px",
							borderBottom: "1px solid #d4d4d4"
						}}>
						<img
							src={require("../assets/svg/measure.png")}
							width="30px"
							alt="Dimensions Icon"
						/>
						Dimensions: {cabin.size}
					</p>
					<p
						style={{
							display: "flex",
							alignItems: "center",
							gap: "10px",
							marginLeft: "10px",
							paddingBottom: "10px",
							borderBottom: "1px solid #d4d4d4"
						}}>
						<img
							src={require("../assets/svg/double-bed.png")}
							width="30px"
							alt="Bedroom Icon"
						/>
						Bedrooms: {cabin.bedrooms}
					</p>
					<p
						style={{
							display: "flex",
							alignItems: "center",
							gap: "10px",
							marginLeft: "10px",
							paddingBottom: "10px",
							borderBottom: "1px solid #d4d4d4"
						}}>
						<img
							src={require("../assets/svg/garage.png")}
							width="30px"
							alt="Garage Icon"
						/>
						Floor Bearers: {cabin.floor_bearers}
					</p>
					<p
						style={{
							display: "flex",
							alignItems: "center",
							gap: "10px",
							marginLeft: "10px",
							paddingBottom: "10px",
							borderBottom: "1px solid #d4d4d4"
						}}>
						<img
							src={require("../assets/svg/hand.png")}
							width="30px"
							alt="Style Icon"
						/>
						Floor Roof Boards: {cabin.floor_roof_boards}
					</p>
				</Box>
			</Box>

			<Container
				sx={{
					display: "flex",
					alignItems: "center",
					marginBottom: { xs: "60px" },
					marginTop: "50px"
				}}>
				<Stack>
					<Typography
						variant="h3"
						sx={{ fontWeight: "600" }}>
						Log Production
					</Typography>
					<Typography variant="h6">
						For square log production we use only the best quality especially
						chosen wood to be able to offer finest quality with highest
						standards. Timber is a solid, warm, strong but yet light and
						attractive building material that creates comfort and good
						atmosphere. Wood has a number of qualities with positive effect on
						human body which can be experienced while walking in a forest as
						well as living in a cozy log home. Everyone feels relaxed and fresh
						in these places. After a good night’s sleep in a log home one feels
						energetic and vigorous – ready for a new active day. A log wall has
						an intensive positive effect during several decades by promoting
						blood circulation and cardiac activity, enhancing the immune system,
						reliving chronic diseases, destroying bacteria and by providing
						energy and vitality. For better energy efficiency a log home can be
						additionally insulated. The thermal conductivity of timber is ca 12
						times lower than of concrete. Timber works as a regulator of the
						inner climate, by saving excess air humidity and releasing it back
						into dry air as required. A log house has always a pleasant internal
						atmosphere and these qualities must be taken into account when
						insulating log walls. The qualities of a log house are maintained
						best if another organic material or rock wool is used by insulating.
					</Typography>
				</Stack>
			</Container>
			{/* Step 4: Add the FullScreenSlider component */}
			<FullScreenSlider
				open={isModalOpen}
				onClose={closeModal}
				images={[cabin.img1, cabin.img2, cabin.img3]}
				index={mainPhotoIndex}
				name="Log Cabins" // Set the initial index as needed
			/>

			<Footer />
		</Box>
	);
};
