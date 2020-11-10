import React from "react";
import clsx from "clsx";

import {
	Grid,
	Paper,
	FormControl,
	InputLabel,
	Button
} from "@material-ui/core";

import GpioSelect from "./GpioSelect"
import useStyles from "./UseStyles";
import useFetch from "./hooks/useFetch";

function CardOutput() {
	const classes = useStyles();
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
	const [gpio, setGpio] = React.useState("");
	const [target, setTarget] = React.useState("");

	const handleChange = function (e) {
		setTarget("");
		setGpio(e.target.value);
	}

	const api = function () {
		return window.localStorage.getItem("nerves_api");
	}

	const handleOFF = function () {
		setTarget(gpio + "/0");
	}

	const handleON = function () {
		setTarget(gpio + "/1");
	}

	const state = useFetch(`http://${api()}/gpio/write/${target}`);

	return (
		<>
			<Grid item xs={12} md={6} lg={3}>
				<Paper className={fixedHeightPaper}>
					<FormControl className={classes.formControl}>
						<InputLabel>Output gpio</InputLabel>
						<GpioSelect changeHandler={handleChange}/>
					</FormControl>
					<Paper variant="outlined" className={classes.displayPaper}>
						Status: {state.data.value}
					</Paper>
					<div className={classes.buttonFlex}>
						<Button
							variant="contained"
							color="primary"
							className={classes.cardBtn}
							onClick={handleON}
						>
							ON
						</Button>
						<Button
							variant="contained"
							color="secondary"
							className={classes.cardBtn}
							onClick={handleOFF}
						>
							OFF
						</Button>
					</div>
				</Paper>
			</Grid>
		</>
	);
}

export default CardOutput;
