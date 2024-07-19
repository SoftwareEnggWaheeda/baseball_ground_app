import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

const Field = ({ children }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/Images/baseground_ball.jpg')}
        style={styles.backgroundImage}
      >
        {children}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '65%',
    position: 'absolute',
  },
});

export default Field;
