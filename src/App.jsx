import React from "react";
import { useState } from "react";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import Header from "./Header";
import NavDrawer from "./NavDrawer";
import Dashboard from "./Dashboard";

const useStyles = makeStyles(function (theme) {
	return {
		root: {
			display: "flex"
		},
		content: {
			flexGrow: 1,
			height: "100vh",
			overflow: "auto"
		}
	};
});

function App() {
	const [nav, setNav] = useState(false);
	const classes = useStyles();

	function navOpen() {
		setNav(true);
	}

	function navClose() {
		setNav(false);
	}

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Header menuClick={navOpen} />
			<NavDrawer open={nav} handleClose={navClose} />
			<main className={classes.content}>
				<Dashboard />
			</main>
		</div>
	);
}

export default App;
