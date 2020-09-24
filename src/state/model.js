import { action, thunk } from "easy-peasy";

export default {
	//Stops State
	stops: [],
	isError: null,
	//Thunks
	fetchStops: thunk(async (actions) => {
		try {
			const res = await fetch(
				"https://backoffice.autobusyvkj.cz/api/webapp/stops"
			);
			const stops = await res.json();
			actions.setStops(stops);
		} catch (err) {
			actions.setError(err);
		}
	}),
	//Actions
	setError: action((state, err) => (state.isError = err)),

	setStops: action((state, stops) => {
		state.stops = stops;
	}),
	//User State
	user: null,
	//Actions
	//Tickets State
	tickets: [],
	//Actions
};
