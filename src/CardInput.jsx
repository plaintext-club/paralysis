import React from "react";
import clsx from "clsx";

import {
	Grid,
	Paper
} from "@material-ui/core";

import useStyles from "./UseStyles";

function CardInput() {
	const classes = useStyles();
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	return (
		<>
			<Grid item xs={12} md={6} lg={3}>
				<Paper className={fixedHeightPaper}>
					<p>Input status: 1</p>
				</Paper>
			</Grid>
		</>
	);
}

export default CardInput;
