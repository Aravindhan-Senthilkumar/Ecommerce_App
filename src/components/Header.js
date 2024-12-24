import { StyleSheet, View,TouchableOpacity } from 'react-native'
import React from 'react'
import IonIcon  from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
      <IonIcon name='arrow-back' size={28}/>
        </TouchableOpacity >
        <TouchableOpacity>
      <IonIcon name='heart-outline' size={28}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    width: '99%',
    justifyContent:'space-between'
  }})