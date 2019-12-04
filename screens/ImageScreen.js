import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import ImageDetails from '../components/ImageDetails';

const ImageScreen = () => {
    return (
    <View>
        <ImageDetails 
        title="Forest" 
        imageSource={require('../assets/forest.jpg')}
        score="24"/>
        <ImageDetails 
        title="Beach"
        imageSource={require('../assets/beach.jpg')}
        score="25"/>
        <ImageDetails 
        title="Mountain"
        imageSource={require('../assets/mountain.jpg')}
        score="26"/>
    </View>
    );
};

const styles = StyleSheet.create({
    image: {
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf:'center'
    }
});

export default ImageScreen;
