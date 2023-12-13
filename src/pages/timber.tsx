import { Box } from '@mui/system';
import { FullScreenSlider } from 'components/full-screen-slider';
import Navbar from 'components/navbar.component';
import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';

const TimberPort = () => {
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

    const amountOfImages = 17;

    const imgs = Array.from({ length: amountOfImages }).map(
        (_, index) => `Timber frame houses/${index + 1}.jpg`
    );
    return (
        <div>
            <Navbar></Navbar>
            <h1>Timber Frame Houses</h1>
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
                                src={require(`../assets/portfolio/Timber frame houses/${index + 1
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

export default TimberPort;