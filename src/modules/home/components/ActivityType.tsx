import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface Props {
    imageSrc: string;
    title: string;
}

const ActivityType = ({ imageSrc, title }: Props) => (
    <View style={styles.container}>
        <Image 
            style={styles.image}
            source={{ uri: imageSrc }} 
        />
        <Text style={styles.title} numberOfLines={1}>
            {title}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginRight: 15,
        maxWidth: 150,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 30,
        marginBottom: 10,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 10,
    }
});

export default ActivityType;
