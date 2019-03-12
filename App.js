import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, ListView } from 'react-native';

export default class App extends React.Component {
  state = {
    toDoItems: [],
    newItem: "",
  };

  addToList = () => {
    this.setState({ toDoItems: this.state.toDoItems.concat(this.state.newItem), newItem: "" });
  }

  handleNewItem = (text) => {
    this.setState({ ...this.state, newItem: text });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.list}>
          <Text>Your To Do List:</Text>
          { this.state.toDoItems.map((item, key)=>(
          <Text key={key}> { item } </Text>)
          )}
        </View>

        <TextInput style={styles.input}
          placeholder = "Enter new item to add to the list"
          placeholderTextColor = "#grey"
          onChangeText = {this.handleNewItem}
          value={this.state.newItem}
          onSubmitEditing = {this.TextInput=""}
          />

        <Button style={styles.submitButton}
          onPress = {this.addToList}
          title = "Add to list"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    margin: 15,
    padding: 15,
    fontSize: 20,
    width: '100%',
    height: '40%',
    borderColor: '#7a42f4',
    borderWidth: 1
  },
  input: {
    margin: 15,
    padding: 15,
    height: 50,
    fontSize: 20,
    width: '100%',
    borderColor: '#7a42f4',
    borderWidth: 1
  },
  submitButton: {
    color: '#7a42f4',
  }
});
