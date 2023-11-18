import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import Navbar from "components/navbar.component";
import ReactPaginate from "react-paginate";
import { logCabinsDate } from "helpers/log-cabins.data";

const LogCabins = () => {
  const cabinsPerPage = 6; // Adjust the number of cabins per page as needed
  const [pageNumber, setPageNumber] = useState(0);

  const pageCount = Math.ceil(logCabinsDate.length / cabinsPerPage);

  const changePage = ({ selected }:any) => {
    setPageNumber(selected);
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
    width: "calc(33.3333% - 20px)",
    margin: "10px",
  };

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "0 10px",
        }}
      >
        {cabinsToShow.map((cabin) => (
          <Link
            key={cabin.id}
            href={`/logcabin/${cabin.id}`}
            sx={cabinStyle}
          >
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
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
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

export default LogCabins;
