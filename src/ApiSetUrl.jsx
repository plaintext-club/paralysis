import React from "react";
import { useState } from "react";

import {
	TextField,
	Button,
	Container
} from "@material-ui/core";

function ApiSetUrl() {
	const [url, setUrl] = useState(window.localStorage.getItem("nerves_api"));

	function save_url(url) {
		window.localStorage.setItem("nerves_api", url);
	}

	function handleChange(e) {
		setUrl(e.target.value);
	}

	return (
		<>
			<Container maxWidth="lg">
				<TextField
					id="standard-full-width"
					label="API URL"
					value={url}
					onChange={handleChange}
					style={{ margin: 8 }}
					placeholder="myapiurl:1234"
					fullWidth
					margin="normal"
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<Button
					variant="contained"
					color="primary"
					onClick={function () {
						save_url(url);
					}}
				>
					Set API URL
				</Button>
			</Container>
		</>
	);
}

export default ApiSetUrl;
