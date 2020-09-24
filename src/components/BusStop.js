import React from "react";
import { View, Text } from "react-native";

const BusStop = ({ name }) => {
	//const refactoredName = name.replace(/,/g, "");
	return (
		<View>
			<Text>{name}</Text>
		</View>
	);
};

export default BusStop;
