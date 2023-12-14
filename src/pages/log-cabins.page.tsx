import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "components/navbar.component";
import ReactPaginate from "react-paginate";
import { logCabinsDate } from "helpers/log-cabins.data";

const LogCabins = () => {
	const cabinsPerPage = 6;
	const [pageNumber, setPageNumber] = useState(0);

	useEffect(() => {
		const savedPageNumber = localStorage.getItem("logCabinsPageNumber");
		if (savedPageNumber !== null) {
			setPageNumber(parseInt(savedPageNumber, 10));
		}
	}, []);

	const pageCount = Math.ceil(logCabinsDate.length / cabinsPerPage);

	const changePage = ({ selected }: any) => {
		setPageNumber(selected);
		localStorage.setItem("logCabinsPageNumber", selected.toString());
	};

	const cabinsToShow = logCabinsDate.slice(
		pageNumber * cabinsPerPage,
		(pageNumber + 1) * cabinsPerPage
	);

	const cabinStyle = {
		"&:hover": {
			boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
			transform: "scale(1.05)",
			transition: "0.3s",
		},
		textDecoration: "none",
		maxWidth: "1200px",
		margin: "10px auto",
	};

	return (
		<Box>
			<Navbar />
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
						to={`/logcabin/${cabin.id}`}
						style={cabinStyle}>
						<Card>
							<CardMedia
								component="img"
								alt={cabin.name}
								height="300"
								image={require(`../assets/Log Cabins/${cabin.img1}`)}
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
					forcePage={pageNumber}
				/>
			</Box>
		</Box>
	);
};

export default LogCabins;
