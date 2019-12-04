import React, { useState } from 'react';
import { View,Text,StyleSheet,Button } from 'react-native';

const CounterScreen = () => {

    const [counter,setCounter] = useState(0);

    return <View style={styles.container}>

        <Button 
        title="Increase"
        onPress={() => {setCounter(counter + 1)} }/>
       
        <Button 
        title="Decrease"
        onPress={() => {setCounter(counter - 1)} }/>
        <Text style={styles.text}>
            Current Count: 
            </Text>
            <Text style={styles.text}>{counter}</Text>
    </View>
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