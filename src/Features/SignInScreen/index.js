import React, { useContext, useState, useMemo } from 'react';
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
import { Button } from 'react-native-paper';

const SignInScreen = ({navigation}) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errortext, setErrortext] = useState('');
    const [disabled, setDisabled] = useState('');

    const { login } = useContext(AuthContext);

    const[data, setData] = React.useState({
        userEmail:'',
        userPassword: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUserEmail: true,
        isValidPassword: true
    })
    //  these functions are used for userEmail
    const textInputChange = (userEmail) => {
        if(userEmail.trim().length >= 4) {
            setData({
                    ...data,
                    userEmail: userEmail,
                    isValidUserEmail: true,
                    check_textInputChange: true
                })
            } else {
                setData({
                    ...data,
                    userEmail:userEmail,
                    isValidUserEmail: false,
                    check_textInputChange: false
                })}
        }
        // These functions are used for password
        const handlePasswordChange = (userPassword) => {
            if(userPassword.trim().length >= 8) {
            setData({
                ...data,
                password: userPassword,
                checkPassword_textInputChange: true,
                isValidPassword: true,
            })
        } else {
            setData({
                ...data,
                password:userPassword,
                checkPassword_textInputChange: false,
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

    const handleValidUser = (userEmail) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if( userEmail.length >= reg.test(userEmail) ) {
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

    const handleSubmitPress = (email, password) => {
        setErrortext('');
        if (!email) {
          alert('Please fill Email');
          return;
        }
        if (!password) {
          alert('Please fill Password');
          return;
        }
            // If server response message same as Data Matched
        else{
            setErrortext(Response.error);
            console.log('Please check your email id or password');
        }
    };

    const buttonDisabled = () => {
        if (data.userEmail.length === 0 && data.userPassword.length === 0 ) { 
            setDisabled({
            disabled: true
        })
        } else {
            setDisabled({
            disabled: false
            })
        }
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#b09154' barStyle='light-content' />
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
                    // onChangeText={(userEmail) => textInputChange(userEmail)}
                    onChangeText={(userEmail) => {setEmail(userEmail); textInputChange(userEmail)}}
                    onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
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
            <Text style={styles.errorMsg}>Email address required </Text>
            </Animatable.View>
            }
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
                    onChangeText={(userPassword) => {setPassword(userPassword); handlePasswordChange(userPassword)}}
                    // onChangeText={(val) => handlePasswordChange(val)}
                    onEndEditing={(e) => handlePasswordChange(e.nativeEvent.text)}
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
                <Button
                mode='contained'
                 style={styles.signIn} 
                 color='#b09154'
                    //  {/* <TouchableOpacity */}
                     
                disabled={data.userEmail.length === 0 && data.userPassword.length === 0 ? true : false} 
                           
                    onPress={() => {login(email, password); 
                        handleSubmitPress(email, password)}}
                    
                    >
                       <Text style={[styles.textSign, {color: '#fff'}]}>Sign In</Text> 
                        {/* <Text style={[styles.textSign, {color: '#fff'}]}>Sign In</Text>
                    </TouchableOpacity> */}
                </Button>
                    <Button
                    onPress={() => navigation.navigate('SignUpScreen')}
                    style={[styles.signIn, {
                        borderColor:'#b09154',
                        borderWidth:1,
                        marginTop:15
                    }
                    ]}
                    >
                        <Text style={[styles.textSign,{
                            color:'#b09154'
                        }]}>Sign Up</Text>
                    </Button>
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
        fontWeight: 'bold',
    }
  });
