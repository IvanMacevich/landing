import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
	Box,
	Divider,
	Drawer,
	Link,
	List,
	ListItem,
	ListItemText,
	Menu,
	MenuItem
} from "@mui/material";

const pagesMobile = [
	{ id: 1, title: "Home", page: "home" },
	{ id: 6, title: "Garden Log Cabins 44", page: "garden-log-cabins" },
	{
		id: 8,
		title: "Garden Log Cabins 34",
		page: "log-cabins-three-four"
	},
	{ id: 7, title: "Residential Log Cabins", page: "residential-log-cabins" },
	{ id: 3, title: "Timber Frame Houses", page: "timber" },
	{ id: 5, title: "Contact Us", page: "contact-us" }
];

const pages = [
	{ id: 1, title: "Home", page: "home" },
	{
		id: 2,
		title: "Log Cabins",
		page: "log-cabins",
		subpages: [
			{ id: 6, title: "Garden log cabins 44mm", page: "garden-log-cabins" },
			{ id: 7, title: "Garden log cabins 34mm", page: "log-cabins-three-four" },
			{ id: 8, title: "Residential Log Cabins", page: "residential-log-cabins" }
		]
	},
	{ id: 3, title: "Timber Frame Houses", page: "timber" },
	{ id: 5, title: "Contact Us", page: "contact-us" }
];

const Navbar: React.FC = () => {
	const [drawerOpen, setDrawerOpen] = React.useState(false);
	const [logCabinMenuAnchor, setLogCabinMenuAnchor] =
		React.useState<null | HTMLElement>(null);

	const handleDrawerToggle = () => {
		setDrawerOpen(!drawerOpen);
	};

	const handleLogCabinMenuOpen = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		setLogCabinMenuAnchor(event.currentTarget);
	};

	const handleLogCabinMenuClose = () => {
		setLogCabinMenuAnchor(null);
	};

	return (
		<>
			<AppBar
				position="static"
				sx={{ backgroundColor: "#517F83" }}>
				<Toolbar>
					<Link href="home">
						<Box
							component="img"
							sx={{
								height: 80,
								order: { xs: 2, md: 0 },
								mr: 2,
								display: { md: "flex" },
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "inherit",
								textDecoration: "none"
							}}
							src={require("../assets/Logo.png")}></Box>
					</Link>
					<Box
						sx={{
							flexGrow: 1,
							justifyContent: "flex-end",
							display: { xs: "none", md: "flex" },
							color: "#fff"
						}}>
						{pages.map((page: any) => (
							<React.Fragment key={page.id}>
								{page.title === "Log Cabins" ? (
									<React.Fragment>
										<Button
											sx={{ my: 2, display: "block" }}
											onClick={handleLogCabinMenuOpen}>
											Log Cabins
										</Button>
										<Menu
											id="log-cabin-menu"
											anchorEl={logCabinMenuAnchor}
											keepMounted
											open={Boolean(logCabinMenuAnchor)}
											onClose={handleLogCabinMenuClose}>
											{page.subpages?.map((subpage: any) => (
												<MenuItem
													key={subpage.id}
													onClick={() => {
														handleLogCabinMenuClose();
														// You can add logic to navigate to the subpage here
													}}>
													<Link
														href={`${subpage.page}`}
														underline="none">
														<Button sx={{ color: "black" }}>
															{subpage.title}
														</Button>
													</Link>
												</MenuItem>
											))}
										</Menu>
									</React.Fragment>
								) : (
									<Link
										href={`${page.page}`}
										underline="none">
										<Button sx={{ my: 2, display: "block" }}>
											{page.title}
										</Button>
									</Link>
								)}
							</React.Fragment>
						))}
					</Box>
					<IconButton
						onClick={handleDrawerToggle}
						sx={{ display: { xs: "flex", md: "none" }, color: "inherit" }}>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Drawer
				anchor="left"
				open={drawerOpen}
				onClose={handleDrawerToggle}>
				<Box sx={{ width: 250 }}>
					<List>
						{pagesMobile.map((page) => (
							<ListItem
								button
								key={page.id}>
								<Link
									href={`/${page.page}`}
									underline="none">
									<Button sx={{ my: 2, color: "black", display: "block" }}>
										{page.title}
									</Button>
								</Link>
							</ListItem>
						))}
					</List>
					<Divider />
					{/* You can add additional items or sections here */}
				</Box>
			</Drawer>
		</>
	);
};

export default Navbar;
