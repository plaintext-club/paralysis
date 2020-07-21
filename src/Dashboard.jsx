import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import clsx from "clsx";

import {
	Grid,
	Paper,
	Box,
	Container
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
				<Grid container spacing={3}>
					{/* Chart */}
					<Grid item xs={12} md={8} lg={9}>
						<Paper className={fixedHeightPaper}>
							<p>This is a chart</p>
						</Paper>
					</Grid>
					{/* Recent Deposits */}
					<Grid item xs={12} md={4} lg={3}>
						<Paper className={fixedHeightPaper}>
							<p>This is a table</p>
						</Paper>
					</Grid>
					{/* Recent Orders */}
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
