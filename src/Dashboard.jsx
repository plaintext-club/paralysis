import React from "react";

import {
	Grid,
	Box,
	Container,
} from "@material-ui/core";

import useStyles from "./UseStyles";
import CardTemperature from "./CardTemperature";
import CardInput from "./CardInput";
import CardOutput from "./CardOutput";

function Dashboard() {
	const classes = useStyles();

	return (
		<>
			<Container maxWidth="lg" className={classes.container}>
				<Grid container justify="center" spacing={5}>
					<CardTemperature />
					<CardInput />
					<CardOutput />
				</Grid>
			</Container>
		</>
	);
}

export default Dashboard;
