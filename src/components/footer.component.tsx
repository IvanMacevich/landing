import { Link, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

export default function Footer() {
	return (
		<Box
			sx={{
				backgroundColor: "#517F83",
				padding: "60px"
			}}
			component="footer">
			<Container maxWidth="sm">
				<Typography
					sx={{fontSize:'600'}}
					variant="body2"
					color="text.secondary">
					Address: Ukmerges g. 317 B, LT-06306, Vilnius, Lithuania\
					{new Date().getFullYear()}
				</Typography>
			</Container>
		</Box>
	);
}
