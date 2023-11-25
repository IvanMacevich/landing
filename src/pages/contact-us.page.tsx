import React, { useState } from "react";
import {
	Box,
	Button,
	FormControl,
	FormHelperText,
	Input,
	InputLabel,
	TextField,
	TextareaAutosize,
	Typography
} from "@mui/material";
import emailjs from "emailjs-com";
import Navbar from "components/navbar.component";

const ContactUs = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleFormSubmit = async (e: any) => {
		e.preventDefault();

		// Your Email.js credentials
		const templateParams = {
			from_name: `${firstName} ${lastName}`,
			from_email: email,
			message: message
		};

		// Replace these values with your actual Email.js credentials
		const userID = "K0aKQxJmOLZu2NnOM";
		const serviceID = "service_5qxy3xp";
		const templateID = "template_gx8rold";

		try {
			const response = await emailjs.send(
				serviceID,
				templateID,
				templateParams,
				userID
			);
			console.log("Email sent successfully:", response);
			// Handle success (e.g., show a success message, reset form)
		} catch (error) {
			console.error("Email failed to send:", error);
			// Handle error (e.g., show an error message)
		}
	};

	return (
		<Box>
			<Navbar />
			<Box
				sx={{
					maxWidth: "600px",
					margin: "0 auto",
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
				<form onSubmit={handleFormSubmit}>
					<FormControl
						fullWidth
						margin="normal">
						<InputLabel sx={{color:'black'}} htmlFor="fname">First Name</InputLabel>
						<Input
							id="fname"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
						<FormHelperText>Please enter your first name.</FormHelperText>
					</FormControl>
					<FormControl
						fullWidth
						margin="normal">
						<InputLabel sx={{color:'black'}} htmlFor="lname">Last Name</InputLabel>
						<Input
							id="lname"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
						<FormHelperText>Please enter your last name.</FormHelperText>
					</FormControl>

					<FormControl
						fullWidth
						margin="normal">
						<InputLabel sx={{color:'black'}} htmlFor="email">Email</InputLabel>
						<Input
						
							id="email"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<FormHelperText>Please enter your email.</FormHelperText>
					</FormControl>
					<FormControl
						fullWidth
						margin="normal">
						{/* Use TextareaAutosize instead of Input for multiline text input */}
						<TextField
							InputLabelProps={{
								style: { color: "black" } // Set the color of the label
							}}
							id="message"
							minRows={5}
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							label="Message"
							multiline
							defaultValue="Default Value"
							variant="filled"
						/>
						<FormHelperText>Please enter your message.</FormHelperText>
					</FormControl>
					<Button
						type="submit"
						variant="contained"
						size="large"
						sx={{ marginTop: 2, backgroundColor: "#fff" }}>
						Submit
					</Button>
				</form>
			</Box>
		</Box>
	);
};

export default ContactUs;
