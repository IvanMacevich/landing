import { createTheme } from "@mui/material";

export const theme = createTheme({
	typography: {
		fontFamily: ["Raleway"].join(",")
	},
	palette: {
		mode: "light",
		primary: { main: "#fff" },
		background: {
			default: "#fff"
		},
		text: {
			primary: "#123"
		}
	}
});
