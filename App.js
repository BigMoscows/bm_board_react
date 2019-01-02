import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import data from "./data/index.js";
import { List, ListItem } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: data,
      playingId: -1
    };
  }

  render() {
    return (
      <View >
        <List >
          <FlatList
            data={this.state.items}
            renderItem={({ item, index }) => (

              <ListItem
                title={item.label}
                containerStyle={styles.container}
                // subtitleContainerStyle={{mar}}
                rightIcon={this.state.playingId == index ? (<Icon style={styles.icon} color="black" name="stop" size={20}
                  onPress={() => {
                    this.setState({
                      playingId: -1
                    })
                  }} />) : (<Icon style={styles.icon} color="black" name="play" size={20}
                    onPress={() => {
                      this.setState({
                        playingId: index
                      })
                    }} />)}
              />
            )}
            extraData={this.state}
            keyExtractor={item => item.label}
          />
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: "#F3F3F3",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  icon: {
    marginEnd: 10,
    padding: 20
  },
});

export default App
