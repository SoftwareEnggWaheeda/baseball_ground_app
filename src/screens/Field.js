import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

const Field = ({ children }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/Images/football.png')}
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
    width: 500,
    height: 400,
    position: 'absolute',
  },
});

export default Field;
