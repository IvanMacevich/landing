import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Navbar from "../components/navbar.component";
import GroupCard from "../components/group-card.component";
import { data } from "../helpers/groupsData";
import Footer from "components/footer.component";

const Main: React.FC = () => {
	return (
		<Box>
			<Navbar />
			<Container>
				<Typography
					variant="h4"
					sx={{
						fontSize: "70px",
						fontWeight: "600",
						marginTop: "40px",
						marginBottom: { xs: "40px" }
					}}>
					Welcome to BDL house!
				</Typography>

				<Container
					sx={{
						maxWidth: "1200px",
						margin: "0 auto",
						display: "grid",
						gridTemplateColumns: { md: "1fr 1fr", xs: "1fr" },
						marginTop: "30px"
					}}>
					<Stack>
						<Typography
							variant="body1"
							sx={{
								textAlign: "center",
								borderRight: {md:"1px solid #bfbfbf", xs:'0px'},
								paddingRight: "10px",
								backgroundImage: "linear-gradient(to left,  #0d0d0d, #bfbfbf)",
								color: "transparent",
								backgroundClip: "text"
							}}>
							We are one of the Lithuanian leading suppliers of wooden homes. We
							specialise in producing a high quality range of buildings for
							different purposes – from classic to contemporary, from summertime
							usage to permanent accommodation. We supply self-build kits for
							our partners but also offer turn-key solutions where we can
							arrange design, planning, supply and even build. We have house
							styles to suit every budget, lifestyle and location, from compact
							bungalows to large family homes. We have several technologies for
							the construction of timber houses. Traditional log homes. These
							are constructed completely from logs of various thicknesses (44,
							70, 90mm) which form the skin of the building.
						</Typography>
					</Stack>
					<Box sx={{ position: "relative" }}>
						<Box
							component="img"
							src={require("../assets/Timber/Scarlet 93m2/3.jpg")}
							sx={{
								display: { md: "block", xs: "none" },
								width: "250px",
								borderRadius: "20px",
								position: "absolute",
								margin: "-25px",
								left: "40%",
								top: "10%"
							}}
						/>
						<Box
							component="img"
							src={require("../assets/Timber/Agatha 44m2/3.jpg")}
							sx={{
								display: { md: "block", xs: "none" },
								width: "250px",
								borderRadius: "20px",
								position: "absolute",
								margin: "0",
								left: "20%",
								top: "30%"
							}}
						/>
						<Box
							component="img"
							src={require("../assets/Timber/Amanda 42m2/4.jpg")}
							sx={{
								display: { md: "block", xs: "none" },
								width: "250px",
								borderRadius: "20px",
								position: "absolute",
								margin: "25px",
								left: "40%",
								top: "30%"
							}}
						/>
					</Box>
				</Container>
			</Container>

			<Container sx={{ marginTop: "100px" }}>
				<Typography variant="h3">
					We have several technologies for the construction of timber houses.
				</Typography>
				<Container
					sx={{
						display: "grid",
						gridTemplateColumns: { md: "1fr 1fr", xs: "1fr" },
						alignItems: "center",
						marginTop: { xs: "30px" }
					}}>
					<Stack>
						<Typography
							variant="body1"
							sx={{
								fontWeight: "600",
								backgroundImage: "linear-gradient(to left,  #0d0d0d, #bfbfbf)",
								color: "transparent",
								backgroundClip: "text",
								borderRight: {md:"1px solid #bfbfbf", xs:'0px'},
								paddingRight: {md:"30px", xs:'0px'},
								marginRight: "10px"
							}}>
							Traditional log homes. These are constructed completely from logs
							of various thicknesses (44, 70, 90mm) which form the skin of the
							building. For those who prefer to stay at log home in winter time
							we offer a special insulation kit.
						</Typography>
					</Stack>

					<Box
						component="img"
						src={require("../assets/Picture 2.jpg")}
						sx={{
							margin: "0 auto",
							display: { md: "block" },
							width: { md: "550px", xs: "250px" },
							borderRadius: "20px"
						}}
					/>
				</Container>
			</Container>
			<Container sx={{ marginTop: "100px" }}>
				<Container
					sx={{
						display: "grid",
						gridTemplateColumns: { md: "1fr 1fr", xs: "1fr" },
						alignItems: "center",
						marginTop: { xs: "30px" }
					}}>
					<Box
						component="img"
						src={require("../assets/Picture 3.jpg")}
						sx={{
							margin: "0 auto",
							display: { md: "block" },
							width: { md: "550px", xs: "250px" },
							borderRadius: "20px"
						}}
					/>
					<Stack>
						<Typography
							variant="body1"
							sx={{
								fontWeight: "600",
								backgroundImage: "linear-gradient(to left,  #0d0d0d, #bfbfbf)",
								color: "transparent",
								backgroundClip: "text",
								borderLeft: {md:"1px solid #bfbfbf", xs:'0px'},
								paddingLeft: {md:"30px", xs:'0px'},
								marginLeft: "10px"
							}}>
							Timber frame houses. This is the most popular technology in
							Northern Europe, USA and Kanada that proved its durability and
							energy efficiency. We provide a comprehensive range of services
							and products, not only coordinating the manufacture and delivery
							of your timber structure, but also the supply of windows, doors,
							architrave, skirting and finishing, insulation, plasterboard and
							stairs – everything you need to build client’s new life. In
							addition to standard models, we will be happy to manufacture any
							house according to your requirements and design.
						</Typography>
					</Stack>
				</Container>
			</Container>
			<Container sx={{ marginTop: "100px" }}>
				<Container
					sx={{
						display: "grid",
						gridTemplateColumns: { md: "1fr 1fr", xs: "1fr" },
						alignItems: "center",
						marginTop: { xs: "30px" }
					}}>
					<Stack>
						<Typography
							variant="body1"
							sx={{
								fontWeight: "600",
								backgroundImage: "linear-gradient(to left,  #0d0d0d, #bfbfbf)",
								color: "transparent",
								backgroundClip: "text",
								borderRight: {md:"1px solid #bfbfbf", xs:'0px'},
								paddingRight: {md:"30px", xs:'0px'},
								marginRight: "10px"
							}}>
							Duo thermal log houses. It is a solution combining all favourable
							characteristics that one´s home must have. Healthy and
							nature-friendly materials produce a good indoor climate. Duo
							thermal log wall is an exterior double wall made from two square
							logs and in between them an insulating material.
						</Typography>
					</Stack>

					<Box
						component="img"
						src={require("../assets/Picture 4.jpg")}
						sx={{
							margin: "0 auto",
							display: { md: "block" },
							width: { md: "550px", xs: "250px" },
							borderRadius: "20px"
						}}
					/>
				</Container>
			</Container>
			<Container sx={{ marginTop: "100px" }}>
				<Typography variant="h3">Our philosophy</Typography>
				<Container
					sx={{
						display: "grid",
						gridTemplateColumns: { md: "1fr", xs: "1fr" },
						alignItems: "center",
						marginTop: { xs: "30px" }
					}}>
					<Stack>
						<Typography
							variant="body1"
							sx={{
								fontWeight: "400",
								backgroundClip: "text",
								borderRight: "1px solid #bfbfbf",
								borderLeft: "1px solid #bfbfbf",
								paddingLeft: "30px",
								paddingRight: "30px",
								marginRight: "10px"
							}}>
							We share your passion to create a home that is bespoke to you from
							the inside out. We combine precision engineering with creative
							expertise and use locally sourced, natural wood and high-quality
							fixtures to build eco-friendly timber frame homes to each
							customer’s unique requirements. From the initial plans to the
							first time you close the front door, our kit houses are designed
							and built to suit you – with first-class customer service to
							match. We'll assign a dedicated project manager to ensure your
							experience is as stress-free and enjoyable as possible, and that
							your prefab home is everything you’ve dreamed.
						</Typography>
					</Stack>
				</Container>
			</Container>
			<Container
				component="div"
				sx={{
					maxWidth: "1200px",
					margin: "90px auto",
					display: "grid",
					gridTemplateColumns: { md: "1fr 1fr 1fr ", sm: "1fr" },
					gap: "20px"
				}}>
				{data.map((i) => (
					<GroupCard
						buttons={i.buttons}
						folder={i.folder}
						img={i.img}
						name={i.name}
						info={i.info}
						key={i.id}
						link={i.link}
					/>
				))}
			</Container>
			<Footer />
		</Box>
	);
};

export default Main;
