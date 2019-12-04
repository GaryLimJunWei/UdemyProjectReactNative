import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const ComponentsScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>ComponentsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf:'center'
  }
});

export default ComponentsScreen;
