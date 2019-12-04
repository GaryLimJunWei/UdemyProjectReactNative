import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {


    const [name, setName] = useState('');
    const [password, setPassword] = useState('');


    return (
        <View style={styles.container}>
            <Text>Enter Name : </Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />

            <Text>Enter Password : </Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />

            <Text style={{ paddingBottom: 30 }}>My name is {name}</Text>

            {password.length < 4 ? <Text>Password must be at least 4 character</Text> : null}

        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    }
});

export default TextScreen;