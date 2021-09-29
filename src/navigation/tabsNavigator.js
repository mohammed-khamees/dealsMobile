import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
	return (
		<Tab.Navigator initialRouteName="Landing">
			<Tab.Screen name="Landing" component={Home} />
		</Tab.Navigator>
	);
};

export default TabsNavigator;
