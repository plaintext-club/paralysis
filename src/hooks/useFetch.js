import { useEffect, useState } from "react";

function useFetch(url, refresh) {
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
	}, [url, refresh]);

	return state;
}

export default useFetch;
