import React, { useState } from "react";
import { Box, Button, FormControl, FormHelperText, Input, InputLabel, TextField, Typography } from "@mui/material";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "components/navbar.component";

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [validationErrors, setValidationErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    // Validate the form fields
    if (!firstName || !lastName || !email || !message) {
      setValidationErrors({
        firstName: !firstName ? "Please enter your first name." : "",
        lastName: !lastName ? "Please enter your last name." : "",
        email: !email ? "Please enter your email." : "",
        message: !message ? "Please enter your message." : ""
      });

      toast.error('Please fill in all required fields');
      return;
    }

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
      const response = await emailjs.send(serviceID, templateID, templateParams, userID);
      console.log("Email sent successfully:", response);

      // Show success toast
      toast.success('Email sent successfully');

      // Handle success (e.g., reset form)
      resetForm();
    } catch (error) {
      console.error("Email failed to send:", error);

      // Show error toast
      toast.error('Email failed to send');
    }
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
    setValidationErrors({
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    });
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
        <Typography variant="h4" gutterBottom>
          Contact us
        </Typography>
        <form onSubmit={handleFormSubmit}>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="fname">First Name</InputLabel>
            <Input
              id="fname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <FormHelperText sx={{ color: 'red' }}>{validationErrors.firstName}</FormHelperText>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="lname">Last Name</InputLabel>
            <Input
              id="lname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <FormHelperText sx={{ color: 'red' }}>{validationErrors.lastName}</FormHelperText>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormHelperText sx={{ color: 'red' }}>{validationErrors.email}</FormHelperText>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField
              InputLabelProps={{
                style: { color: "black" }
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
            <FormHelperText sx={{ color: 'red' }}>{validationErrors.message}</FormHelperText>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{ marginTop: 2, backgroundColor: "#fff" }}>
            Submit
          </Button>
        </form>
        <ToastContainer position="bottom-right" />
      </Box>
    </Box>
  );
};

export default ContactUs;
