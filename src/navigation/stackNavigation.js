import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabsNavigator from './tabsNavigator';
import FlashSale from '../screens/flashSale';

const Stack = createStackNavigator();

const StackNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName="Home"
		>
			<Stack.Screen name="Home" component={TabsNavigator} />
			<Stack.Screen name="FlashSale" component={FlashSale} />
		</Stack.Navigator>
	);
};

export default StackNavigator;
