import React from "react";
import {
	Box,
	Button,
	FormControl,
	FormHelperText,
	Input,
	InputLabel,
	Typography
} from "@mui/material";
import Navbar from "components/navbar.component";

const ContactUs = () => {
	return (
		<Box>
			<Navbar />
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					marginTop: 3,
					padding: 3
				}}>
				<Typography
					variant="h4"
					gutterBottom>
					Contact us
				</Typography>
				<FormControl
					fullWidth
					margin="normal">
					<InputLabel htmlFor="fname">First Name</InputLabel>
					<Input id="fname" />
					<FormHelperText>Please enter your first name.</FormHelperText>
				</FormControl>
				<FormControl
					fullWidth
					margin="normal">
					<InputLabel htmlFor="lname">Last Name</InputLabel>
					<Input id="lname" />
					<FormHelperText>Please enter your last name.</FormHelperText>
				</FormControl>
				<FormControl
					fullWidth
					margin="normal">
					<InputLabel htmlFor="email">Email</InputLabel>
					<Input
						id="email"
						type="email"
					/>
					<FormHelperText>Please enter your email.</FormHelperText>
				</FormControl>
				<Button
					variant="contained"
					size="large"
					sx={{ marginTop: 2, backgroundColor: "#7BE7D2" }}>
					Submit
				</Button>
			</Box>
		</Box>
	);
};

export default ContactUs;
