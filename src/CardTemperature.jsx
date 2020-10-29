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

function CardTemperature() {
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
						<InputLabel>Pino</InputLabel>
						<Select
							value={pin}
							onChange={handleChange}
						>
							<MenuItem value={2}>2</MenuItem>
							<MenuItem value={3}>3</MenuItem>
							<MenuItem value={4}>4</MenuItem>
						</Select>
					</FormControl>
					<Paper variant="outlined" className={classes.displayPaper}>
						Temperatura: 25.3 C
					</Paper>
					<Button variant="contained" color="primary">
						Refresh
					</Button>
				</Paper>
			</Grid>
		</>
	);
}

export default CardTemperature;
