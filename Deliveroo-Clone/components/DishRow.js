import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Currency from 'react-currency-formatter';
import { urlFor } from '../sanity';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'


const DishRow = ({id, name, description, price, image}) => {
  let [isPressed, setIsPressed] = useState(false)
  return (
    <>
    <TouchableOpacity onPress={()=> setIsPressed(!isPressed)} className= 'bg-white border p-4 border-gray-200'>
    <View className='flex-row'>
      <View className='flex-1 pr-2'>
      <Text className='text-lg mb-1'>{name}</Text>
      <Text className='text-gray-400'>{description}</Text>
      <Text className='text-gray-400 mt-2'>
        <Currency quantity={price} currency='GBP'/>
      </Text>
    </View>
    <View>
      <Image
      style={{
        borderWidth: 1,
        borderColor: '#F3F3F4'
      }}
        source={{
          uri: urlFor(image).url()
        }}
        className='h-20 w-20 bg-gray-300 p-4'
      />
    </View>
    </View>
    </TouchableOpacity>
    {isPressed && (
      <View className='bg-white px-4'>
        <View className='flex-row items-center'>
          <TouchableOpacity>
            <MinusCircleIcon size={40} />
          </TouchableOpacity>
          <Text>0</Text>
          <TouchableOpacity>
            <PlusCircleIcon size={40} />
          </TouchableOpacity>
        </View>

      </View>
    )}
    </>
  )
}

export default DishRow