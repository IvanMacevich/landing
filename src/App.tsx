import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Main from "./pages/Main";
import LogCabins from "pages/log-cabins.page";
import ContactUs from "pages/contact-us.page";
import TimberPage from "pages/timber.page";
import TimberDetail from "pages/timber-detail.page";
import LogResidential from "pages/residential.page";
import { ResCabinDetail } from "pages/residential-cabin-detail.page";
import { LogCabinDetail } from "pages/log-cabin-detail.page";
import LogCabinsFourFour from "pages/gardenLog44.page";
import LogCabinFourFourDetail from "pages/log-cabin-four-four-detail.page copy";

const App: React.FC = () => {
	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={<Main />}></Route>
				<Route
					path="/garden-log-cabins"
					element={<LogCabins />}></Route>
				<Route
					path="/residential-log-cabins"
					element={<LogResidential />}></Route>
				<Route
					path="/log-cabins-four-four"
					element={<LogCabinsFourFour />}></Route>
				<Route
					path="/log-cabins-four-four/:id"
					element={<LogCabinFourFourDetail />}></Route>
				<Route
					path="/timber"
					element={<TimberPage />}></Route>
				<Route
					path="/timber/:id"
					element={<TimberDetail />}></Route>
				<Route
					path="/logcabin/:id"
					element={<LogCabinDetail />}></Route>
				<Route
					path="/residential-log-cabins/:id"
					element={<ResCabinDetail />}></Route>
				<Route
					path="/contact-us"
					element={<ContactUs />}></Route>
			</Routes>
		</div>
	);
};

export default App;

