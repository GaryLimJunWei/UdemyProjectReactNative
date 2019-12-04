import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    // state === { count: number } 
    // action === { type: 'increment' || 'decrement' , payload: 1 }

    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + action.payload };
        case 'decrement':
            return { ...state, count: state.count - action.payload };
        default:
            return state;
    }

};

const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <View style={styles.container}>

            <Button
                title="Increase"
                onPress={() => {
                    dispatch({ type: 'increment', payload: 1 })
                }} />

            <Button
                title="Decrease"
                onPress={() => {
                    dispatch({ type: 'decrement', payload: 1 })
                }} />
            <Text style={styles.text}>
                Current Count:
            </Text>
            <Text style={styles.text}>{state.count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        padding: 80
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 50,
        alignSelf: 'center'
    }
});

export default CounterScreen;