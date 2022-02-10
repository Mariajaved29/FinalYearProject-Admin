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


const SignUpScreen = ({navigation}) => {

    const [name ,setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const {register} = useContext(AuthContext);

    const[data, setData] = React.useState({
        userName:'',
        userEmail:'',
        userPassword: '',
        conform_userPassword:'',
        check_textInputChange: false,
        secureTextEntry: true,
        conform_secureTextEntry: true,
        isValidUserName: true,
        isValidUserEmail: true,
        isValidPassword: true,
        isValidConfirmedPassword: true
    })

    const userInputChange = (userName) => {
        if(userName.trim().length >= 4) {
            setData({
                ...data,
                userName: userName,
                isValidUserName: true,
                checkUser_textInputChange: true
            })
        } else {
            setData({
                ...data,
                userName: userName,
                isValidUserName: false,
                checkUser_textInputChange: false
            })
        }
    }

    const emailInputChange = (userEmail) => {
        if(userEmail.trim().length >= 4) {
            setData({
                ...data,
                email: userEmail,
                check_textInputChange: true,
                isValidUserEmail: true
            })
        } else {
            setData({
                ...data,
                email: userEmail,
                isValidUserEmail: false,
                check_textInputChange: false
            })
        }
    }

    const handlePasswordChange = (userPassword) => {
        if(userPassword.trim().length >= 8) {
            setData({
                ...data,
                password: userPassword,
                isValidPassword: true,
                checkPassword_textInputChange: true
            })
        } else {
            setData({
                ...data,
                password: userPassword,
                isValidPassword: false,
                checkPassword_textInputChange: false
            })
        }
    }

    const handleConfirmPasswordChange = (userConfirmedPassword, userPassword) => {
        if(userConfirmedPassword === password) {
            setData({
                ...data,
                conform_password: userConfirmedPassword,
                isValidConfirmedPassword: true,
                checkConformPassword_textInputChange: true,
            })
        } else {
            setData({
                ...data,
                conform_password:userConfirmedPassword,
                isValidConfirmedPassword: false,
                checkConformPassword_textInputChange: true
            })
        }
    }
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }
    const updateConformSecureTextEntry = () => {
        setData({
            ...data,
            conform_secureTextEntry: !data.conform_secureTextEntry
        })
    }
    const handleValidUserName = (userName) => {
        if( userName.length >= 4 ) {
            setData({
                ...data,
                isValidUserName: true
            });
        } else {
            setData({
                ...data,
                isValidUserName: false
            });
        }
    }
    const handleValidUserEmail = (userEmail) => {
        // let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if( userEmail.length == 0 ) {
            setData({
                ...data,
                isValidUserEmail: true
            });
        } else {
            setData({
                ...data,
                isValidUserEmail: false
            });
        }
    }

    const submitData = async () => {}
    

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#b09154' barStyle='light-content' />
            <View style={styles.header}>
                {/* <Text style={styles.text_header}>Register Now!</Text> */}
            </View>
            <Animatable.View
            animation='fadeInUpBig'
             style={styles.footer}>
                 {/* UserName Field */}
                 <Text style={styles.text_footer}>Username</Text>
            <View style={styles.action}>
                <FontAwesome
                   name="user-o"
                   color="#05375a"
                    size={20} 
                /> 
                <TextInput
                    placeholder='Your userName'
                    style={styles.textInput} 
                    autoCapitalize='none'
                    onChangeText={(userName) => {setName(userName); userInputChange(userName)}}
                    onEndEditing={(e) => handleValidUserName(e.nativeEvent.text)}
                />  
                {data.checkUser_textInputChange ? 
                <Animatable.View 
                    animation='bounceIn'>
                <Feather
                    name="check-circle"
                    color="#b09154"
                    size={20}
                />   
                </Animatable.View>
                : null}        
            </View>

            {/* User Validation */}
            {data.isValidUserName ? null : 
                <Animatable.View animation='fadeInLeft' duration={500}>
                <Text style={styles.errorMsg}>Username must be 4 characters long</Text>
                </Animatable.View>
            }

                 {/* Email Field */}
            <Text style={[styles.text_footer, {marginTop : 10}]}>Email</Text>
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
                    // onChangeText={(userEmail) => emailInputChange(userEmail)}
                    onChangeText={(userEmail) => {setEmail(userEmail); emailInputChange(userEmail)}}
                    onEndEditing={(e) => handleValidUserEmail(e.nativeEvent.text)}
                />  
                {data.check_textInputChange ? 
                <Animatable.View 
                    animation='bounceIn'>
                <Feather
                    name="check-circle"
                    color="#b09154"
                    size={20}
                />   
                </Animatable.View>
                : null}        
            </View>

            {/* User Validation */}
            {data.isValidUserEmail ? null : 
                <Animatable.View animation='fadeInLeft' duration={500}>
                <Text style={styles.errorMsg}>Email address require</Text>
                </Animatable.View>
            }

            {/* Password field */}
            <Text style={[styles.text_footer, {marginTop : 10}]}>Password</Text>
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
                    // onChangeText={(userPassword) => handlePasswordChange(userPassword)}
                    onChangeText={(userPassword) => {setPassword(userPassword); handlePasswordChange(userPassword) }}
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
            
            {/* Confirm password field */}
            <Text style={[styles.text_footer, {marginTop : 10}]}>Conform Password</Text>
            <View style={styles.action}>
                <FontAwesome
                    name="lock"
                    color="#05375a"
                    size={20} 
                /> 
                <TextInput
                    placeholder='Conform Your Password'
                    secureTextEntry={data.conform_secureTextEntry ? true : false}
                    style={styles.textInput} 
                    autoCapitalize='none'
                    onChangeText={(userConfirmedPassword) => handleConfirmPasswordChange(userConfirmedPassword)}
                    onEndEditing={(e) => handleConfirmPasswordChange(e.nativeEvent.text)}
                />  
                {data.checkConformPassword_textInputChange ? 
                    <TouchableOpacity
                        onPress={updateConformSecureTextEntry}> 
                        {data.conform_secureTextEntry ?
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
            {data.isValidConfirmedPassword ? null : 
                <Animatable.View animation='fadeInLeft' duration={500}>
                <Text style={styles.errorMsg}>Password doesn't match</Text>
                </Animatable.View>
            }

            {/* Button Field */}
            <View style={styles.button}>
                <LinearGradient
                    colors={['#b09154', '#b09154']}
                    style={styles.signIn} >
                          <TouchableOpacity
                    // onPress={() => (alert('Congratulations! You are now registered'))}>
                    onPress={() => register(email, password)}>
                        <Text style={[styles.textSign, {color:'#fff'}]}>Sign Up</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('SignInScreen')}
                    style={[styles.signIn, {
                        borderColor:'#b09154',
                        borderWidth:1,
                        marginTop:10
                    }]}>
                        <Text style={[styles.textSign,{
                            color:'#b09154'
                        }]}>Sign In</Text>
                    </TouchableOpacity>
            </View>
            </Animatable.View>
        </View>
    )
}

export default SignUpScreen;

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
        flex: 11,
        backgroundColor: '#ebd9b5',
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
        marginTop: 20
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
