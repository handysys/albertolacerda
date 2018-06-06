import React from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text>Enter your name:</Text>
        <TextInput style={styles.input} placeholder="Alberto Lacerda"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f23657',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    borderRadius: 20,
    fontSize: 24
  },
});
