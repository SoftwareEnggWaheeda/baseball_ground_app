import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Player from './src/screens/Player';
import Field from './src/screens/Field';

const App = () => {
  const basePosition = { x: 120, y: 130 };
  const targetPosition = { x: 210, y: 190 };
  const [position, setPosition] = useState(basePosition);
  const [isMoving, setIsMoving] = useState(false);

  const movePlayer = () => {
    if (isMoving) return;

    setIsMoving(true);
    setPosition(targetPosition);

    setTimeout(() => {
      setPosition(basePosition);
      setIsMoving(false);
    }, 1000); // move back after 1 second
  };

  return (
    <Field>
      <TouchableOpacity style={styles.field} onPress={movePlayer}>
        <Player position={position} />
      </TouchableOpacity>
    </Field>
  );
};

const styles = StyleSheet.create({
  field: {
    flex: 1,
  },
});

export default App;
