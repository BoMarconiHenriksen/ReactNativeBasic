import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView, Image } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';

class Props extends React.Component {
    static navigationOptions = { title: "Learn about Props" }
    render() {

        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        return (
            <View>
                <Text>Props</Text>
                <Image source={pic} style={{ width: 193, height: 110 }} />
                <Text>Hello {this.props.name}!</Text>
            </View>
            
        );
    }
}

export default Props;

class LotsOfGreetings extends React.Component {
    render() {
      return (
        <View style={{alignItems: 'center'}}>
          <Greeting name='Rexxar' />
          <Greeting name='Jaina' />
          <Greeting name='Valeera' />
        </View>
      );
    }
  }