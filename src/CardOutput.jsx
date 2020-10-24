import React from "react";
import clsx from "clsx";

import {
	Grid,
	Paper,
	Button
} from "@material-ui/core";

import useStyles from "./UseStyles";

function CardOutput() {
	const classes = useStyles();
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	return (
		<>
			<Grid item xs={12} md={6} lg={3}>
				<Paper className={fixedHeightPaper}>
					<p>Set output</p>
					<Button variant="contained" color="primary">
						ON
					</Button>
					<Button variant="contained" color="secondary">
						OFF
					</Button>
				</Paper>
			</Grid>
		</>
	);
}

export default CardOutput;
