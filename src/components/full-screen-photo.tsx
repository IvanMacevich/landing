import React, { useState } from "react";
import { Box, Modal } from "@mui/material";

export const FullScreenPhoto = ({ name, open, onClose, image }: any) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "800px",
          width: "90%", // Adjusted width for responsiveness
          maxHeight: "900px",
          height: "90%", // Adjusted height for responsiveness
        }}
      >
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={require(`../assets/${name}/${image}`)} 
          alt="FullScreenPhoto"
        />
      </Box>
    </Modal>
  );
};