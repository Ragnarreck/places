import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './routes';
import AuthScreen from '../../modules/authentication';
import Tabs from './tabs';

export type MainStackParamList = {
    [Routes.login]: undefined;
    [Routes.tabs]: {
        [Routes.favorites]: undefined;
        [Routes.home]: undefined;
        [Routes.map]: undefined;
    };
}

const MainStack = createNativeStackNavigator<MainStackParamList>();

const Navigation = () => (
    <NavigationContainer>
        <MainStack.Navigator>
            <MainStack.Screen name={Routes.tabs} component={Tabs} options={{ headerShown: false }} />
            <MainStack.Screen name={Routes.login} component={AuthScreen} />
        </MainStack.Navigator>
    </NavigationContainer>
);

export default Navigation;
