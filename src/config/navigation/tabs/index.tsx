import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoritesScreen from '../../../modules/favorites';
import HomeScreen from '../../../modules/home';
import MapScreen from '../../../modules/map';
import { Routes } from '../routes';
import TabBarIcon from '../../../components/TabBarIcon';

const TabStack = createBottomTabNavigator();

const Tabs = () => (
    <TabStack.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
        <TabStack.Screen 
            name={Routes.home} 
            component={HomeScreen} 
            options={{
                tabBarIcon: function HomeIcon({ focused }) {
                    return <TabBarIcon type='home' focused={focused} />;
                }
            }}
        />
        <TabStack.Screen 
            name={Routes.favorites} 
            component={FavoritesScreen}
            options={{
                tabBarIcon: function HomeIcon({ focused }) {
                    return <TabBarIcon type='map' focused={focused} />;
                }
            }}
        />
        <TabStack.Screen 
            name={Routes.map} 
            component={MapScreen}
            options={{
                tabBarIcon: function HomeIcon({ focused }) {
                    return <TabBarIcon type='heart' focused={focused} />;
                }
            }}
        />
    </TabStack.Navigator>
);


export default Tabs;
