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
	ListItemText
} from "@mui/material";

const pages = [
	{ id: 1, title: "Home", page: "" },
	{ id: 2, title: "Log cabins", page: "log-cabins" },
	{ id: 3, title: "Timber frame houses", page: "timber" },
	{ id: 4, title: "Log cabins", page: "log-cabins" },
	{ id: 5, title: "Contact Us", page: "contact-us" }
];
const Navbar: React.FC = () => {
	const [drawerOpen, setDrawerOpen] = React.useState(false);
	const handleDrawerToggle = () => {
		setDrawerOpen(!drawerOpen);
	};
	return (
		<>
			<AppBar
				position="static"
				sx={{ backgroundColor: "#7BE7D2" }}>
				<Toolbar>
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
					<Box
						sx={{
							flexGrow: 1,
							justifyContent: "flex-end",
							display: { xs: "none", md: "flex" }
						}}>
						{pages.map((page) => (
							<Link href={`/${page.page}`} underline="none" key={page.id}>
								<Button
									sx={{ my: 2, color: "black", display: "block" }}>
									{page.title}
								</Button>
							</Link>
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
						{pages.map((page) => (
							<ListItem
								button
								key={page.id}>
								<ListItemText primary={page.title} />
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
