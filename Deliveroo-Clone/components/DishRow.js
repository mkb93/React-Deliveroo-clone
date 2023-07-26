import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const DishRow = ({id, name, description, price, image}) => {
  return (
    <TouchableOpacity>
    <View>
      <Text>DishRow</Text>
    </View>
    </TouchableOpacity>
  )
}

export default DishRow