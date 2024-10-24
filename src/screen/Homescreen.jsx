import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../utils/color';
import {fonts} from '../utils/fonts';
import { useNavigation } from '@react-navigation/native';


const Homescreen = () => {
  const navigation = useNavigation();

  const handleLogin=()=>{
    navigation.navigate("Login")
  }

  const handleSignup=()=>{
    navigation.navigate("SignUp")
  }
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Image source={require('../assets/man.png')} style={styles.bannerImage} />
      <Text style={styles.title}>Lorem ipusm dolor</Text>
      <Text style={styles.subTitles}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore 
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.loginButtonWrapper,{backgroundColor: colors.Primary,}]} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.loginButtonWrapper]} onPress={handleSignup}>
          <Text style={styles.signupButtonText}>Sign-up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  logo: {
    width: 140,
    height: 40,
    marginVertical: 30,
  },
  bannerImage: {
    marginVertical: 20,
    height: 250,
    width: 230,
  },
  title: {
    fontSize: 40,
    fontFamily: fonts.Bold,
    paddingHorizontal: 20,
    textAlign: 'center',
    color: colors.Primary,
    // marginTop: 40,
    marginTop: 10,
  },
  subTitles: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.Secodnary,
    fontFamily: fonts.Medium,
    paddingHorizontal: 20,
    // marginVertical: 20,
    marginVertical: 10,
  },
  buttonContainer: {
    // marginTop: 20,
    marginTop: 5,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: colors.Primary,
    width: '80%',
    height: 60,
    borderRadius: 100,
  },
  loginButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderRadius: 98,
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.Bold,
  },
  signupButtonText:{
    fontSize: 18,
    fontFamily: fonts.Bold,
  }
});
