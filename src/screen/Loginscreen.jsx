import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, {useState} from 'react';
import {colors} from '../utils/color';
import {fonts} from '../utils/fonts';
import { useNavigation } from '@react-navigation/native';

const Loginscreen = () => {
  const [secureText, setSecuretext] = useState(true);

  const navigation = useNavigation()
  const handleGOback=()=>{
    navigation.goBack();
  }

  const handleSignup=()=>{
    navigation.navigate("SignUp")
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.BackButtonwrapper} onPress={handleGOback}>
        <Ionicons
          name={'arrow-back-outline'}
          color={colors.Primary}
          size={25}
        />
      </TouchableOpacity>
      <View style={styles.textConatiner}>
        <Text style={styles.haedingText}>Hey,</Text>
        <Text style={styles.haedingText}>Welcome</Text>
        <Text style={styles.haedingText}>Back</Text>
      </View>
      {/* Form start */}
      <View style={styles.formcontainer}>
        <View style={styles.inputContainer}>
          <Ionicons name={'mail-outline'} size={30} color={colors.Secodnary} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your Email"
            placeholderTextColor={colors.Secodnary}
            keyboardType="email-address"
          />
        </View>
      </View>
      <View style={styles.formcontainer}>
        <View style={styles.inputContainer}>
          <Ionicons
            name={'lock-closed-outline'}
            size={30}
            color={colors.Secodnary}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your password"
            placeholderTextColor={colors.Secodnary}
            secureTextEntry={secureText}
          />
          <TouchableOpacity onPress={() => setSecuretext(prev => !prev)}>
            <Ionicons name={'eye-outline'} size={20} color={colors.Secodnary} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={styles.forgetPassword}>Forget password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButtonWrapper}>
          <Text style={styles.logintext}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.continueText}>or Continue with</Text>
        <TouchableOpacity style={styles.googleButtonContainer}>
          <Image
            source={require('../assets/Google.png')}
            style={styles.googleImage}
          />
          <Text style={styles.googletext}>Google</Text>
        </TouchableOpacity>
        <View style={styles.footerCOntainer}>
          <Text style={styles.accountText}>Don't have account?</Text>
          <TouchableOpacity onPress={handleSignup}>
          <Text style={styles.SignUpText}>SIgnUp</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Form End */}
    </View>
  );
};

export default Loginscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  BackButtonwrapper: {
    height: 40,
    width: 40,
    backgroundColor: colors.gray,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textConatiner: {
    marginVertical: 10,
  },
  haedingText: {
    fontSize: 32,
    color: colors.Primary,
    fontFamily: fonts.Bold,
  },
  formcontainer: {
    marginTop: 5,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.Secodnary,
    borderRadius: 100,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
    marginVertical: 10,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontFamily: fonts.Light,
  },
  forgetPassword: {
    textAlign: 'right',
    color: colors.Primary,
    fontFamily: fonts.Bold,
    marginVertical: 10,
  },
  loginButtonWrapper: {
    backgroundColor: colors.Primary,
    borderRadius: 100,
    marginVertical: 20,
  },
  logintext: {
    color: colors.white,
    fontSize: 20,
    fontFamily: fonts.Bold,
    textAlign: 'center',
    padding: 10,
  },
  continueText: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: colors.Primary,
  },
  googleButtonContainer: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: colors.Primary,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    gap: 10,
  },
  googleImage: {
    width: 20,
    height: 20,
  },
  googletext: {
    fontSize: 20,
    fontFamily: fonts.Bold,
  },
  footerCOntainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    gap: 2,
  },
  accountText: {
    colors: colors.Primary,
    fontFamily: fonts.Regular,
  },
  SignUpText:{
    colors: colors.Primary,
    fontFamily: fonts.Bold,
  }
});

// passwordRules="minlength: 8; maxlength: 16; required: upper; required: lower; required: digit; reject: [ ]"
