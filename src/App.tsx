import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Main from "./pages/Main";
import LogCabins from "pages/log-cabins.page";
import ContactUs from "pages/contact-us.page";
import {LogCabinDetail} from "pages/log-cabin-detail.page";
import TimberPage from "pages/timber.page";
import TimberDetail from "pages/timber-detail.page";

const App: React.FC = () => {
	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={<Main />}></Route>
				<Route
					path="/log-cabins"
					element={<LogCabins />}></Route>
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
					path="/contact-us"
					element={<ContactUs />}></Route>
			</Routes>
		</div>
	);
};

export default App;

