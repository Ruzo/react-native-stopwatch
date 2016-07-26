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

AppRegistry.registerComponent('stopwatch', () => stopwatch);
