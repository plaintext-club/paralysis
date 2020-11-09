import { useEffect, useState } from "react";

function useFetch(url) {
	const [state, setState] = useState({ loading: true, data: {} });

	useEffect(function () {
		setState(function (currentState) {
			return {
				...currentState,
				data: {},
				loading: true
			};
		});
		fetch(url)
			.then(function (x) {
				return x.json()
			})
			.then(function (y) {
				setState({
					data: y,
					loading: false
				});
			});
	}, [url]);

	return state;
}

export default useFetch;
