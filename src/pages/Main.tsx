import {
	Box,
	Card,
	CardActionArea,
	CardMedia,
	Container,
	Stack,
	Typography
} from "@mui/material";
import React from "react";
import Navbar from "../components/navbar.component";
import GroupCard from "../components/group-card.component";
import { data } from "../helpers/groupsData";
import Footer from "components/footer.component";

const Main: React.FC = () => {
	return (
		<Box>
			<Navbar />
			<Container
				sx={{ height: "90vh", display: "flex", alignItems: "center" }}>
				<Stack>
					<Typography variant="h3">Welcome to BDL house!</Typography>
					<Typography variant="h6">
						We are one of the Lithuanian leading suppliers of wooden homes. We
						specialise in producing a high quality range of buildings for
						different purposes – from classic to contemporary, from summertime
						usage to permanent accommodation. We supply self-build kits for our
						partners but also offer turn-key solutions where we can arrange
						design, planning, supply and even build. We have house styles to
						suit every budget, lifestyle and location, from compact bungalows to
						large family homes. We have several technologies for the
						construction of timber houses. Traditional log homes. These are
						constructed completely from logs of various thicknesses (44, 70,
						90mm) which form the skin of the building. For those who prefer to
						stay at log home in winter time we offer a special insulation kit.
						Duo thermal log houses. It is a solution combining all favourable
						characteristics that one´s home must have. Healthy and
						nature-friendly materials produce a good indoor climate. Duo thermal
						log wall is an exterior double wall made from two square logs and in
						between them an insulating material. Timber frame houses. This is
						the most popular technology in Northern Europe, USA and Kanada that
						proved its durability and energy efficiency. We provide a
						comprehensive range of services and products, not only coordinating
						the manufacture and delivery of your timber structure, but also the
						supply of windows, doors, architrave, skirting and finishing,
						insulation, plasterboard and stairs – everything you need to build
						client’s new life. In addition to standard models, we will be happy
						to manufacture any house according to your requirements and design.
					</Typography>
				</Stack>
			</Container>

			<Container
				sx={{ height: "100vh", display: "flex", alignItems: "center"}}>
				<Stack>
					<Typography variant="h3">
					Our philosophy
					</Typography>
					<Typography variant="h6">
						We share your passion to create a home that is
						bespoke to you from the inside out. We combine precision engineering
						with creative expertise and use locally sourced, natural wood and
						high-quality fixtures to build eco-friendly timber frame homes to
						each customer’s unique requirements. From the initial plans to the
						first time you close the front door, our kit houses are designed and
						built to suit you – with first-class customer service to match.
						We'll assign a dedicated project manager to ensure your experience
						is as stress-free and enjoyable as possible, and that your prefab
						home is everything you’ve dreamed.
					</Typography>
				</Stack>
			</Container>
			<Container
				component="div"
				sx={{
					height: "80vh",
					margin: "0 auto",
					display: "grid",
					gridTemplateColumns: { md: "1fr 1fr 1fr ", sm: "1fr 1fr" },
					gap: "20px"
				}}>
				{data.map((i) => (
					<GroupCard
						name={i.name}
						info={i.info}
						key={i.id}
					/>
				))}
			</Container>
			<Footer />
		</Box>
	);
};

export default Main;
