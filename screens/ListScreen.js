import React from 'react';
import { View,Text,StyleSheet,FlatList } from 'react-native';

const ListScreen = () => {

    const friends = [
        { name: 'Friend 1',age: '12'},
        { name: 'Friend 2',age: '13'},
        { name: 'Friend 3',age: '14'},
        { name: 'Friend 4',age: '15'},
        { name: 'Friend 5',age: '16'},
        { name: 'Friend 6',age: '17'},
        { name: 'Friend 7',age: '18'},
    ];

    return (
    <FlatList
    style={styles.flatlist} 
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
    keyExtractor={(friends) => friends.name}
    data={friends} 
    renderItem={({ item }) => {
        // element === { item : { name: 'Friend 1' , index: 0 }}
    return <Text style={styles.textStyle}>
        {item.name} - Age  {item.age}
        </Text>
    }}
    />);
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    },
    flatlist: {
        alignSelf: 'center'
    }
});

export default ListScreen;