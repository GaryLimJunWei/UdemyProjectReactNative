import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        onPress={() => navigation.navigate('List')}
        title="Go to List Demo"
      />
      <Button
        onPress={() => navigation.navigate('Image')}
        title="Go to Image Demo"
      />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Go to Counter Demo"
      />
      <Button
        onPress={() => navigation.navigate('Color')}
        title="Go to Color Demo"
      />
      <Button
        onPress={() => navigation.navigate('Square')}
        title="Go to Square Demo Without Reducer"
      />
      <Button
        onPress={() => navigation.navigate('SquareReducer')}
        title="Go to Square Demo With Reducer"
      />
      <Button
        onPress={() => navigation.navigate('CounterReducer')}
        title="Go to Counter Demo With Reducer"
      />
      <Button
        onPress={() => navigation.navigate('Text')}
        title="Go to Text Demo"
      />
      <Button
        onPress={() => navigation.navigate('Box')}
        title="Go to Box Demo"
      />

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    alignItems: 'center',
    fontSize: 30,
    alignSelf: 'center',
    padding: 30
  }
});

export default HomeScreen;