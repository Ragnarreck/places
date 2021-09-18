import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import VectorIcon from 'react-native-vector-icons/Ionicons';

interface Props {
    imageSrc: string;
    title: string;
    address: string;
}

const ActivityType = ({ imageSrc, title, address }: Props) => (
    <View style={[styles.container, styles.shadow]}>
        <Image 
            style={styles.image}
            source={{ uri: imageSrc }} 
        />
        <View style={styles.description}>
            <Text style={styles.title} numberOfLines={2}>
                {title}
            </Text>
            <View style={styles.addressContainer}>
                <VectorIcon name='location-outline' size={15} color='#0b5df8' style={styles.locationIcon} />
                <Text style={styles.address} numberOfLines={1}>
                    {address}
                </Text>
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginRight: 15,
        backgroundColor: '#FFFFFF',
        maxWidth: 150,
    },
    shadow: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 20,
        elevation: 5,
        marginBottom: 10,
        marginLeft: 5,
    },
    description: {
        height: 75,
        padding: 10,
        justifyContent: 'space-between',
    },
    image: {
        width: 150,
        height: 150,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    address: {
        fontSize: 13,
        color: '#C6C6C6'
    },
    addressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationIcon: {
        marginRight: 5,
    }
});

export default ActivityType;
