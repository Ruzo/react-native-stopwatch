import React, {Component} from 'react';
import styles from '../styles';
import TimerRender from './timer_render';
import ButtonsRender from './buttons_render';
import moment from 'moment';
import {
  View
} from 'react-native';

class Timer extends Component {
  constructor(props){
    super(props);

    this.state = {
      counter: 0,
      counting: false,
      initialTime: 0
    }

    this.interval = 0;
  }

  handleStartButton(){
    if(!this.state.counting){
      this.setState({counting: true});
      this.props.resetLapList();
      this.setState({initialTime: new Date()});
      this.interval = setInterval(() => {
      const currentTime = new Date();
      this.setState({counter: currentTime - this.state.initialTime});
    }, 30);
    } else {
      clearInterval(this.interval);
      this.setState({counting: false, counter: 0});
    }
  }

  handleLapButton(){
    this.props.updateLapList(this.state.counter);
    this.setState({initialTime: new Date()});
  }

  render() {
    return (
      <View style={styles.timerContainer}>
        <TimerRender counter={moment(this.state.counter).format('mm:ss.SS')} />
        <ButtonsRender
          handleStartButton={this.handleStartButton.bind(this)}
          handleLapButton={this.handleLapButton.bind(this)}
          counting={this.state.counting}
        />
      </View>
    );
  }
}

export default Timer;