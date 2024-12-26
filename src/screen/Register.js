import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LoginRegisterHeader from '../components/LoginRegisterHeader'
import { colors } from '../constants/color'
import auth from '../../services/firebaseAuth'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Register = ({ navigation }) => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');
  useEffect(() => {
        setError('')
      },[])

  const handlerAuth = () => {
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
      const user = userCredential.user
      alert('You are successfully registered')
      setTimeout(navigation.navigate('HomeScreen'),2000)
    })
    .catch((error) => {
      setError(error.message)
    })
  }


  return (
    <View style={styles.container}>
      <LoginRegisterHeader 
      Buttontitle='Register' 
      navlinkmsg='Already have an Account!!' 
      navigatingtext='Login here' 
      onSubmit={() => navigation.navigate('LoginScreen')} 
      handlerAuth={handlerAuth}
      setEmail = {setEmail}
      setPassword = {setPassword}
      error = {error ? <Text>Invalid Email and Password</Text> : null}
      />
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
    container: {         
        backgroundColor: colors.background,
        flex: 1}
})