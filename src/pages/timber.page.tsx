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
	Typography
} from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "components/navbar.component";
import { timberData } from "helpers/timber.data";

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

const TimberPage = () => {
	const cabinsPerPage = 6;
	const [pageNumber, setPageNumber] = useState(0);
	const [sortBy, setSortBy] = useState("asc");
	const [selectedBedrooms, setSelectedBedrooms] = useState(null);


	const pageCount = Math.ceil(
		(selectedBedrooms
			? timberData.filter((cabin) => cabin.bedrooms === selectedBedrooms).length
			: timberData.length) / cabinsPerPage
	);

	const changePage = ({ selected }: any) => {
		localStorage.setItem(
			"timberPageState",
			JSON.stringify({ pageNumber: selected, sortBy, selectedBedrooms })
		);
		setPageNumber(selected);
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

	const filterCabinsByBedrooms = (cabins: any, bedrooms: any) => {
		return cabins.filter((cabin: any) => {
			if (!bedrooms) {
				return true;
			}
			return cabin.bedrooms == bedrooms;
		});
	};

	const sortedCabins = sortCabins(
		filterCabinsByBedrooms(timberData, selectedBedrooms),
		sortBy
	);

	const cabinsToShow = sortedCabins.slice(
		pageNumber * cabinsPerPage,
		(pageNumber + 1) * cabinsPerPage
	);

	const handleSort = () => {
		setSortBy((prevSortBy: any) => (prevSortBy === "asc" ? "desc" : "asc"));
	};

	const handleBedroomsChange = (bedrooms: any) => {
		setSelectedBedrooms(bedrooms);
		setPageNumber(0); // Reset page number when changing the filter
	};

	useEffect(() => {
		const savedState = localStorage.getItem("timberPageState");
		if (savedState) {
			const { pageNumber, sortBy, selectedBedrooms } = JSON.parse(savedState);
			setPageNumber(pageNumber);
			setSortBy(sortBy);
			setSelectedBedrooms(selectedBedrooms);
		}
	}, []);

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
					maxWidth: "1200px"
				}}>
				<Button
					sx={{ color: "black", border: "1px solid black" }}
					onClick={handleSort}>
					Sort by Square Meters ({sortBy === "asc" ? "Ascending" : "Descending"}
					)
				</Button>
				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-end",
						marginTop: "5px",
						maxWidth: "1200px"
					}}>
					<Box
						sx={{
							display: "flex",
							justifyContent: "right",
							flexDirection: "column",
							marginTop: "5px",
							maxWidth: "1200px"
						}}>
						<h3 style={{ color: "black", margin: 0 }}>Bedrooms</h3>
						<Select
							value={selectedBedrooms || ""}
							onChange={(e) => handleBedroomsChange(e.target.value)}
							sx={{ minWidth: "120px", borderBottom: "1px solid black	" }}>
							<MenuItem value="">All Bedrooms</MenuItem>
							{[1, 2, 3, 4].map((bedrooms) => (
								<MenuItem
									sx={{ color: "black" }}
									key={bedrooms}
									value={bedrooms}>
									{bedrooms} Bedroom(s)
								</MenuItem>
							))}
						</Select>
					</Box>
				</Box>
			</Box>

			{/* Search by Bedrooms */}

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
						style={cabinStyle}
						className="cabin-link"
						key={cabin.id}
						to={`/timber/${cabin.id}`}>
						<Card>
							<CardMedia
								component="img"
								alt={cabin.name}
								height="200"
								image={require(`../assets/Timber/${cabin.name}/1.jpg`)}
							/>
							<CardContent>
								<Typography variant="h5">{cabin.name}</Typography>
							</CardContent>
						</Card>
					</Link>
				))}
			</Box>

			<Box
				sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
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

export default TimberPage;
