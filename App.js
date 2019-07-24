import React, { Fragment } from 'react'
import { View } from 'react-native'

import Spin from './src/Spin'

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Spin />
    </View>
  )
}

export default App
