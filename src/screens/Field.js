
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




// components/BaseballGround.js
// import React from 'react';
// import { View, Image, StyleSheet } from 'react-native';
// import { GestureDetector, GestureHandlerRootView, Gesture } from 'react-native-gesture-handler';
// import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

// const Field = () => {
//   const ballPositionX = useSharedValue(0);
//   const ballPositionY = useSharedValue(0);

//   const ballRef = React.useRef(null);

//   // Coordinates for drag positions
//   const centerX = 0;
//   const centerY = 0;
//   const rightX = 150; // Adjust as needed
//   const leftX = -150; // Adjust as needed
//   const dragPositions = [centerX, rightX, leftX, centerX];

//   let currentPositionIndex = 0;

//   const panGesture = Gesture.Pan()
//     .onStart(() => {
//       // Start dragging from current position
//     })
//     .onUpdate((event, context) => {
//       ballPositionX.value = event.translationX;
//       ballPositionY.value = event.translationY;
//     })
//     .onEnd(() => {
//       // Determine the nearest drag position
//       const position = dragPositions[currentPositionIndex];
//       ballPositionX.value = withSpring(position);
//       ballPositionY.value = withSpring(0);

//       // Update position index for next move
//       currentPositionIndex = (currentPositionIndex + 1) % dragPositions.length;
//     });

//   const animatedStyle = useAnimatedStyle(() => ({
//     transform: [
//       { translateX: ballPositionX.value },
//       { translateY: ballPositionY.value },
//     ],
//   }));

//   return (
//     <View style={styles.container}>
//       <Image source={require('../../assets/Images/baseground_ball.jpg')} style={styles.backgroundImage} />
//       <GestureDetector gesture={panGesture}>
//         <Animated.View ref={ballRef} style={[styles.ball, animatedStyle]}>
//           <Image source={require('../../assets/Images/baseball-ball-white.jpg')} style={styles.ballImage} />
//         </Animated.View>
//       </GestureDetector>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover',
//     width: '100%',
//     height: '100%',
//     position: 'absolute',
//   },
//   ball: {
//     position: 'absolute',
//     width: 50,
//     height: 50,
//   },
//   ballImage: {
//     width: '100%',
//     height: '100%',
//   },
// });

// export default Field;
