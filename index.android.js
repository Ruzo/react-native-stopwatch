/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import Timer from './components/timer';
import LapList from './components/lap_list';

class stopwatch extends Component {
  constructor(){
    super();

    this.state = {
      laps: []
    }
  }

  updateLapList(lap){
    this.setState({laps: [...this.state.laps, lap]});
  }

  resetLapList(){
    this.setState({laps: []});
  }

  render() {
    return (
      <View style={styles.container}>
        <Timer
          updateLapList={this.updateLapList.bind(this)}
          resetLapList={this.resetLapList.bind(this)}
        />
        <LapList
          laps={this.state.laps}
        />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('stopwatch', () => stopwatch);
