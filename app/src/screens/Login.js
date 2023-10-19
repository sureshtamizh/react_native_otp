// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import CommonTextInput from '../components/TextInput';
import commonStyles from '../../styles/commonStyles';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Implement your login logic here
        console.log("User", username)
    };

    return (
        <View style={styles.container}>
            <Text style={[commonStyles.title, { marginBottom: 5 }]}>Login</Text>
            <CommonTextInput
                value={username}
                onChangeText={(text) => setUsername(text)}
                placeholder="Enter email address"
            />
            <CommonTextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder="Enter password"
                secureTextEntry={true}
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        justifyContent: 'center',
        width: '85%',
        alignSelf: 'center'
    },
})
export default LoginScreen;
