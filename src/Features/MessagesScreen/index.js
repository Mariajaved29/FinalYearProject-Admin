import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput, 
    TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const Messages = ({navigation}) => {
    // const [sms, setSms]= React.useState('');

    // const sentMessage = () => {
    //   setSms(sms)
    // }
        return (
            <View style={{ flex: 1, backgroundColor: '#ededed', }}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ paddingHorizontal: 20, flex: 1 }}>
 
                        <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-between', }}>
                            <View style={{ flex: 1, margin: 15 , marginRight:35,}}>
                                <View style={(styles.boxRight)}>
                                    <Text style={{ color: 'black', margin: 20 }}>Hello Ma'am</Text>
                                </View>
                                <View style={(styles.triangleCorners)} />
                            </View>
                            <View style={{ flex: 1, marginTop: 100, marginLeft: 5 }}>
                                <View style={(styles.box)}>
                                    <Text style={{ color: 'white', margin: 20, }}>Hello</Text>
                                </View>
                                <View style={(styles.triangleCorner)} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.footerContainer}>
                    <View style={{ width: '85%', }}>
                        <View style={[styles.textInput, { backgroundColor: '#ededed', }]}>
                            <TextInput 
                            style={styles.inputText} 
                            placeholder="type message here.." 
                            // onChange={sentMessage} 
                            /> 
                        </View>
                    </View>
                    <TouchableOpacity 
                 onPress={() => navigation.navigate('Home')}
                    >
                    <LinearGradient
                    colors={['#729875', '#729875']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>Send</Text>
                </LinearGradient>
                    </TouchableOpacity> 
                </View>
            </View>
        )
    }


export default Messages;
const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    fonts: {
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
        textAlign: "center",
        fontWeight: '700'
    },
    header:
    {
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: 80,
    },
    card: {
        borderRadius:10,
        flexDirection: 'row',
        height: 100,
        width: "100%",
        backgroundColor: "#FFFFFF",
        padding: 10,
    },
    crdImg: {
        borderRadius:10,
        width: 70,
        height: 70,
        borderColor: '#FFD83A',
        marginRight: 10,
        marginLeft: 5,
        marginTop: 5,
        borderWidth: 2
    },

    footerContainer: {
        ...Platform.select({ ios: { zIndex: 1, paddingBottom: 30 } }), shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 10,
        elevation: 20,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 21,
        backgroundColor: 'white',
        alignItems: 'center'

    },
    cover: {
        backgroundColor: "rgba(0,0,0,.5)",
    },

    profileImg: {
        width: 40,
        height: 40,
        marginRight: 10,
        marginLeft: 5,
        marginTop: 10,
        borderWidth: 2,
        borderRadius: 50
    },
    chat: {
        backgroundColor: 'white',
        padding: 20,
        flex: 1,
        borderColor: '#ABABAB',
        borderWidth: 1,
    },
    box: {
        width: 100 * 2,
        // height: 70,
        backgroundColor: '#729875',
        borderRadius:10,

    },
    boxRight: {
        width: 100 * 2,
        borderRadius:10,
        // height: 70,
        backgroundColor: 'white'
    },
    triangleCorner: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 20,
        borderTopWidth: 20,
        borderRightColor: 'transparent',
        borderTopColor: '#729875',
        marginTop:-8
    },

    triangleCorners: {
        width: 0,
        height: 0,
        // backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 20,
        borderTopWidth: 20,
        borderRightColor: 'transparent',
        borderTopColor: 'white',
        transform: [
            { rotate: '90deg' }
        ],
        marginLeft: 180,
        marginTop:-8

    },
    signIn: {
      width: 55,
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 5,
      borderRadius: 10,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }

})





