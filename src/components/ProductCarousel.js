import { StyleSheet, View,Image, Dimensions, FlatList } from 'react-native'
import React, { useRef, useState } from 'react'
import { spacing } from '../constants/dimensions'
import { colors } from '../constants/color'

const screenwidth = Dimensions.get("window").width

const ProductCarousel = ({ images }) => {
    const [activeSlide,setActiveSlide] = useState(0);

    const onViewRef = useRef((viewableItems) => {
        if(viewableItems.viewableItems.length>0){
            setActiveSlide(viewableItems.viewableItems[0].index)
        }
    })
  return (
    <>
    <FlatList 
    data={images}
    renderItem={({ item }) => {
        return(
        <View style={styles.ImageContainer}>
        <Image source={{uri: item}} style={styles.image}/>
        </View>
        )
    }}
    keyExtractor={(item,index)=> index}
    horizontal
    pagingEnabled={true}
    showsHorizontalScrollIndicator={false}
    snapToAlignment='center'
    snapToInterval={screenwidth}
    decelerationRate={"fast"}
    onViewableItemsChanged={onViewRef.current}
    />
    <View style={styles.pagination}>
        {
            images.map((_,index) => <View key={index} style={[styles.dot,
                index === activeSlide && {width: 20,borderRadius:32},
                {
                    backgroundColor: index === activeSlide ? colors.purple : colors.gray
                }
            ]
            }/>)
        }
    </View>
    </>
    
  )
}

export default ProductCarousel

const styles = StyleSheet.create({
    image:{
        width: 350,
        height: 350,
        resizeMode: 'cover'
    },
    ImageContainer: {
        justifyContent:'center',
        alignItems: 'center',
        width: screenwidth,
        paddingTop: spacing.sm
    },
    pagination: {
        flexDirection:'row',
        justifyContent: 'center',
        marginVertical: spacing.md
    },
    dot:{
        height:10,
        width:10,
        borderRadius:5,
        marginHorizontal: spacing.xs,
        backgroundColor: colors.gray
    }
})