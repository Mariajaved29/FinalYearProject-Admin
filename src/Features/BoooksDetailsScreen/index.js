import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';

const BooksDetailsScreen = () => {
  return (
    <ScrollView>
    <View style={styles.card}>
        <View style={styles.cardContent}> 
        <Text style={styles.text}>درس نظامی (6 سالۂ)</Text>
        <Text style={styles.centerHeading}>کتب خاصہ سالِ اوّل</Text>
        <Text style={styles.centerText}>ترجمہ و تفسير: عمہؔ پارہ(مکمل)</Text>
        <Text style={styles.centerText}>حديث: ذادلطالبين، جوامع الکلم(حفظ)</Text>
        <Text style={styles.centerText}>فقہ: تعليم الاسلام (حصہ سوم)، بہشتی زيور(حصہ ۲،۳،۴) </Text>
        <Text style={styles.centerText}>صرف و نحو: علم الصرف مع اجراء ازتمرين الصرف، علم النحو مع اجراء ازتمرين النحو عوامل النحو، تسہيل النحو</Text>
        <Text style={styles.centerText}>لغتہ عربيہ: طريقتہ العصریہ(جلد اول)، عربی کا معِلّم (حصہ ۱،۲)</Text>
        <Text style={styles.centerText}>تجويد: خلاصۃ التجويد</Text>
    <View style = {styles.lineStyle} />
    <View style={{flexDirection:'row',flex:1,justifyContent:'space-between'}}>
      <Text style={{color: "#000000",fontWeight:"bold"}}>وقت (۲:۰۰ تا ۱۰ بجے)</Text>
      <Text style={{color: "#000000",fontWeight:"bold"}}>دورانیه: ۹ ماہ (ذی القعد تا رجب)</Text>
    </View>
    </View> 
    </View>
    {/* Card 1 End */}
    <View style={styles.card}>
        <View style={styles.cardContent}> 
        <Text style={styles.text}>دراسات دينيہ سال اوّل </Text>
        <Text style={styles.centerHeading}>کتب خاصہ سالِ اوّل</Text>
        <Text style={styles.centerText}>ترجمہ و تفسیر: سورۃ يونس تا سورۃ عنکبوت</Text>
        <Text style={styles.centerText}>حديث: معارف الحديث(جلد ۲،۳،۴)</Text>
        <Text style={styles.centerText}>فقہ: تعليم الاسلام(مکمل)، بہشتی زيور(جلد۲،۳،۴) </Text>
        <Text style={styles.centerText}>صرف و نحو: علم الصرف(حصّہ۱،۲)، علم النحو</Text>
        <Text style={styles.centerText}>لغتہ عربيہ: طريقة العصريہ (جلد ۱)، قصص النبيين(حصہ۱،۲)، سيرت الانبياءصلی اللہ عليہ وسلم(مفتی محمد شفيع)</Text>
        <Text style={styles.centerText}>سيرت، حرر: حرر آخری پارہ عم مع ربع آخر حفظ</Text>
    <View style = {styles.lineStyle} />
    <View style={{flexDirection:'row',flex:1,justifyContent:'space-between'}}>
      <Text style={{color: "#000000",fontWeight:"bold"}}>وقت (۲:۰۰ تا ۱۰ بجے)</Text>
      <Text style={{color: "#000000",fontWeight:"bold"}}>دورانیه: ۹ ماہ (ذی القعد تا رجب)</Text>
    </View>
    </View> 
    </View>
    {/* Card 2 end */}
    <View style={styles.card}>
        <View style={styles.cardContent}> 
        <Text style={styles.text}>دراسات دينيہ سالِ دوم </Text>
        <Text style={styles.centerHeading}>کتب خاصہ سالِ دوم</Text>
        <Text style={styles.centerText}>ترجمہ و تفسير: سورۃ بقرہ تا سورۃ يونس و سورۃ عنکبوت تا ختم قرآن</Text>
        <Text style={styles.centerText}>حديث: معارف الحديث(جلد ۱،۵،۶،۷)</Text>
        <Text style={styles.centerText}>فقہ: بہشتی زيور (جلد ۱،۵،۶،۷)</Text>
        <Text style={styles.centerText}>صرف و نحو: علم الصرف (جلد۳،۴)، عوامل النحو</Text>
        <Text style={styles.centerText}>لغتہ عربیہ: طريقة العصريہ (جلد ۲)، قصص النبيين(جلد ۳،۴)</Text>
        <Text style={styles.centerText}>عقائد: حيات المسلمين(اردو)</Text>
    <View style = {styles.lineStyle} />
    <View style={{flexDirection:'row',flex:1,justifyContent:'space-between'}}>
      <Text style={{color: "#000000",fontWeight:"bold"}}>وقت (۲:۰۰ تا ۱۰ بجے)</Text>
      <Text style={{color: "#000000",fontWeight:"bold"}}>دورانیه: ۹ ماہ (ذی القعد تا رجب)</Text>
    </View>
    </View> 
    </View>
    {/* Card 3 end */}
    </ScrollView>
  );
};

export default BooksDetailsScreen;

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
        marginVertical:6,
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10,    
    },
    text: {
        fontSize: 22,
        color: 'black',
        textAlign: 'center',
        marginBottom: 10,    
    },
    centerHeading: {
        color: '#000',  
        textAlign: 'center', 
        fontSize:20
    },
    centerText: {
        color: 'grey',  
        textAlign: 'center', 
        fontSize:20
    },
    lineStyle:{
        borderWidth: 0.5,
        borderColor:'black',
       marginTop:10,
       marginBottom:10,
    },
})