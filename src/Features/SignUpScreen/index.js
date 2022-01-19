import React from 'react';
import { StyleSheet,
    Text, 
    View, 
    TouchableOpacity, 
    Dimensions,
    Platform,
    TextInput,
    StatusBar
    }
   from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

const SignUpScreen = ({navigation}) => {

    const[data, setData] = React.useState({
        username:'',
        email:'',
        password: '',
        conform_password:'',
        check_textInputChange:'',
        secureTextEntry: true,
        conform_secureTextEntry: true
    })

    const userInputChange = (val) => {
        if(val.length != 0 ) {
            setData({
                ...data,
                username:val,
                checkUser_textInputChange: true
            })
        } else {
            setData({
                ...data,
                username:val,
                checkUser_textInputChange: false
            })
        }
    }

    const emailInputChange = (val) => {
        if(val.length != 0 ) {
            setData({
                ...data,
                email:val,
                check_textInputChange: true
            })
        } else {
            setData({
                ...data,
                email:val,
                check_textInputChange: false
            })
        }
    }

    const handlePasswordChange = (val) => {
        if(val.length != 0 ) {
        setData({
            ...data,
            password: val,
            checkPassword_textInputChange: true
        })
    } else {
        setData({
            ...data,
            password:val,
            checkPassword_textInputChange: false
        })
    }
}
    const handleConformPasswordChange = (val) => {
        if(val.length != 0 ) {
            setData({
                ...data,
                conform_password: val,
                checkConformPassword_textInputChange: true
            })
        } else {
            setData({
                ...data,
                conform_password:val,
                checkConformPassword_textInputChange: false
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
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#729875' barStyle='light-content' />
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
                    placeholder='Your username'
                    style={styles.textInput} 
                    autoCapitalize='none'
                    onChangeText={(val) => userInputChange(val)}
                />  
                {data.checkUser_textInputChange ? 
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
                 {/* Email Field */}
            <Text style={[styles.text_footer, {marginTop : 10}]}>Email</Text>
            <View style={styles.action}>
                <FontAwesome
                    name="user-o"
                    color="#05375a"
                    size={20} 
                /> 
                <TextInput
                    placeholder='Your Email'
                    style={styles.textInput} 
                    autoCapitalize='none'
                    onChangeText={(val) => emailInputChange(val)}
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
                    onChangeText={(val) => handlePasswordChange(val)}
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
            {/* Conform password field */}
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
                    onChangeText={(val) => handleConformPasswordChange(val)}
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
            {/* Button Field */}
            <View style={styles.button}>
                <LinearGradient
                    colors={['#729875', '#729875']}
                    style={styles.signIn} >
                          <TouchableOpacity
                    onPress={() => (alert('Congratulations! You are now registered'))}>
                        <Text style={[styles.textSign, {color:'#fff'}]}>Sign Up</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('SignInScreen')}
                    style={[styles.signIn, {
                        borderColor:'#729875',
                        borderWidth:1,
                        marginTop:10
                    }]}>
                        <Text style={[styles.textSign,{
                            color:'#729875'
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
