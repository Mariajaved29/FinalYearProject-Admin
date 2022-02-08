import React from 'react';
  import { 
    View, 
    Text,
     StyleSheet, 
     Image, 
     ScrollView, 
     TouchableOpacity, 
     StatusBar
     } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
      <StatusBar backgroundColor='#729875' barStyle='light-content' />
        <View style={styles.header}>
          <Image source={require('../../assets/masjid.png')} style={{height: 330, width: 450}}></Image>
        </View>
            
        <View style={styles.footer}>
        {/* Main Box start */}
        <View style={styles.mainBox}>
          <View style={styles.iconBox}> 
           <View style={styles.icon}>
              <TouchableOpacity onPress={() => navigation.navigate('Books')}>
                <MaterialCommunityIcons name= 'book-multiple' color= '#729875' size= {40} />
                  </TouchableOpacity>
                </View>
                <Text style={styles.mainBox_text}>Books</Text>
              </View>
              <View style={styles.iconBox}> 
              <View style={styles.icon}>
                <TouchableOpacity onPress={() => navigation.navigate('TimeTable')}>
                  <MaterialCommunityIcons name= 'timetable' color= '#729875' size= {40} />
                </TouchableOpacity>
              </View>
                <Text style={styles.mainBox_text}>TimeTable</Text>
              </View>
              <View style={styles.iconBox}> 
                <View style={styles.icon}>
                  <TouchableOpacity onPress={() => navigation.navigate('MessagesScreen')}>
                    <MaterialCommunityIcons name= 'chat-processing' color= '#729875' size= {40} />
                  </TouchableOpacity>
                </View>
                <Text style={styles.mainBox_text}>Messages</Text>
              </View> 
            </View>            
            <View>
            {/* Main Box End */}       
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#fff'
    },
    header: {
        flex: 1,
        height: 300
    },
    footer: {
        flex: 3,
        backgroundColor: '#edf5f0',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 20,
        paddingHorizontal: 30,
        paddingVertical: 30
    },
    mainBox: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      margin: 30
    },
    mainBox_text: { 
      color: '#729875', 
      fontWeight: 'bold', 
      fontSize: 15, 
      textAlign: 'center' 
    },
    icon: {
      backgroundColor: '#fff',
      borderRadius: 50, 
      padding:10, 
      margin: 10
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
    heading: {
      fontSize: 25, 
      color: '#729875', 
      marginTop: 5, 
      marginBottom: 5,
      marginLeft: 50,
      marginRight:30
      // fontWeight: 'bold'
     },
  });
  export default HomeScreen;

