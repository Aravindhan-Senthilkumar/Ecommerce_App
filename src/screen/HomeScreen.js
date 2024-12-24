import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../constants/color'
import { spacing, fontSize } from '../constants/dimensions'
import { fontFamily } from '../constants/fonts'
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Category from '../components/Category'
import CardComponent from '../components/CardComponent'
import { smartwatch } from '../components/smartwatch'
import { Apple } from '../data/Apple'
import { Xiaomi } from '../data/Xiaomi'
import { Samsung } from '../data/Samsung'

const HomeScreen = () => {
  const [data,setData] = useState();
  const [selectedCategory,setSelectedCategory] = useState('Smart Watch');
  const handleUpdateCategory = (newCategory) => {
    if(newCategory==='Smart Watch'){
      setSelectedCategory('Smart Watch');
      setData(smartwatch);
    }else if(newCategory==='Apple'){
      setSelectedCategory('Apple');
      setData(Apple)
    }else if(newCategory==='Xiaomi'){
      setSelectedCategory('Xiaomi');
      setData(Xiaomi)
    }else if(newCategory === 'Samsung'){
      setSelectedCategory('Samsung')
      setData(Samsung)
    }
  }
  useEffect(() => {
    setData(smartwatch)
  },[])
  return (
    <View style={styles.container}>
      <FlatList 
      ListHeaderComponent={
        <>
      <Text style={styles.headlineText}>Find your favourite products now.</Text>
      <View style={styles.ParentSearchContainer}>
      <View style={styles.searchContainer}>
      <SimpleIcon name='magnifier' size={23} style={styles.lensIcon}/>
      <TextInput placeholder='Search Product' style={styles.InputContainer}/>
      </View>
      <MaterialIcon name='category' size={23} style={styles.CategoryIcon}/>
      </View>
      <Category selectedCategory={selectedCategory} handleUpdateCategory={handleUpdateCategory}/>
        </>
    }
      data={data}
      numColumns={2}
      renderItem={({item}) => <CardComponent item={item}/>}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={{
        justifyContent: 'space-between'
      }}
      contentContainerStyle={{
        paddingBottom: 'auto',
        padding: spacing.md
      }}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,

},
headlineText: {
    fontSize: fontSize.xxl,
    fontFamily: fontFamily.Bold
},
searchContainer: {
  flexDirection: 'row',
  width: '85%',
  borderColor: colors.placeholderText,
  borderWidth: 1,
  alignItems: 'center',
  padding: 5,
  borderRadius: 100
},
lensIcon: {
  paddingHorizontal: 15
},
InputContainer: {
  fontFamily: fontFamily.Light,
  color: colors.gray
},
ParentSearchContainer: {
  flexDirection: 'row',
  marginVertical: 25
},
CategoryIcon: {
  padding: 7,
  paddingHorizontal: 15,
  paddingTop: 12,
  color: colors.black
}
})