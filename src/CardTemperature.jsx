import React from "react";
import clsx from "clsx";

import {
	Grid,
	Paper
} from "@material-ui/core";

import useStyles from "./UseStyles";

function CardTemperature() {
	const classes = useStyles();
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	return (
		<>
			<Grid item xs={12} md={6} lg={3}>
				<Paper className={fixedHeightPaper}>
					<p>Temperatura: 25.3 C</p>
				</Paper>
			</Grid>
		</>
	);
}

export default CardTemperature;
