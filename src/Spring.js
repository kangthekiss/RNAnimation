import React, { Component } from 'react'
import { Text, View, Animated, Easing } from 'react-native'

export default class Spring extends Component {
  constructor() {
    super()
    this.springValue = new Animated.Value(0.3)
  }

  spring = () => {
    this.springValue.setValue(0.3)
    Animated.spring(this.springValue, {
      toValue: 1,
      friction: 1
    }).start()
  }

  render() {
    return (
      <View>
        <Text style={{ marginBottom: 100 }} onPress={this.spring}>
          Spring
        </Text>
        <Animated.Image
          style={{
            width: 227,
            height: 200,
            transform: [{ scale: this.springValue }]
          }}
          source={{
            uri:
              'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'
          }}
        />
      </View>
    )
  }
}
