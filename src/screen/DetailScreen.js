import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import Header from '../components/Header'
import ProductCarousel from '../components/ProductCarousel'
import { colors } from '../constants/color'
import { spacing, fontSize } from '../constants/dimensions'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { fontFamily } from '../constants/fonts'
import CardButton from '../components/CardButton'

const colorsData = [
  {
    colorName: 'Silver',
    colorValue: '#F0F2F2'
},
  {
    colorName: 'Bright Orange',
    colorValue: '#F25745'
},
  {
    colorName: 'Starlight',
    colorValue: '#FAF6F2'
},
];

const DetailScreen = () => {
  const [selectedColor,setSelectedColor] = useState("");
  const [selectedTab,setSelectedTab] = useState("Details")

  const item = useRoute().params.item;
  return (<View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
    <Header />
    <ProductCarousel images={item.images}/>

    <View style={styles.titleContainer}>
        <View style={styles.titleWrapper}>
            <Text style={styles.productTitle}>{item.name}</Text>
            <Text style={styles.brandName}>{item.brand}</Text>
            <Text style={styles.price}>${item.price}</Text>
        </View>

      <View style={styles.ratingContainer}>
      <FontAwesome name='star' size={fontSize.md} color={colors.yellow} />
      <Text style={styles.ratingText}>4.9</Text>
      </View>
    </View>


    <View style={styles.colorContainer}>
    <Text style={styles.colorTitle}>Colors</Text>


    <FlatList 
    data={colorsData}
    renderItem={({ item }) => (
      <TouchableOpacity style={[
        styles.selectColorContainer,
        item.colorValue === selectedColor && {borderColor: colors.purple}
      ]} onPress={() => {
        setSelectedColor(item.colorValue)
      }}>
          <View style={[styles.CircleContainer,{
            backgroundColor: item.colorValue
          }]} />
          <Text style={styles.colorText}>{item.colorName}</Text>
      </TouchableOpacity>
    )}
    horizontal
    ItemSeparatorComponent={() => (
      <View style={{ width: spacing.sm }}/>
    )}
    />
    </View>

    <View style={styles.detailsReviewTab}>
      <TouchableOpacity onPress={() => setSelectedTab("Details")}>
    <Text style={[styles.tabText,
      selectedTab === "Details" && { color: colors.purple }]}>Details</Text>
      {
        selectedTab === "Details" &&
      <View style={styles.underline}/>
      }
      </TouchableOpacity>


      <TouchableOpacity onPress={() => setSelectedTab("Review")}>
    <Text style={[styles.tabText, 
      selectedTab === "Review" && {color: colors.purple}
    ]}>Review</Text>
    {
      selectedTab === "Review" &&
    <View style={styles.underline}/>
    }
      </TouchableOpacity>
    </View>



    <Text style={styles.detailsContent}>
      {
        selectedTab === "Details" 
        ? item.details
        : item.review
      }
    </Text>
    </ScrollView>

    <CardButton item={item}/>
  </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: spacing.md,
    flex: 1
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.lavander,
    padding: spacing.sm,
    borderRadius: spacing.md,
    height: 45,
    marginTop: spacing.md
  },
  ratingText: {
    fontSize: fontSize.md,
    color: colors.gray,
    fontFamily: fontFamily.Medium,
    marginBottom: 7
  },
  titleWrapper: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  productTitle: {
    fontFamily: fontFamily.Bold,
    color: colors.black,
    fontSize: fontSize.lg
  },
  brandName: {
    fontFamily: fontFamily.Medium,
    color: colors.gray,
    fontSize: fontSize.sm,
  },
  colorContainer: {
    paddingTop: spacing.md
  },
  colorTitle: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.Bold,
    paddingBottom: spacing.md
  },
  selectColorContainer: {
    borderWidth: 1,
    borderColor: '#D9DFC6',
    borderRadius: 4,
    padding: spacing.sm,
    flexDirection: 'row',
    gap: spacing.sm,
    justifyContent: 'center',
    alignItems: 'center'
  },
  CircleContainer: {
    borderWidth: 1,
    borderColor: colors.gray,
    backgroundColor: colors.gray,
    height: spacing.md,
    width:spacing.md,
    borderRadius: spacing.md/2
  },
  colorSingleParentContainer: {
    flexDirection: 'row',
    gap: spacing.sm
  },
  colorText: {
    fontSize: fontSize.sm,
    fontFamily: fontFamily.SemiBold,
  },
  detailsReviewTab: {
    flexDirection: 'row',
    paddingTop: spacing.lg,
    gap: spacing.lg
  },
  tabText: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.Medium,
    color: colors.gray
  },
  underline:{
    borderBottomColor: colors.purple,
    borderWidth: 2,
    width: '50%',
    marginTop: spacing.xs
  },
  detailsContent: {
    color: colors.gray,
    fontFamily: fontFamily.Regular,
    fontSize: fontSize.md,
    paddingVertical: spacing.xs,
    textAlign: 'justify'
  },price: {
    color: colors.purple,
    fontSize: fontSize.md,
    fontFamily: fontFamily.Medium
}

})