import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import Ball from './src/screens/Ball';
import Field from './src/screens/Field';
import { GestureHandlerRootView, GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

const App = () => {
  const basePosition = { x: 185, y: 250 }; // baseman position
  const player1Position = { x: 368, y: 140 }; // player 1 position
  const player2Position = { x: 180, y: 100 }; // player 2 position

  const ballPositionX = useSharedValue(basePosition.x);
  const ballPositionY = useSharedValue(basePosition.y);

  const [step, setStep] = useState(0);

  // Function to start moving the ball to the next position
  const moveBall = () => {
    setStep((prevStep) => (prevStep + 1) % 4);
  };

  // Effect to handle automatic movement of the ball
  useEffect(() => {
    let newPosition;
    if (step === 1) {
      newPosition = player1Position;
    } else if (step === 2) {
      newPosition = player2Position;
    } else {
      newPosition = basePosition;
    }

    ballPositionX.value = withSpring(newPosition.x, { damping: 5, stiffness: 5});
    ballPositionY.value = withSpring(newPosition.y, { damping: 5, stiffness: 5});

    const timeout = setTimeout(() => {
      if (step !== 3) {
        moveBall();
      }
    }, 3000); // Delay before moving to the next position

    return () => clearTimeout(timeout);
  }, [step]);

  // Gesture handling for dragging the ball
  const handleGesture = Gesture.Pan()
    .onUpdate((event) => {
      ballPositionX.value = event.translationX + basePosition.x;
      ballPositionY.value = event.translationY + basePosition.y;
    })
    .onEnd(() => {
      // Trigger the movement to the next position after dragging ends
      moveBall();
    });

  // Animated style for the ball
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: ballPositionX.value },
        { translateY: ballPositionY.value },
      ],
    };
  });

  return (
    <GestureHandlerRootView style={styles.container}>
      <Field>
        <GestureDetector gesture={handleGesture}>
          <Animated.View style={[styles.ball, animatedStyle]}>
            <Ball />
          </Animated.View>
        </GestureDetector>
      </Field>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ball: {
    position: 'absolute',
    width: 50,
    height: 50,
  },
});

export default App;







// / import React, { useEffect, useState } from 'react';
// import { StyleSheet } from 'react-native';
// import Ball from './src/screens/Ball';
// import Field from './src/screens/Field';
// import { GestureHandlerRootView, GestureDetector, Gesture, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
// import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

// const App = () => {
//   const basePosition = { x: 185, y: 250 }; // baseman position
//   const player1Position = { x: 365, y: 135 }; // player 1 position
//   const player2Position = { x: 180, y: 100 }; // player 2 position

//   const ballPositionX = useSharedValue(basePosition.x);
//   const ballPositionY = useSharedValue(basePosition.y);

//   const [step, setStep] = useState(0);

//   const moveBall = () => {
//     setStep((prevStep) => (prevStep + 1) % 4);
//   };

//   useEffect(() => {
//     let newPosition;
//     if (step === 1) {
//       newPosition = player1Position;
//     } else if (step === 2) {
//       newPosition = player2Position;
//     } else {
//       newPosition = basePosition;
//     }

//     ballPositionX.value = withSpring(newPosition.x);
//     ballPositionY.value = withSpring(newPosition.y);

//     const timeout = setTimeout(() => {
//       if (step !== 3) {
//         moveBall();
//       }
//     }, 3000); // Adjust the delay duration to slow down the movement

//     return () => clearTimeout(timeout);
//   }, [step]);

//   const handleGesture = Gesture.Pan()
//     .onUpdate((event) => {
//       ballPositionX.value = event.translationX + basePosition.x;
//       ballPositionY.value = event.translationY + basePosition.y;
//     })
//     .onEnd(() => {
//       moveBall();
//     });

//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [
//         { translateX: ballPositionX.value },
//         { translateY: ballPositionY.value },
//       ],
//     };
//   });

//   return (
//     <GestureHandlerRootView style={styles.container}>
//       <Field>
        
//         <GestureDetector gesture={handleGesture}>
//         <TouchableWithoutFeedback>
//           <Animated.View style={[styles.ball, animatedStyle]}>
//             <Ball />
//           </Animated.View>
//           </TouchableWithoutFeedback>
//         </GestureDetector>
        
//       </Field>
//     </GestureHandlerRootView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   ball: {
//     position: 'absolute',
//     width: 50,
//     height: 50,
//   },
// });

// export default App;
