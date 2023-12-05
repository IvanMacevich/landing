import { CardMedia, Link, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

export default function Footer() {
	return (
		<Box
			sx={{
				backgroundColor: "#517F83",
				padding: "60px"
			}}
			component="footer">
			<Container
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignContent: "center"
				}}>
				<Box
					component="img"
					sx={{
						height: 80,
						order: { xs: 2, md: 0 },
						mr: 2,
						display: { md: "flex" },
						fontFamily: "monospace",
						fontWeight: 700,
						letterSpacing: ".3rem",
						color: "inherit",
						textDecoration: "none"
					}}
					src={require("../assets/Logo.png")}
					alt="Logo"></Box>
				<Typography
					sx={{ fontSize: "600", display: "flex", alignContent: "center" }}
					variant="body2"
					color="text.secondary">
					Address: Ukmerges g. 317 B, LT-06306, Vilnius, Lithuania\
					{new Date().getFullYear()}
				</Typography>
			</Container>
		</Box>
	);
}
