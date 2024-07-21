import React from 'react';
import { View, StyleSheet } from 'react-native';

const Ball = () => {
    return (
        <View style={styles.ball} />
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
