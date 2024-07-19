import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Ball from './src/screens/Ball';
import Field from './src/screens/Field';

const App = () => {
  const basePosition = { x: 185, y: 250 }; // baseman position
  const player1Position = { x: 370, y: 130 }; // player 1 position
  const player2Position = { x: 180, y: 100 }; // player 2 position
  const [position, setPosition] = useState(basePosition);
  const [step, setStep] = useState(0);

  const moveBall = () => {
    setStep((prevStep) => (prevStep + 1) % 4);
  };

  useEffect(() => {
    let newPosition;
    if (step === 1) {
      newPosition = player1Position;
    } else if (step === 2) {
      newPosition = player2Position;
    } else if (step === 3) {
      newPosition = basePosition;
    } else {
      newPosition = basePosition;
    }

    const timeout = setTimeout(() => {
      setPosition(newPosition);
      if (step !== 3) {
        moveBall();
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [step]);

  return (
    <Field>
      <TouchableOpacity style={styles.field} onPress={moveBall}>
        <Ball position={position} />
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
