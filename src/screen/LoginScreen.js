import { StyleSheet,Text, View,ActivityIndicator } from 'react-native'
import React,{ useState,useEffect } from 'react'
import LoginRegisterHeader from '../components/LoginRegisterHeader'
import { colors } from '../constants/color'
import auth from '../../services/firebaseAuth'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'



const LoginScreen = ({ navigation }) => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');
  const [loading,setLoading] = useState(true);
  
  const checkifLoggedin = () => {
    onAuthStateChanged(auth,(user) => {
      if(user){
        navigation.navigate('HomeScreen')
      }else{
        setLoading(false)
      }
    })
  }
  useEffect(() => {
    checkifLoggedin();
  },[])

  useEffect(() => {
      setError('')
    },[])

  const handlerAuth = () => {
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
      const user = userCredential.user
      alert('You are successfully logged in')
      setTimeout(navigation.navigate('HomeScreen'),2000)
    })
    .catch((error) => {
      setError(error.message)
    })
  }

  if(loading){
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color='gray'/>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <LoginRegisterHeader 
      Buttontitle='Login' 
      navlinkmsg="Don't have an account?" 
      navigatingtext='Register here' 
      onSubmit={() => navigation.navigate('Register')}
      handlerAuth={handlerAuth}
      setEmail = {setEmail}
      setPassword = {setPassword}
      error = {error ? <Text>Please check your Email and Password</Text> : null}
      />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {         
        backgroundColor: colors.background,
        flex: 1},
        loadingContainer: {
        backgroundColor: colors.background,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
        }
    })