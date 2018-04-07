import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView, ScrollView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';
import Basics from './Basics';
import Props from './Props';
import Greeting from './Greeting';
import Blink from './Blink';
import LotsOfStyles from './LotsOfStyles';
import FixedDimensionsBasics from './FixedDimensionsBasics';
import FlexDimensionsBasics from './FlexDimensionsBasics';
import FlexDirection from './FlexDirection';
import FlexJustify from './FlexDirection';
import FlexAlignItem from './FlexAlignItem';
import PizzaTranslator from './PizzaTranslator';
import ButtonBasic from './ButtonBasic';
import Touchables from './Touchables';
//import ScrollViewEx from './ScrollViewEx';
import FlatListBasic from './FlatListBasic';
import SectionListBasics from './SectionListBasics';
import FetchExample from './FetchExample';

//Todo: Create a new file (State.js), import it, add a "Touchable", and complete the exercise
//Todo: Create a new file (Style.js), import it, add a "Touchable", and complete the exercise
//Todo: Create a new file (HeightWidth.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (HeightWidth.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (FlexBox.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (TextInput.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (Touches.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (ScrollView.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (ListViews.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (NetWorking.js), import it,add a "Touchable", and complete the exercise

const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>



  </TouchableOpacity>)

//Todo: Refactor into a seperate file (WhatToDo.js), import and complete the exercise
class WhatToDo extends React.Component {
  static navigationOptions = { title: "What I have to do" }
  render() {
    return (

      <View style={{ flex: 1 }}>
        <Text style={{ marginBottom: 3 }}>Complete all steps in Facebooks "The Basics" tutorial (see below)</Text>
        <Text style={{ marginBottom: 3 }}>For each of the 11 steps, add a corresponding Component in this project + the necessecary changes to navigate into it.
        (inspired of how you navigated into this)
      </Text>
        <WebView
          source={{ uri: "https://facebook.github.io/react-native/docs/tutorial.html" }}
          style={{ marginTop: 20, flex: 1 }}
        />
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Day1 Tutorial' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView >
        <Text style={{ textAlign: "center", fontSize: 20 }}>See all Demos implemented by Bo Henriksen</Text>
        <Touchable onPress={() => navigate('web')} title="What I have to do" />
        <Touchable onPress={() => navigate('basics')} title="Basics" />
        <Touchable onPress={() => navigate('props')} title="Props" />
        <Touchable onPress={() => navigate('props2')} title="Props2" />
        <Touchable onPress={() => navigate('blink')} title="State" />
        <Touchable onPress={() => navigate('styles')} title="Styles" />
        <Touchable onPress={() => navigate('fixDimensions')} title="Fix Dimension" />
        <Touchable onPress={() => navigate('flexDimensions')} title="Flex Dimension" />
        <Touchable onPress={() => navigate('flexDirection')} title="Flex Direction" />
        <Touchable onPress={() => navigate('flexJustify')} title="Flex Justify Content" />
        <Touchable onPress={() => navigate('flexAlign')} title="Flex Align Item" />
        <Touchable onPress={() => navigate('textInput')} title="Handling Text Input" />
        <Touchable onPress={() => navigate('buttonBasic')} title="Button Basic" />
        <Touchable onPress={() => navigate('touchAble')} title="Touchables" />
        {/*<Touchable onPress={() => navigate('scrollViewTest')} title="Scroll View" />*/}
        <Touchable onPress={() => navigate('flatListTest')} title="Flat List" />
        <Touchable onPress={() => navigate('fetchTest')} title="Fetch Example" />
      </ScrollView>
    )
  }
}

export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = StackNavigator({
  Home: { screen: HomeScreen },
  basics: { screen: Basics },
  props: { screen: Props },
  props2: { screen: Greeting },
  blink: { screen: Blink },
  styles: { screen: LotsOfStyles },
  fixDimensions: { screen: FixedDimensionsBasics },
  flexDimensions: { screen: FlexDimensionsBasics },
  flexDirection: { screen: FlexDirection },
  flexJustify: { screen: FlexJustify },
  flexAlign: { screen: FlexAlignItem },
  textInput: { screen: PizzaTranslator },
  buttonBasic: { screen: ButtonBasic },
  touchAble: { screen: Touchables },
  //scrollViewTest: { screen: ScrollViewEx },
  flatListTest: { screen: FlatListBasic },
  sectionListTest: { screen: SectionListBasics },
  fetchTest: { screen: FetchExample },
  web: { screen: WhatToDo },
});

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  }
})