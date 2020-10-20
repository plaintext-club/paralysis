import React from "react";

import {
	TextField
} from "@material-ui/core";

function ApiSetUrl() {
	return (
		<>
			<TextField
				id="standard-full-width"
				label="API URL"
				style={{ margin: 8 }}
				placeholder="myapiurl:1234"
				fullWidth
				margin="normal"
				InputLabelProps={{
					shrink: true,
				}}
			/>
		</>
	);
}

export default ApiSetUrl;
