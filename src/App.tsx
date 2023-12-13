import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import Main from "./pages/Main";
import LogCabins from "pages/log-cabins.page";
import ContactUs from "pages/contact-us.page";
import TimberPage from "pages/timber.page";
import TimberDetail from "pages/timber-detail.page";
import LogResidential from "pages/residential.page";
import { ResCabinDetail } from "pages/residential-cabin-detail.page";
import { LogCabinDetail } from "pages/log-cabin-detail.page";
import LogCabinsFourFour from "pages/gardenLog44.page";
import LogCabinFourFourDetail from "pages/log-cabin-four-four-detail.page";
import DuoWallPage from "pages/duo-wall.page";
import DuoWallDetail from "pages/duo-wall-details.page";
import DuoPort from "pages/duo-portfolio";
import LogPort from "pages/log-portfolio";
import TimberPort from "pages/timber";

const App: React.FC = () => {
	return (
		<div className="App">
			<Routes>
				<Route
					path="/home"
					element={<Main />}></Route>
				<Route
					path="/garden-log-cabins"
					element={<LogCabins />}></Route>
				<Route
					path="/residential-log-cabins"
					element={<LogResidential />}></Route>
				<Route
					path="/log-cabins-three-four"
					element={<LogCabinsFourFour />}></Route>
				<Route
					path="/duo-wall"
					element={<DuoWallPage />}></Route>
				<Route
					path="/duo-wall-resume"
					element={<DuoPort />}></Route>
				<Route
					path="/log-resume"
					element={<LogPort />}></Route>
				<Route
					path="/timber-resume"
					element={<TimberPort />}></Route>
				<Route
					path="/log-cabins-three-four/:id"
					element={<LogCabinFourFourDetail />}></Route>
				<Route
					path="/timber"
					element={<TimberPage />}></Route>
				<Route
					path="/timber/:id"
					element={<TimberDetail />}></Route>
				<Route
					path="/duo-wall-detail/:id"
					element={<DuoWallDetail />}></Route>
				<Route
					path="/logcabin/:id"
					element={<LogCabinDetail />}></Route>
				<Route
					path="/residential-log-cabins/:id"
					element={<ResCabinDetail />}></Route>
				<Route
					path="/contact-us"
					element={<ContactUs />}></Route>
				<Route
					path="*"
					element={<Navigate to="/home" />}
				/>
			</Routes>
		</div>
	);
};

export default App;

