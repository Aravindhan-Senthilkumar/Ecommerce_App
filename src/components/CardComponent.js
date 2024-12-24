import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import { colors } from '../constants/color'
import { fontSize, spacing } from '../constants/dimensions'
import { fontFamily } from '../constants/fonts'
import { useNavigation } from '@react-navigation/native'

const CardComponent = ({ item }) => {
    const navigation = useNavigation();

    const handleNavigation = () => {navigation.navigate('DetailScreen', {item})} 

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigation}>
    <View style={styles.imageWrapper}> 
        <Image source={{uri: item.image}} style={styles.image}/>
    </View>  
    <View style={styles.contentContainer}> 
        <Text style={styles.names} numberOfLines={1}>{item.name}</Text>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.price}>${item.price}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default CardComponent

const styles = StyleSheet.create({
    container: {
        width: '48%',
        elevation: 5,
        backgroundColor: colors.background,
        borderRadius: 12,
        marginBottom: spacing.md
    },
    image: {
        height: 150,
        width: '100%',
        resizeMode: 'center',
        backgroundColor: '#FFC8B7'
    },
    imageWrapper: {
        borderRadius:12,
        backgroundColor: '#FFC8B7',
        margin: spacing.sm
    },
    contentContainer:{
        paddingHorizontal: spacing.md,
        paddingBottom: spacing.md
    },
    names: {
        fontFamily: fontFamily.Bold,
        fontSize: fontSize.md
    },
    brand: {
        fontFamily: fontFamily.Medium,
        fontSize: fontSize.sm,
        color: colors.gray,
        paddingVertical: spacing.xs
    },
    price: {
        color: colors.purple,
        fontSize: fontSize.md,
        fontFamily: fontFamily.Medium
    }
})