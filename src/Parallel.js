import React, { Component } from 'react'
import { Text, View, Animated, Easing, TouchableHighlight } from 'react-native'

export default class Parallel extends Component {
  constructor() {
    super()
    this.animatedValue1 = new Animated.Value(0)
    this.animatedValue2 = new Animated.Value(0)
    this.animatedValue3 = new Animated.Value(0)
  }
  componentDidMount() {
    this.animate()
  }

  animate = () => {
    this.animatedValue1.setValue(0)
    this.animatedValue2.setValue(0)
    this.animatedValue3.setValue(0)

    const createAnimation = function(value, duration, easing, delay = 0) {
      return Animated.timing(value, {
        toValue: 1,
        duration,
        easing,
        delay
      })
    }
    Animated.parallel([
      createAnimation(this.animatedValue1, 2000, Easing.ease),
      createAnimation(this.animatedValue2, 2000, Easing.ease),
      createAnimation(this.animatedValue3, 2000, Easing.ease)
    ]).start()
  }

  render() {
    const scaleText = this.animatedValue1.interpolate({
      inputRange: [0, 1],
      outputRange: [0.5, 2]
    })
    const spinText = this.animatedValue2.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '720deg']
    })
    const introButton = this.animatedValue3.interpolate({
      inputRange: [0, 1],
      outputRange: [-100, 300]
    })

    return (
      <View>
        <Animated.View style={{ transform: [{ scale: scaleText }] }}>
          <Text>Welcome</Text>
        </Animated.View>
        <Animated.View
          style={{ marginTop: 20, transform: [{ rotate: spinText }] }}
        >
          <Text style={{ fontSize: 20 }}>to the App!</Text>
        </Animated.View>
        <Animated.View style={{ top: introButton, position: 'absolute' }}>
          <TouchableHighlight
            onPress={this.animate}
            style={{ backgroundColor: 'red' }}
          >
            <Text style={{ color: 'white', fontSize: 20 }}>
              Click Here To Start
            </Text>
          </TouchableHighlight>
        </Animated.View>
      </View>
    )
  }
}
