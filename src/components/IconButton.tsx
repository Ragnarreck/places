import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import VectorIcon from 'react-native-vector-icons/Ionicons';

interface Props {
    name: string;
    color?: string;
    size?: number;
    onPress: () => void;
}

const IconButton = ({ name, color, size, onPress }: Props) => (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <VectorIcon 
            name={name}
            color={color}
            size={size}
        />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#f2f5fa',
        borderRadius: 10,
    }
});

export default IconButton;
