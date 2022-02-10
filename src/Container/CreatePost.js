import { View, Text, StyleSheet, TextInput, Image, Pressable, } from 'react-native'
import React, { useState } from 'react'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';

const CreatePost = ({navigation}) => {
    const [image, setImage] = useState(null);

    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
          width: 1200,
          height: 780,
          cropping: true,
        }).then((image) => {
          console.log(image);
          const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
          setImage(imageUri);
        });
      };
    
      const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
          width: 1200,
          height: 780,
          cropping: true,
        }).then((image) => {
          console.log(image);
          const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
          setImage(imageUri);
        });
      };
  return (
    <View style={styles.Container}>
         <View style={styles.InputWrapper}> 
         {image != null ? <Image source={{uri: image}} style={styles.AddImage}  /> : null}
      <TextInput 
      placeholder='Whats on Your Mind?'
      multiline
      numberOfLines={6}
      style={styles.inputField}
      />
        < Pressable
              style={styles.SubmitBtn} onPress={() => navigation.openDrawer()}>
             <Text style={styles.SubmitBtnText}>Post</Text>
              </Pressable>
            
      </View> 
      <ActionButton buttonColor="#b09154">
          <ActionButton.Item buttonColor='#ebd9b5' title="Take Photo" 
          onPress={takePhotoFromCamera}>
            <Icon name="camera" size={25} color='#b09154' style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#ebd9b5' title="Choose Photo" 
           onPress={choosePhotoFromLibrary}>
            <Icon name="md-images" size={25} color='#b09154' style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
    </View>
  )
}

export default CreatePost

const styles = StyleSheet.create({
Container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
    },
InputWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#2e64e515',
    },
inputField: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    textAlign: 'center',
    width:'90%',
    marginBottom: 15,
},
AddImage: {
    width: '100%',
    height: 250,
    marginBottom: 15,
},
StatusWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
},
SubmitBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#2e64e515',
    borderRadius: 5,
    padding: 10 ,
},

SubmitBtnText: {
    fontSize: 18,
    fontFamily: 'Lato-Bold',
    fontWight: 'bold',
    color: '#b09154',
}
})