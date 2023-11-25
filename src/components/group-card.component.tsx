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

interface GroupCardProps {
	info: string;
	name: string;
	img: any;
	folder: any;
	buttons: number | undefined;
}
const GroupCard: React.FC<GroupCardProps> = ({
	info,
	name,
	img,
	folder,
	buttons
}) => {
	return (
		<Box
			sx={{ display: "flex", alignItems: "center", justifyContent: "center",}}>
			<Card
				className="card"
				sx={{ maxWidth: 445, boxShadow:'0' }}>
				<CardActionArea
					sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", backgroundColor: "#517F83", borderTopLeftRadius:"30px",boxShadow:'0'}}>
					<CardMedia
						component="img"
						sx={{borderTopLeftRadius:"30px"}}
						height="250"
						image={require(`../assets/${folder}/${img}`)}
						alt="green iguana"
					/>
					<CardContent sx={{backgroundColor: "#517F83"}}>
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
				{buttons && buttons > 0 && (
					<CardActions sx={{ backgroundColor: "#517F83", fontSize:'8px', display: 'flex', gap: '5px' }}>
						<Button sx={{fontSize: '8px', backgroundColor: "#1C3133"}} size="small">Garden log cabins 34mm</Button>
						<Button sx={{fontSize: '8px', backgroundColor: "#1C3133" }} size="small">Garden log cabins 44mm</Button>
						<Button  sx={{fontSize: '8px', backgroundColor: "#1C3133"}} size="small">Residential log cabins</Button>
					</CardActions>
				)}
			</Card>
		</Box>
	);
};

export default GroupCard;
