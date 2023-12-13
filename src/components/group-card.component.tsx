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
		<Link to={link} style={{textDecoration:'none'}}>
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
				</Card>
			</Box></Link>
	);
};

export default GroupCard;
