import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { IconButton, Title } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import FormInput from '../../Components/FormInput';
import FormButton from '../../Components/FormButton';
import useStatusBar from '../../Common/utils';
const { width, height } = Dimensions.get('screen');

export default function AddRoomScreen({ navigation }) {
    useStatusBar('dark-content');

    const [roomName, setRoomName] = useState('');
    /**
     * Create a new Firestore collection to save threads
     */
    function handleButtonPress() {
        if (roomName.length > 0) {
            firestore()
                .collection('chatbox')
                .add({
                name: roomName,
                latestMessage: {
                    text: `You have joined the room ${roomName}.`,
                    createdAt: new Date().getTime()
                }
                })
                .then(docRef => {
                    docRef.collection('chats').add({
                        text: `You have joined the room ${roomName}.`,
                        createdAt: new Date().getTime(),
                        system: true
                });

                navigation.navigate('HomeScreen');
            });
        }
    }

    return (
        <View style={styles.rootContainer}>
            <View style={styles.closeButtonContainer}>
                <IconButton
                    icon='close-circle'
                    size={36}
                    color='#b09154'
                    onPress={() => navigation.goBack()}
                />
            </View>
            <View style={styles.innerContainer}>
                <Title style={styles.title}>Create a new chat room</Title>
                <FormInput
                    labelName='Room Name'
                    value={roomName}
                    onChangeText={text => setRoomName(text)}
                    clearButtonMode='while-editing'
                />
                <FormButton
                    title='Create'
                    modeValue='contained'
                    labelStyle={styles.buttonLabel}
                    onPress={() => handleButtonPress()}
                    disabled={roomName.length === 0}

                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1
    },
    closeButtonContainer: {
        position: 'absolute',
        top: 30,
        right: 0,
        zIndex: 1
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        marginBottom: 10
    },
    buttonLabel: {
        fontSize: 22
    },
    input: {
        marginTop: 10,
        marginBottom: 10,
        width: width / 1.5,
        height: height / 15
      }
});