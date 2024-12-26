import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fontSize, spacing } from '../constants/dimensions'
import { fontFamily } from '../constants/fonts'
import { colors } from '../constants/color'
import { category } from '../data/category'


const Category = ({ selectedCategory,handleUpdateCategory }) => {

  return (
    <FlatList 
    showsHorizontalScrollIndicator={false}
    data={category}
    renderItem={({item}) => 
        (<TouchableOpacity onPress={() => handleUpdateCategory(item.name)}>
      <Text style={[styles.categoryText,selectedCategory===item.name && {color:colors.purple}]}>{item.name}</Text>
      {
        selectedCategory===item.name ? <View style={styles.underline}/> : null
      }
    </TouchableOpacity>)}
    keyExtractor={(item) => item.id}
    horizontal
    ItemSeparatorComponent={
        <View style={{paddingHorizontal: spacing.sm}}
        />
    }
    />
  )
}

export default Category

const styles = StyleSheet.create({
    categoryText: {
        fontSize: fontSize.md,
        fontFamily: fontFamily.SemiBold,
        color: colors.gray,
    },
    underline: {
        borderColor: colors.purple,
        borderWidth:1,
        width: '50%',
        marginVertical: spacing.sm,
        marginBottom:20
    }
})