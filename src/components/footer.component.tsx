import { CardMedia, Link, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

export default function Footer() {
	return (
		<Box
			sx={{
				backgroundColor: "#517F83",
				padding: "10px",
			}}
			component="footer"
		>
			<Container
				sx={{
					display: "flex",
					flexDirection: "column", // Updated to column layout
					alignItems: "center", // Center content horizontally
					justifyContent: "flex-end", // Align content to the bottom
					height: "100%", // Set container height to 100%
				}}
			>
				{/* Centered Logo */}
				<Box
					component="img"
					sx={{
						height: 150,
						fontFamily: "monospace",
						fontWeight: 700,
						letterSpacing: ".3rem",
						color: "inherit",
						textDecoration: "none",
						mx: "auto", // Center the logo horizontally
						order: { xs: 2, md: 0 },
						display: { md: "flex" },
					}}
					src={require("../assets/Logo.png")}
					alt="Logo"
				></Box>

				{/* Right-bottom aligned text */}
				<Typography
					sx={{
						fontSize: "600",
						display: "flex",
						alignItems: "flex-end", // Align to the bottom
						color: "text.secondary",
					}}
					variant="body2"
				>
					Address: Ukmerges g. 317 B, LT-06306, Vilnius, Lithuania\
					{new Date().getFullYear()}
				</Typography>
			</Container>
		</Box>
	);
}
