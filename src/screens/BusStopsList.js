import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { useStoreActions, useStore } from "easy-peasy";
import BusStop from "../components/BusStop";

const BusStopsList = () => {
	const stops = useStore((state) => state.stops);
	const error = useStore((state) => state.isError);
	const fetchStops = useStoreActions((actions) => actions.fetchStops);

	useEffect(() => {
		fetchStops();
	}, []);

	return (
		<View>
			<FlatList
				keyExtractor={(item) => item.stop_id}
				data={stops}
				renderItem={({ item }) => <BusStop name={item.stop_name} />}
			/>
		</View>
	);
};

export default BusStopsList;
