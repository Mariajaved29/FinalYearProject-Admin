import React from 'react';
  import { 
    View, 
    Text,
     StyleSheet, 
     Image, 
     ScrollView, 
     TouchableOpacity, 
     Platform,
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
        {/* <Text style={styles.heading}>مدرسہ عربیہ صفہ للبنات</Text> */}
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
                <Text style={styles.mainBox_text}>News</Text>
              </View> 
            </View>            
            <View>
            {/* Main Box End */}
            <Text style={styles.paragraph}>
              دینی مدارس کی تاریخ اتنی ہی قدیم ہے جتنی کہ اسلام کی۔  دینی مدارس عہد نبوی سے لے کر آج تک اپنے ایک مخصوص انداز سے  چلے آ رہے ہیں۔ حضورؐ کے دور میں پہلا دینی مدرسہ وہ مخصوص چبو ترہ جس کو "صُفّہ "کہا جا تا ہے۔ اور اس میں حضور ؐ سے تعلیم کتاب تعلیم حکمت اور تز کیہ نفس حاصل کرنے والے حضرت ابو ہریرہؓ ، حضرت انس ؓ سمیت 70کے قریب صحابہ کرام ؓ "اصحابِ صُفّہ "اور سب سے پہلے دینی طا لب علم کہلاتے ہیں۔ دینی مدارس کا اپنا ایک مخصوص نصاب ہوتا ہے جو انتہائی پاکیزہ اور نورانی ماحول میں پڑھا یا جا تا ہے۔ جس میں مستند عالم دین کا مقام حاصل کرنے کے لئے عربی وفارسی ، صرف ونحو، قرآن و حدیث ، تفسیر ، فقہ و اصول فقہ، معانی و ادب ، منطق و فلسفہ جیسے ضروری علوم کا ایک مکمل نصا ب پڑھنے کے بعد وہ عالم دین کے منصب پر فائز ہوتا ہے۔ الحمد لله ثم الحمد لله انہیں مدارس کی ایک کڑی مدرسہ عربیہ صفہ للبنات بھی ھے
            </Text>
            <Text style={[styles.text_footer, {textAlign: 'center', marginTop: 10, fontWeight: 'bold'}]}>
              ربنا تقبل منا انک انت السمیع العلیم
            </Text>            
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
    paragraph: {
      fontSize: 17,
      color: '#000',
      textAlign: 'center',
      padding: 10,
      // backgroundColor: '#fff',
      borderRadius: 20
    }
  });
  export default HomeScreen;

