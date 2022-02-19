import React, {useState} from 'react';
import { StyleSheet,
         Text, 
         View, 
         TouchableOpacity, 
         Dimensions, 
         StatusBar,
         }
        from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

const WelcomeScreen = ({navigation}) => {
    // this state is for react native picker

    return (
        <View style={styles.container}>
      <StatusBar backgroundColor='#b09154' barStyle='light-content' />
            <View style={styles.header}>
               <Animatable.Image 
                    animation="bounceIn"
                    duraton="1500"
               source={require('../../assets/logo.png')}
               style={styles.logo}
               resizeMode='stretch' />
            </View>
            <Animatable.View style={styles.footer} 
            animation="fadeInUpBig">
                
                <Text style={styles.title}>Stay Connected With Us!</Text>
                <Text style={styles.text}>Sign in With Account</Text>
                {/* this code is for react native picker */}
               
                <View style={styles.button}>
                    <TouchableOpacity 
                    onPress={() => navigation.navigate('SignInScreen')}
                    >
                    <LinearGradient
                    colors={['#b09154', '#b09154']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>Get Started</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
                </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}
export default WelcomeScreen;


//Styling
const {height} = Dimensions.get("screen");
const height_logo = height * 0.20;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#ebd9b5',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#000',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});