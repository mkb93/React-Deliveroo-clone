import { View, Text, ScrollView, Image} from 'react-native'
import React, {useState, useEffect} from 'react'
import CategoryCard from './CategoryCard'
import sanityClient, { urlFor } from '../sanity'

const Categories = () => {
  const [categories, setCategories] = useState([])
  useEffect(()=> {
   sanityClient.fetch(
     `*[_type == 'category']`
   ).then(data => {
     setCategories(data)
   });
  }, [])
  console.log(categories)
  return (
    <ScrollView
     contentContainerStyle={{
      paddingHorizontal: 15,
      paddingTop: 10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}
    {categories?.map((category)=>(
       <CategoryCard
       key={category._id}
       imgUrl={urlFor(category.image).width(200).url()}
        title={category.name}

        
       />
    ))}
      
       </ScrollView>
  )
}
// 'https://links.papareact.com/gn7'
export default Categories