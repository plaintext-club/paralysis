import React from "react";
import clsx from "clsx";

import {
	Grid,
	Paper,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Button
} from "@material-ui/core";

import useStyles from "./UseStyles";
import GpioSelect from "./GpioSelect";

function CardInput() {
	const classes = useStyles();
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
	const [pin, setPin] = React.useState("");

	const handleChange = function (e) {
		setPin(e.target.value);
	}

	return (
		<>
			<Grid item xs={12} md={6} lg={3}>
				<Paper className={fixedHeightPaper}>
					<FormControl className={classes.formControl}>
						<InputLabel>Input pin</InputLabel>
						<GpioSelect changeHandler={handleChange} />
					</FormControl>
					<Paper variant="outlined" className={classes.displayPaper}>
						Status: 0
					</Paper>
					<Button variant="contained" color="primary">
						Refresh
					</Button>
				</Paper>
			</Grid>
		</>
	);
}

export default CardInput;
