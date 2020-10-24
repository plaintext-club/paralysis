import React from "react";

import {
	TextField,
	Button,
	Container
} from "@material-ui/core";

function ApiSetUrl() {
	return (
		<>
			<Container maxWidth="lg">
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
				<Button variant="contained" color="primary">
					Set API URL
				</Button>
			</Container>
		</>
	);
}

export default ApiSetUrl;
