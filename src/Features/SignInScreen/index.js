import React, { useContext, useState } from 'react';
import { StyleSheet,
    Text, 
    View, 
    TouchableOpacity, 
    Dimensions,
    Platform,
    TextInput,
    StatusBar,
    ScrollView
    }
   from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../../Navigation/AuthProvider';

const SignInScreen = ({navigation}) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { login } = useContext(AuthContext);

    const[data, setData] = React.useState({
        username:'',
        password: '',
        check_textInputChange:'',
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true
    })
    //  these functions are used for username
    const textInputChange = (val) => {
        if(val.trim().length >= 4) {
            setData({
                    ...data,
                    username:val,
                    isValidUser: true,
                    check_textInputChange: true,
                })
            } else {
                setData({
                    ...data,
                    username:val,
                    isValidUser: false,
                    check_textInputChange: false
                })}
        }
        // These functions are used for password
        const handlePasswordChange = (val) => {
            if(val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                checkPassword_textInputChange: true,
                isValidPassword: true,
            })
        } else {
            setData({
                ...data,
                password:val,
                checkPassword_textInputChange: true,
                isValidPassword: false,
            })
        }
    }
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#729875' barStyle='light-content' />
            <View style={styles.header}>
                {/* <Text style={styles.text_header}>Welcome!</Text> */}
            </View>
            <Animatable.View
            animation='fadeInUpBig'
             style={styles.footer}>
            <Text style={styles.text_footer}>Email Address</Text>
            <View style={styles.action}>
                <FontAwesome
                    name="envelope-o"
                    color="#05375a"
                    size={20} 
                /> 
                <TextInput
                    placeholder='Your Email'
                    style={styles.textInput} 
                    autoCapitalize='none'
                    // onChangeText={(val) => textInputChange(val)}
                    onChangeText={(userEmail) => setEmail(userEmail)}
                />  
                {data.check_textInputChange ? 
                <Animatable.View 
                    animation='bounceIn'>
                <Feather
                    name="check-circle"
                    color="green"
                    size={20}
                />   
                </Animatable.View>
                : null}        
            </View>
            {/* User Validation */}
            {/* {data.isValidUser ? null : 
            <Animatable.View animation='fadeInLeft' duration={500}>
            <Text style={styles.errorMsg}>Username must be 4 characters long</Text>
            </Animatable.View>
            } */}
            {/* Password Field */}
            <Text style={[styles.text_footer, {marginTop : 35}]}>Password</Text>
            <View style={styles.action}>
                <FontAwesome
                    name="lock"
                    color="#05375a"
                    size={20} 
                /> 
                <TextInput
                    placeholder='Your Password'
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput} 
                    autoCapitalize='none'
                    onChangeText={(userPassword) => setPassword(userPassword)}
                    // onChangeText={(val) => handlePasswordChange(val)}
                    // onEndEditing={(e) => handleValidPassword(e.nativeEvent.text)}
                />  
                {data.checkPassword_textInputChange ? 
                <TouchableOpacity
                    onPress={updateSecureTextEntry}> 
                    {data.secureTextEntry ?
                <Feather
                    name="eye-off"
                    color="grey"
                    size={20}
                /> 
                : 
                <Feather
                name="eye"
                color="grey"
                size={20}
            /> 
                }
                </TouchableOpacity>
                : null}             
            </View>
            {/* Password Validation */}
            {data.isValidPassword ? null : 
            <Animatable.View animation='fadeInLeft' duration={500}>
            <Text style={styles.errorMsg}>Password must be 8 characters long</Text>
            </Animatable.View>
            }
            {/* Button Field */}
            <View style={styles.button}>
                <LinearGradient
                    colors={['#729875', '#729875']}
                    style={styles.signIn} >
                             <TouchableOpacity
                    // onPress={() => navigation.navigate('AuthStack')}
                    onPress={() => login(email, password)}>
                        <Text style={[styles.textSign, {color:'#fff'}]}>Sign In</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('SignUpScreen')}
                    style={[styles.signIn, {
                        borderColor:'#729875',
                        borderWidth:1,
                        marginTop:15
                    }
                    ]}
                    >
                        <Text style={[styles.textSign,{
                            color:'#729875'
                        }]}>Sign Up</Text>
                    </TouchableOpacity>
            </View>
            </Animatable.View>
        </View>
    )
}

export default SignInScreen;

// Styling
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#fff'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#c1e3ca',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#f87a01',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
