import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return (
        <View style={styles.container}>
            <Text style={{ alignSelf: 'center', fontSize: 30 }}>{color}</Text>
            <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
            <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        padding: 50
    }
});

export default ColorCounter;