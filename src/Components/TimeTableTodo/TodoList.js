import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Modal  } from 'react-native'
import TodoModal from './TodoModal'

export default class TodoList extends React.Component {
    state = {
        showListVisible: false
    }

    toggleListModal() {
        this.setState({showListVisible: !this.state.showListVisible})
    }
    render(){

        const list = this.props.list;
        return(
            <View>
                <Modal
                animationType='slide'
                visible={this.state.showListVisible}
                onRequestClose={() => this.toggleListModal()}
                >
                    <TodoModal list={list} closeModal={() => this.toggleListModal()} 
                    updateList={this.props.updateList}
                    />
                </Modal>
            <TouchableOpacity style={[styles.listContainer , {backgroundColor: '#b09154'}]}
            onPress={() => this.toggleListModal()}>
            <Text style={styles.listTitle} numberOfLines={1}>
                {list.name}
            </Text>
            </TouchableOpacity>   
            </View> 
         )
    }   
}

const styles = StyleSheet.create ({
    listContainer:{
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 6,
        marginHorizontal: 10,
        alignItems: 'center',
        width:"90%",
        marginBottom: 10
    },
    listTitle:{
        fontSize: 24,
        fontWeight: '700',
        color: '#fff',
     
    }
})