import { Box, Modal } from "@mui/material";
import { useState } from "react";
import Carousel from "react-material-ui-carousel";

export const FullScreenSlider = ({ name, open, onClose, images, index }: any) => {
  const [mainPhotoIndex, setMainPhotoIndex] = useState(index);

  const handleThumbnailClick = (index: any) => {
    setMainPhotoIndex(index);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          margin: "0 auto",
          maxWidth: "800px",
          width: "90%", // Adjusted width for responsiveness
          maxHeight: "500px",
          height: "90%", // Adjusted height for responsiveness
        }}
      >
        <Carousel index={index} autoPlay={false} navButtonsAlwaysVisible>
          {images.map((image: any, index: any) => (
            <Box key={index}>
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src={require(`../assets/${name}/${image}`)} // Fix the image path here
                alt={`FullScreenSlide${index + 1}`}
              />
            </Box>
          ))}
        </Carousel>
      </Box>
    </Modal>
  );
};
