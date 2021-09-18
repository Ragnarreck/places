import React from 'react';
import { StyleProp, StyleSheet, TextInput, TextStyle, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    value: string;
    placeholder?: string;
    onChange: (value: string) => void;
    inputStyle?: StyleProp<TextStyle>;
    leftIconProps?: {
        name: string;
        color?: string;
        size?: number;
    };
    rightIconProps?: {
        name: string;
        color?: string;
        size?: number;
    }
}

const Input = ({ value, onChange, inputStyle = {}, placeholder = '', leftIconProps, rightIconProps }: Props) => {
    const iconSize = 20;

    return (
        <View style={styles.container}>
            {leftIconProps && (
                <Icon 
                    name={leftIconProps.name}
                    size={leftIconProps.size ?? iconSize}
                    color={leftIconProps.color} 
                />
            )}
            <TextInput 
                value={value}
                placeholder={placeholder}
                placeholderTextColor='#a4a6a9'
                onChangeText={onChange}
                style={[styles.input, inputStyle]} 
            />
            {rightIconProps && (
                <Icon 
                    name={rightIconProps.name}
                    size={rightIconProps.size ?? iconSize}
                    color={rightIconProps.color} 
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f5fa',
        borderRadius: 15,
        padding: 15,
    },
    input: {
        flex: 1,
        paddingLeft: 10,
        fontSize: 16,
    }
});

export default Input;
