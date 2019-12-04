import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetails = ({ imageSource,title,score}) => {
    return <View style={styles.container}>
        
        <Text style={styles.text}>
            {title}
            </Text>
            <Text style={styles.text} >
                Picture Score is : {score}
            </Text>
            <Image
        style={styles.image}
        source={imageSource} />
    </View>


};

const styles = StyleSheet.create({
    image: {
        alignSelf: 'center',
        padding: 30,
        borderRadius: 7,
        borderWidth: 8
    },
    container: {
        padding: 20
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center'
    }

});

export default ImageDetails;
