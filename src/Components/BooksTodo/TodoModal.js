import React from "react";
import {
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    TouchableOpacity, 
    FlatList, 
    KeyboardAvoidingView,
    TextInput,
    Keyboard
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
export default class TodoModal extends React.Component {
    state = {
       newTodo: ''
    };

    toggleTodoComplete = index => {
        let list = this.props.list
        list.todos[index].completed = !list.todos[index].completed;

        this.props.updateList(list);
    }

    addTodo = () => {
        let list = this.props.list
        list.todos.push({title: this.state.newTodo, completed: false})

        this.props.updateList(list)
        this.setState({newTodo: ''});

        Keyboard.dismiss();
    };
    renderTodo = (todo, index) => {
        return (
            <View style={styles.todoContainer}>
                <TouchableOpacity onPress={() => this.toggleTodoComplete(index)}>
                    <Ionicons name={todo.completed ? 'square' : 'square-outline'} size={24}
                    color= '#000' style={{width: 32, }} />
                </TouchableOpacity>
                <Text 
                style={[styles.todoTitle, {textDecorationLine: todo.completed ? 'line-through' : 'none' }]}>
                    {todo.title}
                </Text>

            </View>
        )
    }
    render() {
        const list = this.props.list;
        const taskCount = list.todos.length;
        const completedCount = list.todos.filter(todo => todo.completed).length
        return (
            <KeyboardAvoidingView style={{flex: 1}} behavior="padding"> 
           <SafeAreaView style={styles.container} >
               <TouchableOpacity style={{position: 'absolute', top: 20, right: 32, zIndex: 10 }}
               onPress={this.props.closeModal}>
                   <AntDesign name='close' size={24} color='#b09154'/>
               </TouchableOpacity>
               <View style={[styles.section, styles.header, {borderBottomColor: '#b09154'}]}>
                   <View>
                       <Text style={styles.title}>{list.name}</Text>
                       
                   </View>
               </View>
               <View style={[styles.section, {flex: 3}]}>
                   <FlatList 
                        data={list.todos}
                        renderItem={({item, index}) => this.renderTodo(item, index)}
                        keyExtractor={item => item.title}
                        contentContainerStyle={{paddingHorizontal: 32, paddingVertical: 64, }}
                        showsVerticalScrollIndicator={false}
                    />    

               </View>
               <View style={[styles.section, styles.footer]}
               >
                   <TextInput style={[styles.input, {borderColor: '#b09154'}]} 
                   onChangeText={text => this.setState({newTodo: text})}
                   value={this.state.newTodo}/>
                   <TouchableOpacity style={[styles.addTodo, {backgroundColor: '#b09154'}]}
                   onPress={() => this.addTodo()}>
                       <AntDesign name='plus' size={16} color= '#fff' />
                   </TouchableOpacity>
               </View>
           </SafeAreaView>
           </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    section: {
        flex: 1,
        alignSelf: 'stretch'
    },
    header: {
        justifyContent: 'flex-end',
        marginLeft: 64,
        borderBottomWidth: 3,
        marginBottom: 10
    },
    title:{
        fontSize: 30,
        fontWeight: '800',
        color: '#000',
        padding: 10
    },
    footer: {
        paddingHorizontal: 32,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        height: 48,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 6,
        marginRight: 8,
        paddingHorizontal: 8
    },
    addTodo: {
        borderRadius: 4,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    todoContainer:{
        paddingVertical: 16,
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    todoTitle:{
        fontWeight: '800',
        color: '#000',
        fontSize: 18,
        padding: 5
    }
})