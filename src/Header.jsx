import React from "react";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import {
	AppBar,
	Toolbar,
	IconButton,
	Typography
} from "@material-ui/core";

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(function (theme) {
	return {
		menuButton: {
			marginRight: 36
		},
		title: {
			flexGrow: 1
		}
	};
});

function Header({ menuClick }) {
	const classes = useStyles();

	return (
		<AppBar>
			<Toolbar>
				<IconButton
					edge="start"
					color="inherit"
					aria-label="open drawer"
					onClick={menuClick}
					className={classes.menuButton}
				>
					<MenuIcon />
				</IconButton>
				<Typography
					component="h1"
					variant="h6"
					color="inherit"
					noWrap
					className={classes.title}
				>
					Dashboard
				</Typography>
				<IconButton color="inherit">
					<AccountCircleIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
