import { Typography, Button, Modal } from "@mui/material";
import { Box, display, textAlign } from "@mui/system";
import Footer from "components/footer.component";
import { FullScreenPhoto } from "components/full-screen-photo";
import { FullScreenSlider } from "components/full-screen-slider";
import Navbar from "components/navbar.component";
import { duoWallData } from "helpers/duo-wall";
import { logCabinFourFourData } from "helpers/logFourFourData";
import { timberData } from "helpers/timber.data";
import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { useParams } from "react-router-dom";

const DuoWallDetail = () => {
    const { id } = useParams();
    const cabinId = id ? parseInt(id, 10) : 0;
    const cabin = duoWallData.find((x) => x.id === cabinId);
    const cabinName = cabin ? cabin.name : null;
    const [mainPhotoIndex, setMainPhotoIndex] = useState(0);
    const [isFullScreenOpen, setFullScreenOpen] = useState(false);
    let clickedInd = 1;
    const [photoModalOpen, setPhotoModalOpen] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const handlePhotoClick = (photo: any) => {
        setSelectedPhoto(photo);
        setPhotoModalOpen(true);
    };

    const handleClosePhotoModal = () => {
        setPhotoModalOpen(false);
        setSelectedPhoto(null);
    };
    if (!cabin) {
        return <div>Cabin not found</div>;
    }
    const handleThumbnailClick = (index: any) => {
        clickedInd = index;
        setMainPhotoIndex(index);
        handleFullScreenOpen(); // Open full screen slider when clicking a thumbnail
    };

    const handleFullScreenOpen = () => {
        setFullScreenOpen(true);
    };

    const handleFullScreenClose = () => {
        setFullScreenOpen(false);
    };

    const imgs = Array.from({ length: cabin.amount_of_images }).map(
        (_, index) => `${cabinName}/${index + 1}.PNG`
    );

    return (
        <Box>
            <Navbar />
            <Box
                sx={{
                    maxWidth: "1200px",
                    margin: "10px auto 0px auto",
                    textAlign: "right"
                }}>
            </Box>
            <Typography
                variant="h5"
                sx={{
                    maxWidth: "1200px",
                    margin: "10px auto",
                    textAlign: "left",
                    fontWeight: "800",
                    fontSize: "30px"
                }}>
                {cabin.name}
            </Typography>
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
                                src={require(`../assets/Duo wall log houses/${cabinName}/${index + 1
                                    }.PNG`)}
                                alt={`${cabin.name}${index + 1}`}
                                onClick={() => handleThumbnailClick(index)}
                            />
                        </Box>
                    ))}
                </Carousel>

                <FullScreenSlider
                    open={isFullScreenOpen}
                    onClose={handleFullScreenClose}
                    images={imgs}
                    index={mainPhotoIndex}
                    name="Duo wall log houses"
                />
            </Box>
            <h3 style={{ marginTop: "50px" }}>Recommended layout</h3>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "20px",
                    alignItems: "center",
                    margin: "0 auto",
                    padding: "20px",
                    maxWidth: "1200px",
                    marginBottom: "60px",
                    "@media (min-width: 600px)": {
                        gridTemplateColumns: "1fr 1fr"
                    }
                }}>
                <Box>
                    <Box
                        component="img"
                        sx={{cursor: 'pointer'}}
                        src={require(`../assets/Duo wall log houses/${cabin.name}/scheme.JPG`)}
                        alt={cabin.name}
                        width="100%"
                        height="auto"
                        onClick={() => handlePhotoClick(`${cabin.name}/scheme.JPG`)}
                    />
                </Box>
                {cabin.schemas === 2 && (
                    <Box>
                        <Box
                            sx={{cursor: 'pointer'}}
                            component="img"
                            src={require(`../assets/Duo wall log houses/${cabin.name}/scheme2.JPG`)}
                            alt={cabin.name}
                            width="100%"
                            height="auto"
                            onClick={() => handlePhotoClick(`${cabin.name}/scheme2.JPG`)}
                        />
                    </Box>)}

                {/* Render the modal */}
                {selectedPhoto && (
                    <FullScreenPhoto
                        open={photoModalOpen}
                        onClose={handleClosePhotoModal}
                        image={selectedPhoto}
                        name="Duo wall log houses"
                    />
                )}
            </Box>
            <Typography sx={{ maxWidth: "1200px", margin: "0 auto", marginBottom: '90px' }}>
                <p style={{ fontSize: '20px' }}>If you are looking for a log house that is energy-efficient, durable, and attractive, then a double wall log cabin is a good option.</p>
                <h3>Facts:</h3>
                <ul style={{ padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: '10px', textAlign: 'left' }}>
                        In comparison with the so-called energy-saving passive houses built of concrete and stone, the house with duo thermal log wall needs less ventilation, being healthy, economical and ecological at the same time.
                    </li>
                    <li style={{ marginBottom: '10px', textAlign: 'left' }}>On top of being a renewable resource, wood is releasing oxygen necessary for life into the air.</li>
                    <li style={{ marginBottom: '10px', textAlign: 'left' }}>Heating costs of a log house in winter remain low; its normal humidity and heat level in summer are retained without any aid of technology enhancements.</li>
                    <li style={{ marginBottom: '10px', textAlign: 'left' }}>Twinskin log cabins are built to last. The dual-wall construction not only provides excellent insulation but also strengthens the cabin’s structural integrity. The additional layer of logs helps to enhance stability and resistance to external factors. These cottages are intended to endure severe snowfall, strong winds, and variable humidity levels.</li>
                    <li style={{ marginBottom: '10px', textAlign: 'left' }}>The twinskin design not only excels in thermal insulation but also in acoustic isolation. Enjoy the peaceful sounds of nature without interruptions from the outside world.</li>
                    <li style={{ marginBottom: '10px', textAlign: 'left' }}>Twinskin log homes blend functionality and beauty, providing a wide range of design options. The dual-wall structure allows for unique interior and exterior coatings. These cabins can be customized to meet your own style, with decor ranging from cozy rustic to sleek modern.</li>
                </ul>
            </Typography>

            <Footer />
        </Box>
    );
};

export default DuoWallDetail;
