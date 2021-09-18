import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../theme';

interface Props {
    type: 'home' | 'map' | 'heart';
    focused: boolean;
}

const TabBarIcon = ({ type, focused }: Props) => {
    const theme = useTheme();

    return (
        <Icon 
            size={30}
            name={`${type}-outline`}
            color={focused ? theme.colors.tabBarIconFocusedColor : theme.colors.tabBarIconColor} 
        />
    );   
};

export default TabBarIcon;
