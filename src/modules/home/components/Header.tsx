import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IconButton from '../../../components/IconButton';

const Header = () => (
    <View style={styles.header}>
        <Text style={styles.headerText} numberOfLines={2}>
            Explore all sights
        </Text>
        <IconButton
            name='map-outline'
            size={30}
            onPress={() => {}}
        />
    </View>
);

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 30,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 30,
        width: 200,
        fontWeight: 'bold',
    },
});

export default Header;
