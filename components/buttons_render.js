import React from 'react';
import styles from '../styles';
import {View, Text, TouchableOpacity} from 'react-native';

const ButtonsRender = (props) => {

  const startButton = () => {
    const styleState = props.counting
    ? {text: 'STOP', color: '#FF5C2D'}
    : {text: 'START', color: '#42FF82'};
    return (
      <TouchableOpacity onPress={props.handleStartButton} style={[styles.buttons, {borderColor: styleState.color}]}>
        <Text style={{fontWeight: 'bold', color: styleState.color}}>{styleState.text}</Text>
      </TouchableOpacity>
    )
  }

  const lapButton = () => {
    return (
      <TouchableOpacity onPress={props.handleLapButton} style={[styles.buttons, {borderColor: '#E8CE1D'}]}>
        <Text style={{fontWeight: 'bold', color: '#E8CE1D'}}>LAP</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.buttonsContainer}>
      {startButton()}
      {lapButton()}
    </View>
  );
};

export default ButtonsRender;