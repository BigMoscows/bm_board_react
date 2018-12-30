import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import data from "./data/index.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: data,
    };
  }

  render() {
    console.log(this.state.items);
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.items}
          renderItem={({ item }) =>
            <Text style={styles.item}>{item.label}</Text>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
