  import React from 'react';
  import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
  // import AppStack from '../../Navigation/AppStack';

  const HomeScreen = () => {

    return (
      <ScrollView>
        <View  style = {styles.container}>
          <View style= {{padding: 5}}>
          {/* <Image source={require('../../assets/madrassa.jpg')} ></Image> */}
          <Text style={styles.heading}>مدرسہ عربیہ صفہ للبنات</Text>
          <Text style={styles.paragraph}>دینی مدارس کی تاریخ اتنی ہی قدیم ہے جتنی کہ اسلام کی

            دینی مدارس عہد نبوی سے لے کر آج تک اپنے ایک مخصوص انداز سے  چلے آ رہے ہیں۔ 
            حضورؐ کے دور میں پہلا دینی مدرسہ وہ مخصوص چبو ترہ جس کو "صُفّہ "کہا جا تا ہے
            اور اس میں حضور ؐ سے تعلیم کتاب تعلیم حکمت اور تز کیہ نفس حاصل کرنے والے حضرت ابو ہریرہؓ ، حضرت انس ؓ سمیت 70کے قریب صحابہ کرام ؓ "اصحابِ صُفّہ "اور سب سے پہلے دینی طا لب علم کہلاتے ہیں۔
            دینی مدارس کا اپنا ایک مخصوص نصاب ہوتا ہے جو انتہائی پاکیزہ اور نورانی ماحول میں پڑھا یا جا تا ہے

            جس میں مستند عالم دین کا مقام حاصل کرنے کے لئے عربی وفارسی ، صرف و نحو، قرآن و حدیث ، تفسیر ، فقہ و اصول فقہ، معانی و ادب ، منطق و فلسفہ جیسے ضروری علوم کا ایک مکمل نصا ب پڑھنے کے بعد وہ عالم دین کے منصب پر فائز ہوتا ہے۔
            الحمد لله ثم الحمد لله  
            انہیں مدارس کی ایک کڑی مدرسہ عربیہ صفہ للبنات بھی ھے
            ربنا تقبل منا انک انت السمیع العلیم</Text>
        </View> 
      </View>
      </ScrollView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
    heading: {
      fontSize: 25, 
      color: '#000', 
      marginTop: 10, 
      marginBottom: 10 },
    paragraph: {
      fontSize: 17,
      color: '#000',
      textAlign: 'center',
      padding: 10}
  });

  export default HomeScreen;

