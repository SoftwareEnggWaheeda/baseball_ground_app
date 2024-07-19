import React from 'react';
import { View, StyleSheet } from 'react-native';

const Player = ({ position }) => {
  return (
    <View style={[styles.player, { left: position.x, top: position.y }]} />
  );
};

const styles = StyleSheet.create({
  player: {
    width: 30,
    height: 30,
    backgroundColor: 'blue',
    borderRadius: 15,
    position: 'absolute',
  },
});

export default Player;
