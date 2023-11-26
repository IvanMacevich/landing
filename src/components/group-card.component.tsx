import {
	Box,
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Typography
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

interface GroupCardProps {
	info: string;
	name: string;
	img: any;
	folder: any;
	buttons: number | undefined;
	link: any;
}
const GroupCard: React.FC<GroupCardProps> = ({
	info,
	name,
	img,
	folder,
	buttons,
	link
}) => {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				cursor: "default"
			}}>
			<Card
				className="card"
				sx={{ maxWidth: 445, boxShadow: "0", cursor: "default" }}>
				<CardActionArea
					sx={{
						display: "grid",
						gridTemplateColumns: "1fr 1fr",
						backgroundColor: "#517F83",
						borderTopLeftRadius: "30px",
						boxShadow: "0",
						cursor: "default"
					}}>
					<CardMedia
						component="img"
						sx={{ borderTopLeftRadius: "30px", cursor: "default" }}
						height="250"
						image={require(`../assets/${folder}/${img}`)}
						alt="green iguana"
					/>
					<CardContent sx={{ backgroundColor: "#517F83" }}>
						<Typography
							sx={{
								fontWeight: "600",

								backgroundImage: "linear-gradient(to left,  #fff, #bfbfbf)",
								color: "transparent",
								backgroundClip: "text"
							}}
							variant="h5"
							component="div">
							{name}
						</Typography>
					</CardContent>
				</CardActionArea>
				{buttons && buttons > 0 ? (
					<CardActions
						sx={{
							backgroundColor: "#517F83",
							fontSize: "8px",
							display: "flex",
							gap: "5px"
						}}>
						<Button
							sx={{ fontSize: "8px", backgroundColor: "#1C3133" }}
							size="small">
							<Link
								to="/log-cabins-three-four"
								style={{ textDecoration: "none", color: "#fff" }}>
								Garden log cabins 34mm
							</Link>
						</Button>
						<Button
							sx={{ fontSize: "8px", backgroundColor: "#1C3133" }}
							size="small">
							<Link
								to="/garden-log-cabins"
								style={{ textDecoration: "none", color: "#fff" }}>
								Garden log cabins 44mm
							</Link>
						</Button>
						<Button
							sx={{ fontSize: "8px", backgroundColor: "#1C3133" }}
							size="small">
							<Link
								to="/residential-log-cabins"
								style={{ textDecoration: "none", color: "#fff" }}>
								Residential log cabins
							</Link>
						</Button>
					</CardActions>
				) : link !== "/duo-wall" ? (
					<CardActions
						sx={{
							backgroundColor: "#517F83",
							fontSize: "8px",
							display: "flex",
							gap: "5px"
						}}>
						<Button
							sx={{
								fontSize: "8px",
								backgroundColor: "#1C3133",
								height: "30px"
							}}
							size="small">
							<Link
								to={link}
								style={{ textDecoration: "none", color: "#fff" }}>
								More Info
							</Link>
						</Button>
					</CardActions>
				) : null}
			</Card>
		</Box>
	);
};

export default GroupCard;
