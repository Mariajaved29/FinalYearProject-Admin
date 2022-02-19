import React from 'react';
import {
    View,
    Text, 
    StyleSheet, 
    KeyboardAvoidingView, 
    TouchableOpacity,
    TextInput
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

export default class AddListModal extends React.Component {
    state ={
        name: ''
    }

    createTodo = () => {
        const {name} = this.state

        const list = {name};
        this.props.addList(list);
        
        this.setState({name: ''})
        this.props.closeModal();
    }

    render() {
        return(
            <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <TouchableOpacity style={{position: 'absolute', top: 50, right: 32}} 
            onPress={this.props.closeModal}>
                <AntDesign name='close' size={24} color='#b09154' />
            </TouchableOpacity>

            <View style={{alignSelf: 'stretch', marginHorizontal: 32}}>
                <Text style={styles.title}>کلاس کا نام شامل کریں۔</Text>
                <TextInput style={styles.input} placeholder="List Name"
                onChangeText={text => this.setState({name: text})} />
                <TouchableOpacity style={[styles.create, {backgroundColor: '#b09154'}]}
                onPress={this.createTodo}>
                    <Text style={{color: '#fff', fontWeight: '600'}}>Create</Text>
                </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
        fontWeight: '800',
        color: '#b09154',
        alignSelf: 'center',
        marginBottom: 16

    },
    input : {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#ebd9b5',
        borderRadius: 6,
        height: 50,
        marginTop: 8,
        paddingHorizontal: 16,
        fontSize: 18
    },
    create: {
        marginTop: 24,
        height: 50,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    }
})