import { Typography, Button, Modal } from "@mui/material";
import { Box, display, textAlign } from "@mui/system";
import Footer from "components/footer.component";
import { FullScreenSlider } from "components/full-screen-slider";
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
	const [mainPhotoIndex, setMainPhotoIndex] = useState(0);
	const [isFullScreenOpen, setFullScreenOpen] = useState(false);
	let clickedInd = 1;

	if (!cabin) {
		return <div>Cabin not found</div>;
	}

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
			<Typography
				variant="h5"
				sx={{
					maxWidth: "1200px",
					margin: "10px auto",
					textAlign: "left",
					fontWeight: "800",
					fontSize: "30px"
				}}>
				{cabin.title}
			</Typography>
			<Box
				sx={{
					marginBottom: "30px",
					border: "1px solid #d4d4d4",
					borderRadius: "10px",
					marginTop: "10px",
					maxWidth: "1200px",
					margin: "10px auto",
					display: "grid",
					gridTemplateColumns: { md: "1fr 1fr 1fr 1fr", sm: "1f" }
				}}>
				<p
					style={{
						display: "flex",
						alignItems: "center",
						gap: "10px",
						marginLeft: "10px"
					}}>
					<img
						src={require("../assets/svg/floor.png")}
						width="30px"
						alt="Floor Icon"
					/>
					Floors: {cabin.floors}
				</p>
				<p
					style={{
						display: "flex",
						alignItems: "center",
						gap: "10px",
						marginLeft: "10px"
					}}>
					<img
						src={require("../assets/svg/terrace.png")}
						width="30px"
						alt="Terrace Icon"
					/>
					Terrace: {cabin.terrace}
				</p>
				<p
					style={{
						display: "flex",
						alignItems: "center",
						gap: "10px",
						marginLeft: "10px"
					}}>
					<img
						src={require("../assets/svg/bathroom.png")}
						width="30px"
						alt="Bathroom Icon"
					/>
					Bathrooms: {cabin.bathrooms}
				</p>
				<p
					style={{
						display: "flex",
						alignItems: "center",
						gap: "10px",
						marginLeft: "10px"
					}}>
					<img
						src={require("../assets/svg/measure.png")}
						width="30px"
						alt="Dimensions Icon"
					/>
					Dimensions: {cabin.dimensions}
				</p>
				<p
					style={{
						display: "flex",
						alignItems: "center",
						gap: "10px",
						marginLeft: "10px"
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
						marginLeft: "10px"
					}}>
					<img
						src={require("../assets/svg/garage.png")}
						width="30px"
						alt="Garage Icon"
					/>
					Garage: {cabin.garage}
				</p>
				<p
					style={{
						display: "flex",
						alignItems: "center",
						gap: "10px",
						marginLeft: "10px"
					}}>
					<img
						src={require("../assets/svg/hand.png")}
						width="30px"
						alt="Style Icon"
					/>
					Style: {cabin.style}
				</p>
			</Box>
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
						height: { md: "500px", xs: "200px" }
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
									height: { md: "500px", xs: "200px" },
									cursor: "pointer"
								}}
								src={require(`../assets/Timber/${cabinName}/${index + 1}.jpg`)}
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
					name="Timber"
				/>

				<h3 style={{ marginTop: "50px" }}>Recommended layout</h3>
				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: "1fr",
						gap: "20px",
						alignItems: "center",
						margin: "0 auto",
						padding: "20px",
						maxWidth: "1200px",
						marginBottom: "60px",
						"@media (min-width: 600px)": {
							gridTemplateColumns: "1fr 1fr"
						}
					}}>
					<Box>
						<Box
							component="img"
							src={require(`../assets/Timber/${cabin.name}/${
								cabin.amount_of_images + 1
							}.jpg`)}
							alt={cabin.name}
							width="100%"
							height="auto"
						/>
					</Box>
					{(parseFloat(cabin.floors) >= 1.5 || cabin.floors === "1+attic") && (
						<Box>
							<Box
								component="img"
								src={require(`../assets/Timber/${cabin.name}/${
									cabin.amount_of_images + 2
								}.jpg`)}
								alt={cabin.name}
								width="100%"
								height="auto"
							/>
						</Box>
					)}
				</Box>

				<Box
					sx={{
						width: "100%", // Adjust the width as needed
						marginTop: "20px", // Add some space between images and text
						backgroundColor: "#fff", // Add a light background color for better readability
						padding: "20px", // Add padding for better spacing
						borderRadius: "8px", // Add rounded corners for a modern look
						boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add a subtle box shadow
						maxWidth: "1200px"
					}}>
					<Typography variant="body1">
						In the 21st century, timber frame emerges as the most sustainable
						and technologically advanced form of construction. It ensures high
						quality, reduces overall build costs, and considerably shortens the
						build program. Cost reductions are achieved through:
					</Typography>

					<Box
						component="ul"
						sx={{
							marginTop: "10px",
							listStyleType: "none",
							textAlign: "left",
							display: "grid",
							padding: { xs: "0px" },
							gridTemplateColumns: { md: "1fr 1fr 1fr 1fr", sm: "1f" },
							gap: "10px"
						}}>
						<li
							style={{
								border: "1px solid black",
								backgroundColor: "#fff",
								padding: "10px",
								transition: "background 0.3s",
								cursor: "pointer",
								borderRadius: "5px"
							}}>
							- Improved productivity
						</li>
						<li
							style={{
								border: "1px solid black",
								backgroundColor: "#fff",
								padding: "10px",
								transition: "background 0.3s",
								cursor: "pointer",
								borderRadius: "5px"
							}}>
							- Reduced time on site
						</li>
						<li
							style={{
								border: "1px solid black",
								backgroundColor: "#fff",
								padding: "10px",
								transition: "background 0.3s",
								cursor: "pointer",
								borderRadius: "5px"
							}}>
							- Waste minimization
						</li>
						<li
							style={{
								border: "1px solid black",
								backgroundColor: "#fff",
								padding: "10px",
								transition: "background 0.3s",
								cursor: "pointer",
								borderRadius: "5px"
							}}>
							- Reduced defects
						</li>
						<li
							style={{
								border: "1px solid black",
								backgroundColor: "#fff",
								padding: "10px",
								transition: "background 0.3s",
								cursor: "pointer",
								borderRadius: "5px"
							}}>
							- Eco-friendly
						</li>
						<li
							style={{
								border: "1px solid black",
								backgroundColor: "#fff",
								padding: "10px",
								transition: "background 0.3s",
								cursor: "pointer",
								borderRadius: "5px"
							}}>
							- Unlimited design space
						</li>
						<li
							style={{
								border: "1px solid black",
								backgroundColor: "#fff",
								padding: "10px",
								transition: "background 0.3s",
								cursor: "pointer",
								borderRadius: "5px"
							}}>
							- Can be built on soil of any complexity
						</li>
						<li
							style={{
								border: "1px solid black",
								padding: "10px",
								transition: "background 0.3s",
								cursor: "pointer",
								backgroundColor: "#fff",
								borderRadius: "5px"
							}}>
							- Eco-friendly
						</li>
					</Box>
				</Box>

				<Box
					sx={{
						marginTop: "30px",
						display: "grid",
						gridTemplateColumns: { md: "1fr 1fr 1fr", sm: "1f" },
						gap: "80px",
						maxWidth: "1200px"
					}}>
					<Box
						sx={{
							backgroundColor: "#fff",
							border: "1px solid #acbcb347",
							borderRadius: "30px"
						}}>
						<h3>Basic kit</h3>
						<img
							src={require("../assets/Kits/1.png")}
							alt=""
						/>

						<h4>Frame structure:</h4>
						<p
							style={{
								borderBottom: "1px solid black",
								borderRadius: "8px",
								textAlign: "left",
								padding: "10px",
								margin: "10px"
							}}>
							Foundation binding – triple board 50х150mm.
							<br />
							External walls and gables: board 50x150 mm.
							<br /> Floor joists: 50x150 mm.
							<br />
							Attic floors: board 50x150 mm.
							<br /> Braces: board 25x100 mm.
							<br /> Interior partitions for load-bearing walls made of boards
							50x150 mm. Interior partitions made of boards 50x100 mm.
							<br /> External frame cladding: OSB 9 mm.
							<br />
						</p>
						<h4>Roof structure:</h4>
						<p
							style={{
								borderRadius: "8px",
								textAlign: "left",
								paddingLeft: "10px",
								borderBottom: "1px solid black",
								margin: "10px"
							}}>
							Rafters: board 50x150 mm, collar ties 50x150 mm.
							<br /> Waterproof membrane STROTEX 1300 Basic.
							<br /> Counter-crate 25x50 mm. Crate 25х100 mm.
							<br /> Roofing components: eaves strip, wind strip. Cladding on
							the roof crate: OSB 9 mm.
							<br /> Roof covering: two-layer shingle tiles.
							<br />
						</p>
						<h4>Insulation and steam-waterproofing:</h4>
						<p
							style={{
								borderBottom: "1px solid black",
								borderRadius: "8px",
								textAlign: "left",
								padding: "10px",
								margin: "10px"
							}}>
							Waterproof and windproof membrane on the façade.
						</p>
						<h4>Biochemical protection:</h4>
						<p
							style={{
								borderBottom: "1px solid black",
								borderRadius: "8px",
								textAlign: "left",
								padding: "10px",
								margin: "10px"
							}}>
							The entire timber frame is treated with the biochemical antiseptic
							composition.
						</p>
					</Box>
					<Box
						sx={{
							backgroundColor: "#fff",
							border: "1px solid #acbcb347",
							borderRadius: "30px"
						}}>
						<h3>Insulated kit</h3>
						<img
							src={require("../assets/Kits/2.png")}
							alt=""
						/>
						<h4>Frame structure:</h4>
						<p
							style={{
								borderBottom: "1px solid black",
								borderRadius: "8px",
								textAlign: "left",
								padding: "10px",
								margin: "10px"
							}}>
							Basic kit and rough floors: OSB 18 mm.
						</p>
						<h4>Roof structure:</h4>
						<p
							style={{
								borderBottom: "1px solid black",
								borderRadius: "8px",
								textAlign: "left",
								padding: "10px",
								margin: "10px"
							}}>
							Basic kit
						</p>
						<h4>Insulation and steam-waterproofing:</h4>
						<p
							style={{
								borderBottom: "1px solid black",
								borderRadius: "8px",
								textAlign: "left",
								padding: "10px",
								margin: "10px"
							}}>
							Floor insulation 150 mm.<br/> Insulation of external walls 150 mm.<br/>
							Soundproofing of interior partitions 100 mm.<br/> Roof insulation 150
							mm, pitched roof.<br/> Vapor barrier film for external walls.<br/>
							Waterproof and windproof film for interior partitions.<br/> Vapor
							barrier film for the attic floor.<br/> Vapor barrier film for rafters.<br/>
							Waterproof and windproof membrane on the façade.
						</p>
						<h4>Biochemical protection:</h4>
						<p
							style={{
								borderBottom: "1px solid black",
								borderRadius: "8px",
								textAlign: "left",
								padding: "10px",
								margin: "10px"
							}}>
							The entire timber frame is treated with the biochemical antiseptic
							composition.
						</p>
					</Box>
					<Box
						sx={{
							backgroundColor: "#fff",
							border: "1px solid #acbcb347",
							borderRadius: "30px"
						}}>
						<h3>Premium kit</h3>
						<img
							src={require("../assets/Kits/3.png")}
							alt=""
						/>
						<h4>Frame structure:</h4>
						<p
							style={{
								borderBottom: "1px solid black",
								borderRadius: "8px",
								textAlign: "left",
								padding: "10px",
								margin: "10px"
							}}>
							Insulated kit.
						</p>
						<h4>Roof structure:</h4>
						<p
							style={{
								borderBottom: "1px solid black",
								borderRadius: "8px",
								textAlign: "left",
								padding: "10px",
								margin: "10px"
							}}>
							Insulated kit.
						</p>
						<h4>Insulation and steam-waterproofing:</h4>
						<p
							style={{
								borderBottom: "1px solid black",
								borderRadius: "8px",
								textAlign: "left",
								padding: "10px",
								margin: "10px"
							}}>
							Insulated kit.
						</p>
						<h4>Exterior finish:</h4>
						<p
							style={{
								borderBottom: "1px solid black",
								borderRadius: "8px",
								textAlign: "left",
								padding: "10px",
								margin: "10px"
							}}>
							Log imitation. <br /> Cladding of roof overhangs.
							<br /> Drainage system.
						</p>
						<h4>Glazing:</h4>
						<p
							style={{
								borderBottom: "1px solid black",
								borderRadius: "8px",
								textAlign: "left",
								padding: "10px",
								margin: "10px"
							}}>
							PVC windows with double glazing, PVC entrance doors (interior
							doors are not included).
						</p>
						<h4>Biochemical protection:</h4>
						<p
							style={{
								borderBottom: "1px solid black",
								borderRadius: "8px",
								textAlign: "left",
								padding: "10px",
								margin: "10px"
							}}>
							The entire timber frame is treated with the biochemical antiseptic
							composition.
						</p>
					</Box>
				</Box>
			</Box>

			<Footer />
		</Box>
	);
};

export default TimberDetail;
