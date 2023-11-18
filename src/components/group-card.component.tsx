import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import React from "react";

interface GroupCardProps {
    info: string;
    name: string;
  }
const GroupCard: React.FC<GroupCardProps> = ({ info, name }) => {
	return (
		<div>
			<Card sx={{ maxWidth: 445 }}>
				<CardActionArea>
					<CardMedia
						component="img"
						height="250"
						image={require("../assets/Logo.png")}
						alt="green iguana"
					/>
					<CardContent>
						<Typography
							gutterBottom
							variant="h5"
							component="div">
							{name}
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary">
							{info}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</div>
	);
};

export default GroupCard;
