import React, { Component } from 'react';
import { FlatList, StyleSheet, View, StatusBar } from 'react-native';
import data from "./data/index.js";
import { ListItem } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: data,
            playingId: -1
        };
    }

    static navigationOptions = {
        title: 'BM Board',
        headerStyle: {
            backgroundColor: '#2196F3',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        return (
            <View >
                <StatusBar
                    backgroundColor="#1976D2"
                    barStyle="light-content"
                />
                <FlatList
                    data={this.state.items}
                    renderItem={({ item, index }) => (
                        <ListItem
                            title={item.label}
                            containerStyle={styles.container}
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

export default Home