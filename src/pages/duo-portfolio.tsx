import { Box } from '@mui/system';
import { FullScreenSlider } from 'components/full-screen-slider';
import Navbar from 'components/navbar.component';
import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';

const DuoPort = () => {
    const [isFullScreenOpen, setFullScreenOpen] = useState(false);
    const handleFullScreenOpen = () => {
        setFullScreenOpen(true);
    };
    const handleThumbnailClick = (index: any) => {
        clickedInd = index;
        setMainPhotoIndex(index);
        handleFullScreenOpen(); // Open full screen slider when clicking a thumbnail
    };
    let clickedInd = 1;

    const handleFullScreenClose = () => {
        setFullScreenOpen(false);
    };
    const [mainPhotoIndex, setMainPhotoIndex] = useState(0);

    const amountOfImages = 12;

    const imgs = Array.from({ length: amountOfImages }).map(
        (_, index) => `Duo wall thermal log houses/${index + 1}.jpg`
    );
    return (
        <div>
            <Navbar></Navbar>
            <h1>Dou wall log houses resume</h1>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center", // Center the images and slider
                    alignItems: "center", // Center the images and slider
                    flexDirection: "column",
                    padding: "10px 50px",
                    marginBottom: "70px"
                }}>
                <Carousel
                    className="carousel"
                    sx={{
                        width: { md: "800px", xs: "100%" },
                        height: { md: "500px", xs: "250px" }
                    }}
                    index={mainPhotoIndex}
                    autoPlay={true}
                    navButtonsAlwaysVisible>
                    {imgs.map((_, index) => (
                        <Box key={index}>
                            <Box
                                component="img"
                                sx={{
                                    width: { md: "800px", xs: "100%" },
                                    height: { md: "500px", xs: "auto" },
                                    cursor: "pointer"
                                }}
                                src={require(`../assets/portfolio/Duo wall thermal log houses/${index + 1
                                    }.jpg`)}
                                onClick={() => handleThumbnailClick(index)}
                            />
                        </Box>
                    ))}
                </Carousel>
            </Box>
            <FullScreenSlider
                open={isFullScreenOpen}
                onClose={handleFullScreenClose}
                images={imgs}
                index={mainPhotoIndex}
                name="portfolio"
            />
        </div>
    );
};

export default DuoPort;