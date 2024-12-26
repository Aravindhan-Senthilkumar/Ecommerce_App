import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../constants/color'
import { fontSize } from '../constants/dimensions'
import { fontFamily } from '../constants/fonts'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
 
const LoginRegisterHeader = ({ Buttontitle,navlinkmsg,navigatingtext,onSubmit,setEmail,setPassword,error,handlerAuth}) => {

  return (
    <View style={styles.container}>
        <View style={styles.InputContainer}>
        <Feather name='mail' color={colors.black} size={fontSize.md} style={styles.icon}/>
        <TextInput 
        placeholder='Enter Your Email' 
        onChangeText={(text) => setEmail(text)}
        autoCapitalize='none'
        autoCorrect={false}
        />
        </View>
        <View style={styles.InputContainer}>
        <MaterialIcons color={colors.black} size={fontSize.md} name='password' style={styles.icon}/>
        <TextInput 
        placeholder='Enter Your Password' 
        onChangeText={(text) => setPassword(text)}
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry
        />
        </View>
        <View>
            <TouchableOpacity style={styles.button} onPress={handlerAuth}>
                <Text style={styles.buttonText}>{Buttontitle}</Text>
            </TouchableOpacity>
        </View>
            {error ?  <Text style={{ color: 'red' }}>{error}</Text> : null}
        <View style={styles.navLinkContainer}>
        <Text style={styles.navText1}>{navlinkmsg}</Text>
        <TouchableOpacity style={styles.navLink} onPress={onSubmit}>
                <Text style={styles.navText2}>{navigatingtext}</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default LoginRegisterHeader

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30
    },
    InputContainer: {
        borderColor: colors.gray,
        borderWidth: 1,
        fontFamily: fontFamily.Light,
        fontSize: fontSize.md,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        justifyContent: 'flex-start',
        paddingHorizontal: 30
    },
    icon: {
        marginRight: 10
    },
    button: {
        borderColor: colors.black,
        borderWidth: 1,
        padding: 10,
        paddingHorizontal: 40,
        borderRadius: 40,
        backgroundColor: colors.purple
    },
    buttonText: {
        fontFamily: fontFamily.Bold,
        color: colors.background,
        fontSize: fontSize.md
    },
    navLinkContainer: {
        flexDirection: 'row',
        gap: 5
    },
    navText1: {
        fontFamily: fontFamily.Medium
    },
    navText2: {
        fontFamily: fontFamily.Bold
    }
})