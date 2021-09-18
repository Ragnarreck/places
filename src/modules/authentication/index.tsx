import React from 'react';
import { StackActions, useNavigation } from '@react-navigation/core';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Routes } from '../../config/navigation/routes';

const AuthScreen = () => {
    const navigation = useNavigation<any>();

    const go = () => {
        navigation.dispatch(StackActions.replace(Routes.tabs, { screen: Routes.home }));
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={go}>
                <Text>AuthScreen</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default AuthScreen;
