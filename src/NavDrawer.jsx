import React from "react";
import { useState } from "react";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import navItems from './listItems';

import {
	Drawer,
} from "@material-ui/core";

const useStyles = makeStyles(function (theme) {
	return {
		list: {
			width: 250
		}
	};
});

function NavDrawer({ open, handleClose }) {
	const classes = useStyles();
	const [state, setState] = useState(false);

	return (
		<>
			<Drawer
				anchor="left"
				open={open}
				onClose={handleClose}
			>
				<div className={classes.list}>
					{navItems}
				</div>
			</Drawer>
		</>
	);
}

export default NavDrawer;
