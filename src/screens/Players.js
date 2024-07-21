import React from 'react';
import { View, StyleSheet ,backgroundColor} from 'react-native';

const Player = ({ position,color }) => {
  return (
    <View style={[styles.player, { left: position.x, top: position.y,backgroundColor:color }]} />
  );
};

const styles = StyleSheet.create({
  player: {
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
  },
});

export default Player;
