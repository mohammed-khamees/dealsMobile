import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/stackNavigation';
import Home from './src/screens/home';

const App = () => {
	return (
		<View style={styles.container}>
			{/* <NavigationContainer>
				<StackNavigator />
			</NavigationContainer> */}
			<Home />
		</View>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
