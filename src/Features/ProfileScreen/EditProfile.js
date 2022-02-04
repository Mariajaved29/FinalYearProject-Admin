import React, {useEffect, useContext, useState} from 'react'
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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import ImagePicker from 'react-native-image-crop-picker';

import { AuthContext } from '../../Navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const EditProfile = ({navigation}) => {

    // this is for passing values Editprofile to ProfileScreen
    const {user} = useContext(AuthContext);
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);
    const [userData, setUserData] = useState(null);
    // End

    const getUser = async() => {
      await firestore()
      .collection('users')
      .doc(user.uid)
      .get()
      .then((documentSnapshot) => {
        if( documentSnapshot.exists ) {
          console.log('User Data', documentSnapshot.data());
          setUserData(documentSnapshot.data());
        }
      })
    }

    const handleUpdate = async() => {
      let imgUrl = await uploadImage();
  
      if( imgUrl == null && userData.userImg ) {
        imgUrl = userData.userImg;
      }

      const updatedUserData = {
        userImg: imgUrl || '',
        fname: userData.fname || '',
        lname: userData.lname || '',
        email: userData.email || '',
        phone: userData.phone || '',
        location: userData.location || '',
        Course: userData.Course || '',
        about: userData.about || '',
      }

      console.log({updatedUserData})
  
      firestore()
      .collection('users')
      .doc(user.uid)
      .update(updatedUserData)
      .then(() => {
        console.log('User Updated!');
        Alert.alert(
          'Profile Updated!',
          'Your profile has been updated successfully.'
        );
      })
    }

    const uploadImage = async () => {
      if( image == null ) {
        return null;
      }
      const uploadUri = image;
      let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
  
      // Add timestamp to File Name
      const extension = filename.split('.').pop(); 
      const name = filename.split('.').slice(0, -1).join('.');
      filename = name + Date.now() + '.' + extension;
  
      setUploading(true);
      setTransferred(0);
  
      const storageRef = storage().ref(`photos/${filename}`);
      const task = storageRef.putFile(uploadUri);
  
      // Set transferred state
      task.on('state_changed', (taskSnapshot) => {
        console.log(
          `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
        );
  
        setTransferred(
          Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
            100,
        );
      });
  
      try {
        await task;
  
        const url = await storageRef.getDownloadURL();
  
        setUploading(false);
        setImage(null);
  
        Alert.alert(
        //   'Image uploaded!',
        //   'Your image has been uploaded to the Firebase Cloud Storage Successfully!',
        );
        return url;
  
      } catch (e) {
        console.log(e);
        alert(e)
        return null;
      }
  
    };

    useEffect(() => {
      getUser();
    }, []);
  
    // profile picture editor field
    const takePhoto = () => {
      ImagePicker.openCamera({
        compressImageMaxWidth: 300,
        compressImageMaxHeight: 300,
        cropping: true,
        compressImageQuality: 0.7,
      }).then((image) => {
        console.log(image);
        const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
        setImage(imageUri);
        bs.current.snapTo(1);
      });
    }
    const ChooseFromGallery = () => {
      ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
        compressImageQuality: 0.7,
      }).then((image) => {
        console.log(image);
        const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
        setImage(imageUri);
        bs.current.snapTo(1);
        
      });
    };
    // End

  // this code is for Bottom sheet 
  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems:'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity style={styles.panelButton}
      onPress={takePhoto}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton}
      onPress={ChooseFromGallery}>
        <Text style={styles.panelButtonTitle}>Upload Photo from Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton}
      onPress={() => bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
      <View style={styles.header}>
        <View style={styles.panelHeader}>
          <View style={styles.panelHandle}/>

        </View>
      </View>
    );
   const bs = React.createRef();
   const fall = new Animated.Value(1);
  // End

  return (
    <ScrollView>
      <View style={styles.container}>
      <StatusBar backgroundColor='#729875' barStyle='light-content' />
      {/* Bottom sheet */}
      <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
        />
        <Animated.View 
        style={{
          margin: 20,
          opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
        }}>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity 
              onPress={() => bs.current.snapTo(0) }>
                <View style={{
                  height: 100,
                  width: 100,
                  borderRadius: 15,
                  justifyContent:'center',
                  alignItems: 'center'
                }}>
                <ImageBackground
                source={{
                  uri: image
                  ? image
                  : userData
                  ? userData.userImg ||
                    'https://cdn2.iconfinder.com/data/icons/people-round-icons/130/arab-512.png'
                    : 'https://cdn2.iconfinder.com/data/icons/people-round-icons/130/arab-512.png',
                }}
                style={{height:100, width:100}}
                imageStyle={{borderRadius:15}}
                >
                  <View 
                    style={{
                      flex:1,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Icon name='camera' size={20} color='#000'
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                    justifyContent: 'center',
                    // borderWidth: 1,
                    // borderColor: '#fff',
                    borderRadius: 10,
                  }} 
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text>{userData ? userData.fname : ''} {userData ? userData.lname : ''}</Text>
          </View>
          {/* End */}

          {/* TextInput fields of Edit profile */}
         
        <View style={styles.action}>
          <FontAwesome name='user' size={20} />
          <TextInput
          placeholder='First Name'
          placeholderTextColor='#666666'
          autoCorrect={false}
          onChangeText={(txt) => setUserData({...userData, fname: txt})}
          value={userData ? userData.fname : ''}
          style={styles.textInput}
        />
        </View>
        <View style={styles.action}>
          <FontAwesome name='user' size={20} />
          <TextInput
          placeholder='Last Name'
          placeholderTextColor='#666666'
          autoCorrect={false}
          value={userData ? userData.lname : ''}
          onChangeText={(txt) => setUserData({...userData, lname: txt})}
          style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name='globe' size={20} />
          <TextInput
          placeholder='Location'
          placeholderTextColor='#666666'
          autoCorrect={false}
          value={userData ? userData.location : ''}
          onChangeText={(txt) => setUserData({...userData, location: txt})}
          style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name='envelope' size={20} />
          <TextInput
          placeholder='Email'
          placeholderTextColor='#666666'
          keyboardType='email-address'
          autoCorrect={false}
          value={userData ? userData.email : ''}
          onChangeText={(txt) => setUserData({...userData, email: txt})}
          style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name='phone' size={20} />
          <TextInput
          placeholder='Phone no.'
          placeholderTextColor='#666666'
          keyboardType='number-pad'
          autoCorrect={false}
          value={userData ? userData.phone : ''}
          onChangeText={(txt) => setUserData({...userData, phone: txt})}
          style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name='book' size={20} />
          <TextInput
          placeholder='Course'
          placeholderTextColor='#666666'
          autoCorrect={false}
          value={userData ? userData.course : ''}
          onChangeText={(txt) => setUserData({...userData, course: txt})}
          style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name='bookmark' size={20} />
          <TextInput
          placeholder='About'
          multiline={true}
          numberOfLines={2}
          placeholderTextColor='#666666'
          autoCorrect={false}
          value={userData ? userData.about : ''}
          onChangeText={(txt) => setUserData({...userData, about: txt})}
          style={styles.textInput}
          />
        </View>
        {/* End */}

        {/* Submit Button */}
        <TouchableOpacity style={styles.commandButton}
        // onPress={() => navigation.navigate('ProfileScreen')
        onPress={ handleUpdate }
        // , { firstNameData: firstname, })
        >
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
      {/* End */}
      </Animated.View>
    </View>
    </ScrollView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#729875',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 15,
    color: 'grey',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#729875',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});

