import React from 'react';
import styles from '../styles';
import {View, Text} from 'react-native';

const TimerRender = (props) => {
  return (
    <View style={styles.timer}>
      <Text style={styles.timerText}>
        {props.counter}
      </Text>
    </View>
  );
};

export default TimerRender;