import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(function (theme) {
	return {
		container: {
			paddingTop: theme.spacing(4),
			paddingBottom: theme.spacing(4),
		},
		paper: {
			padding: theme.spacing(2),
			display: "flex",
			overflow: "auto",
			flexDirection: "column"
		},
		fixedHeight: {
			height: 240
		},
		formControl: {
			margin: theme.spacing(1),
			minWidth: 120,
		},
		selectEmpty: {
			marginTop: theme.spacing(2),
		},
		displayPaper: {
			margin: "20px",
			padding: "5px",
			textAlign: "center"
		},
		buttonFlex: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center"
		},
		cardBtn: {
			margin: "0 5px"
		}
	};
});

export default useStyles;
