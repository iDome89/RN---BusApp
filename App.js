import React from "react";
import { StyleSheet, View } from "react-native";
import { StoreProvider, createStore } from "easy-peasy";
import model from "./src/state/model";
import HomeScreen from "./src/screens/HomeScreen";

const store = createStore(model);

export default function App() {
	return (
		<StoreProvider store={store}>
			<View style={styles.container}>
				<HomeScreen />
			</View>
		</StoreProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
