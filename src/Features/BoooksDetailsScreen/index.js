import { StyleSheet, Text, View, TouchableOpacity, FlatList, Modal } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'
import React from "react";
import TodoList from "../../Components/BooksTodo/TodoList";
import AddListModal from "../../Components/BooksTodo/AddListModal";
import {tempData} from "../../Components/BooksTodo/tempData"

export default class BooksDetailsScreen extends React.Component {
  state={
    addTodoVisible : false,
    lists: tempData
  }

  toggleAddTodoModal() {
    this.setState({addTodoVisible: !this.state.addTodoVisible})
  }

  renderList = list => {
    return <TodoList list={list} updateList={this.updateList} />
  }
 
  addList = list => {
    this.setState({
      lists: 
      [...this.state.lists, 
        {...list, id: this.state.lists.length + 1, todos: [] }] })
  }

  updateList = list => {
    this.setState({
      lists: this.state.lists.map(item => {
        return item.id === list.id ? list : item
      })
    })
  }
  render() {
    return (
      <View style={styles.container} >
        <Modal 
        animationType="slide" 
        visible={this.state.addTodoVisible}
        onRequestClose={() => this.toggleAddTodoModal()}
        >
          <AddListModal  closeModal={() => this.toggleAddTodoModal()} 
          addList={this.addList}/>
        </Modal>
        <View style={{ flexDirection: 'row'}}>
         <View style={styles.divider} />
         <View style={styles.title}>
          <Text style={{ fontWeight: '800', fontSize: 20, color: '#b09154' }}>کتابوں کی تفصیلات</Text>
         </View>
         <View style={styles.divider} />
         </View>
         <View style={{marginVertical: 48}}>
           <TouchableOpacity style={styles.addList} 
           onPress={() => this.toggleAddTodoModal()}>
             <AntDesign name="plus" size={20} color='#b09154' />
           </TouchableOpacity>
         <Text style={styles.add}>کلاس کا نام شامل کریں۔</Text>
         </View>
         <View style={{height: 275, paddingLeft: 32, width: '100%'}}>
           <FlatList 
           data={this.state.lists}
           keyExtractor={item => item.name}
           vertical={true}
           showsVerticalScrollIndicator={false}
           renderItem = {({item}) => 
           this.renderList(item)}
           keyboardShouldPersistTaps='always'
           />
         </View>
        </View>
    );
  }
}
   


const styles = StyleSheet.create({
   container:{
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center'
   },
   divider:{
     backgroundColor: '#ebd9b5',
     height: 1,
     flex: 1,
     alignSelf: 'center'
   },
   title: {
     fontSize: 30,
     fontWeight: '800',
     color: '#ebd9b5',
     paddingHorizontal: 64
   },
   addList: {
     borderWidth: 2,
     borderColor: '#ebd9b5',
     borderRadius: 4,
     padding: 16,
     alignItems: 'center',
     justifyContent: 'center'
   },
   add: {
     color: '#b09154',
     fontWeight: '600',
     fontSize: 16,
     marginTop: 8,
     
   }
});

