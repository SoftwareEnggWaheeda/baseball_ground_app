import React from 'react';
import { View, StyleSheet } from 'react-native';

const Ball = ({ position }) => {
    return (
        <View style={[styles.ball, { left: position.x, top: position.y, }]} />
    );
};

const styles = StyleSheet.create({
    ball: {
        width: 20,
        height: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        position: 'absolute',
        borderColor: 'red',
        borderWidth: 3,
    },
});

export default Ball;
