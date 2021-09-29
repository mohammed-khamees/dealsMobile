import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import TabsNavigator from './tabsNavigator';
import FlashSale from '../screens/flashSale';
import Home from '../screens/home';

const Stack = createStackNavigator();

const StackNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName="FlashSale"
		>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="FlashSale" component={FlashSale} />
		</Stack.Navigator>
	);
};

export default StackNavigator;
