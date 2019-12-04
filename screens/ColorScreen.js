import React, { useState } from 'react';
import { View, StyleSheet, Button, Text, FlatList } from 'react-native';

const ColorScreen = () => {

    const [colors, setColors] = useState([]);

    return (
        <View>
            <Button
                onPress={() => {
                    // Take a copy of colors and set it into the new Array
                    setColors([...colors, randomRgb()]);
                }}
                title="Add a color" />

            <FlatList
                keyExtractor={item => item}
                data={colors}
                renderItem={({item})=> {
                    return (
                        <View style={{
                            height: 100,
                            width: 100,
                            backgroundColor: item,
                            alignSelf: 'center',
                            borderWidth: 3,
                            borderRadius: 8,
                            padding: 50,
                            
                        }}
                        />
                    );
                }}
            />

        </View>);
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`
};

const styles = StyleSheet.create({
    container: {
        
    }
});

export default ColorScreen;