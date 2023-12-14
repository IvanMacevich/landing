import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import {
	Box,
	Button,
	Card,
	CardContent,
	CardMedia,
	MenuItem,
	Select,
	Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "components/navbar.component";
import { duoWallData } from "helpers/duo-wall";

const cabinStyle = {
	"&:hover": {
		boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
		transform: "scale(1.05)",
		transition: "0.3s",
	},
	width:'300px',
	height:'250px',
	textDecoration: "none",
	maxWidth: "1200px",
	margin: "10px auto",
};

const DuoWallPage = () => {
	const cabinsPerPage = 6;
	const [pageNumber, setPageNumber] = useState(0);
	const [sortBy, setSortBy] = useState("asc");
  
	useEffect(() => {
	  // Load the saved page number from localStorage on component mount
	  const savedPageNumber = localStorage.getItem("duoWallPageNumber");
	  if (savedPageNumber !== null) {
		setPageNumber(parseInt(savedPageNumber));
	  }
	}, []);
  
	const pageCount = Math.ceil(duoWallData.length / cabinsPerPage);
  
	const changePage = ({ selected }: any) => {
	  setPageNumber(selected);
	  // Save the current page number to localStorage
	  localStorage.setItem("duoWallPageNumber", selected.toString());
	};
  
	const sortCabins = (cabins: any, sortBy: any) => {
	  return [...cabins].sort((a, b) => {
		const sqA = parseInt(a.sq);
		const sqB = parseInt(b.sq);
  
		if (sortBy === "asc") {
		  return sqA - sqB;
		} else {
		  return sqB - sqA;
		}
	  });
	};
  
	const sortedCabins = sortCabins(duoWallData, sortBy);
  
	const cabinsToShow = sortedCabins.slice(
	  pageNumber * cabinsPerPage,
	  (pageNumber + 1) * cabinsPerPage
	);
  
	const handleSort = () => {
	  setSortBy((prevSortBy) => (prevSortBy === "asc" ? "desc" : "asc"));
	};

	return (
		<Box>
			<Navbar />
			<Box
				sx={{
					display: "grid",
					flexDirection: "column",
					margin: "0 auto",
					alignItems: "flex-end",
					justifyContent: "right",
					marginTop: "20px",
					cursor: "pointer",
					maxWidth: "1200px",
				}}
			>
				<Button
					sx={{ color: "black", border: "1px solid black" }}
					onClick={handleSort}
				>
					Sort by Square Meters ({sortBy === "asc" ? "Ascending" : "Descending"}
					)
				</Button>
			</Box>

			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: { md: "1fr 1fr 1fr", sm: "1fr 1fr" },
					gap: "20px",
					maxWidth: "1200px",
					margin: "0 auto",
					padding: "20px 10px",
				}}
			>
				{cabinsToShow.map((cabin) => (
					<Link
						style={cabinStyle}
						className="cabin-link"
						key={cabin.id}
						to={`/duo-wall-detail/${cabin.id}`}
					>
						<Card>
							<CardMedia
								component="img"
								alt={cabin.name}
								width="200"
								height="200"
								image={require(`../assets/Duo wall log houses/${cabin.name}/1.PNG`)}
							/>
							<CardContent>
								<Typography variant="h5">{cabin.name}</Typography>
							</CardContent>
						</Card>
					</Link>
				))}
			</Box>

			<Box
				sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
			>
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

export default DuoWallPage;