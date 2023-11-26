import React, { useState } from "react";
import {
	Box,
	Button,
	Card,
	CardContent,
	CardMedia,
	Typography
} from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "components/navbar.component";
import ReactPaginate from "react-paginate";
import { logCabinsDate } from "helpers/log-cabins.data";
import { logCabinFourFourData } from "helpers/logFourFourData";

const LogCabinsFourFour = () => {
	const cabinsPerPage = 6; // Adjust the number of cabins per page as needed
	const [pageNumber, setPageNumber] = useState(0);

	const pageCount = Math.ceil(logCabinFourFourData.length / cabinsPerPage);

	const changePage = ({ selected }: any) => {
		setPageNumber(selected);
	};

	const cabinsToShow = logCabinFourFourData.slice(
		pageNumber * cabinsPerPage,
		(pageNumber + 1) * cabinsPerPage
	);

	const cabinStyle = {
		"&:hover": {
			boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
			transform: "scale(1.05)",
			transition: "0.3s"
		},
		textDecoration: "none",
		maxWidth: "1200px",

		margin: "10px auto"
	};
	const onButtonClick = () => {
		const pdfUrl = require("../assets/Catalogue 34mm PDF.pdf");
		const link = document.createElement("a");
		link.href = pdfUrl;
		link.download = "Catalogue 34mm PDF.pdf"; // specify the filename
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};
	return (
		<Box>
			<Navbar />
			<Box
				sx={{
					maxWidth: "1200px",
					margin: "10px auto 0px auto",
					textAlign: "right"
				}}>
				<Button
					onClick={onButtonClick}
					sx={{
						backgroundColor: "#517F83",
						"&:hover": {
							backgroundColor: "#171219"
						}
					}}>
					Download Catalogue
				</Button>
			</Box>

			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: { md: "1fr 1fr 1fr", sm: "1fr 1fr" },
					gap: "20px",
					maxWidth: "1200px",
					margin: "0 auto",
					padding: "20px 10px"
				}}>
				{cabinsToShow.map((cabin) => (
					<Link
						className="cabin-link"
						key={cabin.id}
						to={`/log-cabins-three-four/${cabin.id}`}
						style={cabinStyle}>
						<Card>
							<CardMedia
								component="img"
								alt={cabin.name}
								height="300"
								image={require(`../assets/Log Cabins 44/${cabin.name}/1.jpg`)}
							/>
							<CardContent>
								<Typography variant="h5">{cabin.name}</Typography>
							</CardContent>
						</Card>
					</Link>
				))}
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					marginTop: "20px",
					alignItems: "center"
				}}>
				<ReactPaginate
					previousLabel={"←"}
					nextLabel={"→"}
					pageCount={pageCount}
					onPageChange={changePage}
					containerClassName={"pagination"}
					previousLinkClassName={"pagination__link"}
					nextLinkClassName={"pagination__link"}
					disabledClassName={"pagination__link--disabled"}
					activeClassName={"pagination__link--active"}
				/>
			</Box>
		</Box>
	);
};

export default LogCabinsFourFour;
