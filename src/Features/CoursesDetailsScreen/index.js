import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    ScrollView } from 'react-native';
import React from 'react';

const CoursesDetailsScreen = () => {
  return (
      <ScrollView>
    <View style={styles.card}>
        <View style={styles.cardContent}>
            <Text style={styles.text}>Tafseer ul Quran</Text>
            <TouchableOpacity
             onPress={() => navigation.navigate('SignUpScreen')}
             style={{ marginTop:15 }} >
            <Text style={{color: 'grey', textAlign: 'center', }}>click here to read more</Text>
            </TouchableOpacity>
        </View>
    </View>
     <View style={styles.card}>
     <View style={styles.cardContent}>
         <Text style={styles.text}>Hifz ul Quran</Text>
         <TouchableOpacity
          onPress={() => navigation.navigate('SignUpScreen')}
          style={{ marginTop:15 }} >
         <Text style={{color: 'grey', textAlign: 'center'}}>click here to read more</Text>
         </TouchableOpacity>
     </View>
 </View>
 <View style={styles.card}>
     <View style={styles.cardContent}>
         <Text style={styles.text}>Tajweed ul Quran</Text>
         <TouchableOpacity
          onPress={() => navigation.navigate('SignUpScreen')}
          style={{ marginTop:15 }} >
         <Text style={{color: 'grey', textAlign: 'center'}}>click here to read more</Text>
         </TouchableOpacity>
     </View>
 </View>
 <View style={styles.card}>
        <View style={styles.cardContent}>
            <Text style={styles.text}>Tafseer ul Quran</Text>
            <TouchableOpacity
             onPress={() => navigation.navigate('SignUpScreen')}
             style={{ marginTop:15 }} >
            <Text style={{color: 'grey', textAlign: 'center'}}>click here to read more</Text>
            </TouchableOpacity>
        </View>
    </View>
     <View style={styles.card}>
     <View style={styles.cardContent}>
         <Text style={styles.text}>Hifz ul Quran</Text>
         <TouchableOpacity
          onPress={() => navigation.navigate('SignUpScreen')}
          style={{ marginTop:15 }} >
         <Text style={{color: 'grey', textAlign: 'center'}}>click here to read more</Text>
         </TouchableOpacity>
     </View>
 </View>
 <View style={styles.card}>
     <View style={styles.cardContent}>
         <Text style={styles.text}>Tajweed ul Quran</Text>
         <TouchableOpacity
          onPress={() => navigation.navigate('SignUpScreen')}
          style={{ marginTop:15 }} >
         <Text style={{color: 'grey', textAlign: 'center'}}>click here to read more</Text>
         </TouchableOpacity>
     </View>
 </View>
 <View style={styles.card}>
        <View style={styles.cardContent}>
            <Text style={styles.text}>Tafseer ul Quran</Text>
            <TouchableOpacity
             onPress={() => navigation.navigate('SignUpScreen')}
             style={{ marginTop:15 }} >
            <Text style={{color: 'grey', textAlign: 'center'}}>click here to read more</Text>
            </TouchableOpacity>
        </View>
    </View>
     <View style={styles.card}>
     <View style={styles.cardContent}>
         <Text style={styles.text}>Hifz ul Quran</Text>
         <TouchableOpacity
          onPress={() => navigation.navigate('SignUpScreen')}
          style={{ marginTop:15 }} >
         <Text style={{color: 'grey', textAlign: 'center'}}>click here to read more</Text>
         </TouchableOpacity>
     </View>
 </View>
 <View style={styles.card}>
     <View style={styles.cardContent}>
         <Text style={styles.text}>Tajweed ul Quran</Text>
         <TouchableOpacity
          onPress={() => navigation.navigate('SignUpScreen')}
          style={{ marginTop:15 }} >
         <Text style={{color: 'grey', textAlign: 'center'}}>click here to read more</Text>
         </TouchableOpacity>
     </View>
 </View>
 </ScrollView>
  );
};

export default CoursesDetailsScreen;

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: {width: 1, height:1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius:2,
        marginHorizontal:4,
        marginVertical:6
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10
    },
    text: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center'
    }
})
