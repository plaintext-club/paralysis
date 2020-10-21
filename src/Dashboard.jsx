import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import clsx from "clsx";

import {
	Grid,
	Paper,
	Box,
	Container,
	Button
} from "@material-ui/core";

const useStyles = makeStyles(function (theme) {
	return {
		container: {
			paddingTop: theme.spacing(4),
			paddingBottom: theme.spacing(4),
		},
		paper: {
			padding: theme.spacing(2),
			display: 'flex',
			overflow: 'auto',
			flexDirection: 'column'
		},
		fixedHeight: {
			height: 240
		},
		appBarSpacer: theme.mixins.toolbar
	};
});

function Dashboard() {
	const classes = useStyles();
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	return (
		<>
			<div className={classes.appBarSpacer} />
			<Container maxWidth="lg" className={classes.container}>
				<Grid container justify="center" spacing={5}>
					<Grid item xs={12} md={6} lg={3}>
						<Paper className={fixedHeightPaper}>
							<p>Temperatura: 25.3 C</p>
						</Paper>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<Paper className={fixedHeightPaper}>
							<p>Input status: 1</p>
						</Paper>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<Paper className={fixedHeightPaper}>
							<Button variant="contained" color="primary">
								ON
							</Button>
							<Button variant="contained" color="secondary">
								OFF
							</Button>
						</Paper>
					</Grid>
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							<p>Orders here</p>
						</Paper>
					</Grid>
				</Grid>
				<Box pt={4}>
					<p>This is the copyright</p>
				</Box>
			</Container>
		</>
	);
}

export default Dashboard;
