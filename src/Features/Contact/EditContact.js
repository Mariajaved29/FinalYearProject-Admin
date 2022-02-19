import React from 'react'
import { 
   View,
   Text,
   TouchableOpacity,
   ImageBackground,
   StyleSheet,
   TextInput,
   ScrollView,
   StatusBar,
   Alert,

   } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const EditContact = ({navigation}) => {
  return (
    <ScrollView>
    <View style={styles.container}>
    <StatusBar backgroundColor='#b09154' barStyle='light-content' />
    <Text style={{fontSize: 20,textAlign: 'center', color: 'grey', marginVertical: 40, fontWeight: 'bold'}}>Edit Your Contact Details</Text>
    <View style={{marginHorizontal: 30, marginVertical: 50}}>
    <View style={styles.action}>
          <FontAwesome name='user-o' size={20} />
          <TextInput
          placeholder='Name'
          placeholderTextColor='#666666'
          autoCorrect={false}
          onChangeText={() => {}}
          style={styles.textInput}
        />
        </View>
        <View style={styles.action}>
          <Icon name='call-outline' size={20} />
          <TextInput
          placeholder='Phone no.'
          placeholderTextColor='#666666'
          keyboardType='number-pad'
          autoCorrect={false}
          onChangeText={() => {}}
          style={styles.textInput}
        />
        </View>
        <View style={styles.action}>
          <FontAwesome name='whatsapp' size={20} />
          <TextInput
          placeholder='Whatsapp no.'
          placeholderTextColor='#666666'
          keyboardType='number-pad'
          autoCorrect={false}
          onChangeText={() => {}}
          style={styles.textInput}
        />
        </View>
        <View style={styles.action}>
          <FontAwesome name='envelope-o' size={20} />
          <TextInput
          placeholder='Email'
          placeholderTextColor='#666666'
          keyboardType='email-address'
          autoCorrect={false}
          onChangeText={() => {}}
          style={styles.textInput}
        />
        </View>
        <View style={styles.action}>
          <Icon name='location-outline' size={20} />
          <TextInput
          placeholder='Location'
          placeholderTextColor='#666666'
          multiline={true}
          numberOfLines={2}
          autoCorrect={false}
          onChangeText={() => {}}
          style={styles.textInput}
        />
        </View>
        </View>
        <TouchableOpacity style={styles.commandButton}
          onPress={() => navigation.navigate('Contacts')
          // , { firstNameData: firstname, })
        } 
        >
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>    
  )
}

export default EditContact;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    action: {
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
       
      },
      textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
      },
      commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 20,
        alignSelf: 'center',
        width: '70%',
        elevation:10,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 5,
      },
      panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#b09154',
    
      },
})