import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../constants/color'
import { fontSize, spacing } from '../constants/dimensions'
import { fontFamily } from '../constants/fonts'

const CardButton = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>
        <LinearGradient colors={[
            "#8743FF",
            '#4136F1'
        ]}
        start={{x:0,y:0.5}}
        end={{x:1,y:0}}
        style={styles.addToCartButton}
        >
        <MaterialCommunityIcons name='cart-outline' color={colors.background} size={25}/>
        <Text style={styles.addToCartText}>Add to Cart | ${item.price}</Text>
        </LinearGradient>
    </TouchableOpacity>
  )
}

export default CardButton

const styles = StyleSheet.create({
    addToCartButton: {
        flexDirection: 'row',
        width:'99%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: spacing.md,
        gap: spacing.sm
    },
    addToCartText: {
        color: colors.background,
        fontFamily: fontFamily.Medium,
        fontSize: fontSize.md
    }
})