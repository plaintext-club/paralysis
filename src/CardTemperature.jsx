import React from "react";
import clsx from "clsx";

import {
	Grid,
	Paper,
	FormControl,
	InputLabel,
	Button
} from "@material-ui/core";

import GpioSelect from "./GpioSelect";
import useStyles from "./UseStyles";
import useFetch from "./hooks/useFetch";

function CardTemperature() {
	const classes = useStyles();
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
	const [gpio, setGpio] = React.useState("");
	const [refresh, setRefresh] = React.useState(0);

	const handleChange = function (e) {
		setGpio(e.target.value);
	}

	const handleRefresh = function () {
		setRefresh(function (refresh) {
			return refresh + 1;
		});
	}

	const api = function () {
		return window.localStorage.getItem("nerves_api");
	}

	const state = useFetch(`http://${api()}/dht/${gpio}`, refresh);

	return (
		<>
			<Grid item xs={12} md={6} lg={3}>
				<Paper className={fixedHeightPaper}>
					<FormControl className={classes.formControl}>
						<InputLabel>DHT gpio</InputLabel>
						<GpioSelect changeHandler={handleChange} />
					</FormControl>
					<Paper variant="outlined" className={classes.displayPaper}>
						Temperatura: {state.data.temperature} C
						<br />
						Humidade: {state.data.humidity}
					</Paper>
					<Button
						variant="contained"
						color="primary"
						onClick={handleRefresh}
					>
						Refresh
					</Button>
				</Paper>
			</Grid>
		</>
	);
}

export default CardTemperature;
