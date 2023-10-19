import React, { useState } from 'react';
import { TextInput } from 'react-native';

const CommonTextInput = ({ value, onChangeText, placeholder, secureTextEntry = false }) => {
    return (
        <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            style={styles.input}
        />
    );
};

const styles = {
    input: {
        height: 45,
        borderColor: 'gray',
        borderWidth: 0.2,
        marginBottom: 10,
        marginTop: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        color: 'black',
        borderRadius: 10,
        backgroundColor: '#F5F5F5'

    },
};

export default CommonTextInput;
