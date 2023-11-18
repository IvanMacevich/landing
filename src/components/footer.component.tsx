import { Link, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

export default function Footer() {
	return (
		<Box
			sx={{
				backgroundColor:"#7BE7D2", padding:'60px'}}
			component="footer">
			<Container maxWidth="sm">
				<Typography
					variant="body2"
					color="text.secondary"
					align="center">
					{"Copyright © "}
					<Link
						color="inherit"
						href="https://your-website.com/">
						Your Website
					</Link>{" "}
					{new Date().getFullYear()}
					{"."}
				</Typography>
			</Container>
		</Box>
	);
}
