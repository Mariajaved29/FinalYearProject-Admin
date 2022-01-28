import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView,
 } from 'react-native';
import React from 'react';

const CoursesDetailsScreen = () => {
    return (
        <ScrollView>
            {/* <View style={styles.container}> */}
            <View style={styles.card}>
                <View style={styles.cardContent}> 
                <Text style={styles.text}>ختم نبوت کورس</Text>
                <Text style={{color: 'grey',  textAlign: 'center', fontSize:16}}>Khatm-e-Nabuwat Course</Text>
                <Text style={styles.textLeft}> وقت : ۴۰ منٹ</Text>
                <Text style={styles.textLeft}>دورانیہ : ۴۰ یوم</Text>
                <Text style={styles.textRight}>  Time : 40 min </Text>
                <Text style={styles.textRight}> Duration : 40 days  </Text>  
            </View> 
            {/* </View> */}
            </View>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Text style={styles.text}>سیرت النبی صلی اللہ علیہ وسلم کورس</Text>
                    <Text style={{color: 'grey',  textAlign: 'center', fontSize:16}}>Siraah of the Prophet (PBUH) Course</Text>
                        <Text style={styles.textLeft}> وقت : ۴۰ منٹ</Text>
                        <Text style={styles.textLeft}>دورانیہ : ۴۰ یوم</Text>
                        <Text style={styles.textRight}>  Time : 40 min </Text>
                        <Text style={styles.textRight}> Duration : 40 days  </Text>  
                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Text style={styles.text}>فہم رمضان کورس</Text>
                    <Text style={{color: 'grey',  textAlign: 'center', fontSize:16}}>Understanding Ramadan Course</Text>
                    
                        <Text style={styles.textLeft}> وقت : ۴۰ منٹ</Text>
                        <Text style={styles.textLeft}>دورانیہ : شعبان تاریخ ۱ تا ۲۵</Text>
                        <Text style={styles.textRight}>  Time : 40 min </Text>
                        <Text style={styles.textRight}> Duration : 1-25 Shaʻban </Text>  
                    
                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Text style={styles.text}>حفظ چہل احادیث کورس</Text>
                    <Text style={{color: 'grey',  textAlign: 'center', fontSize:16}}>Memorization of Chahal Hadith Course</Text>
                    
                    <Text style={styles.textLeft}> وقت : ۴۰ منٹ</Text>
                    <Text style={styles.textLeft}>دورانیہ : ۴۰ یوم</Text>
                    <Text style={styles.textRight}>  Time : 40 min </Text>
                    <Text style={styles.textRight}> Duration : 40 days  </Text> 
                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Text style={styles.text}>دورۂ ترجمہ و تفسیر</Text>
                    <Text style={{color: 'grey',  textAlign: 'center', fontSize:16}}>Daura Tarjuma and Tafseer</Text>
                    
                        <Text style={styles.textLeft}> وقت : ۴۰ منٹ</Text>
                        <Text style={styles.textLeft}>دورانیہ : ------ </Text>
                        <Text style={styles.textRight}>  Time : 40 min </Text>
                        <Text style={styles.textRight}> Duration : ------  </Text>
                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Text style={styles.text}>دورہ بخاری شریف</Text>
                    <Text style={{color: 'grey',  textAlign: 'center', fontSize:16}}>Daura of Bukhari Sharif</Text>
                    
                    <Text style={styles.textLeft}> وقت : ۴۰ منٹ</Text>
                    <Text style={styles.textLeft}>دورانیہ : ------ </Text>
                    <Text style={styles.textRight}>  Time : 40 min </Text>
                    <Text style={styles.textRight}> Duration : ------  </Text>
                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Text style={styles.text}>تخصص فی العربیہ کورس</Text>
                    <Text style={{color: 'grey',  textAlign: 'center', fontSize:16}}>Specialization in Arabic course</Text>
                
                    <Text style={styles.textLeft}> وقت :  8 : 00 تا 2 : 00</Text>
                    <Text style={styles.textLeft}>دورانیہ :  2 سال</Text>
                    <Text style={styles.textRight}>  Time : 8:00AM to 2:00PM </Text>
                    <Text style={styles.textRight}> Duration : 2 Years  </Text>
                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Text style={styles.text}>تجوید (قاعدہ/قرآن پاک)</Text>
                    <Text style={{color: 'grey',  textAlign: 'center', fontSize:16}}>Tajweed (Qaida and Quran Pak)</Text>
        
                    <Text style={styles.textLeft}> وقت :  8 : 00 تا 2 : 00 </Text>
                    <Text style={styles.textLeft}>دورانیہ :  طالب علم پر منحصر ہے</Text>
                    <Text style={styles.textRight}>  Time : 8:00AM to 2:00PM </Text>
                    <Text style={styles.textRight}> Duration : ------  </Text>
                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Text style={styles.text}>تجوید قاعدہ مع قواعد ضروریہ  </Text>
                    <Text style={{color: 'grey',  textAlign: 'center', fontSize:16}}>Tajweed rule with necessary rules</Text>
        
                    <Text style={styles.textLeft}> وقت : ۴۰ منٹ</Text>
                    <Text style={styles.textLeft}>دورانیہ : ۴۰ یوم</Text>
                    <Text style={styles.textRight}>  Time : 40 min </Text>
                    <Text style={styles.textRight}> Duration : 40 days  </Text>
                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Text style={styles.text}>ذکر و تعلیم و دعا  </Text>
                    <Text style={{color: 'grey',  textAlign: 'center', fontSize:16}}>Remembrance of Allah, teaching and prayer</Text>
        
                    <Text style={styles.textLeft}> وقت : ۳۰ منٹ</Text>
                    <Text style={styles.textLeft}>دورانیہ :روزانہ-علاوہ جمعہ</Text>
                    <Text style={styles.textRight}>  Time : 30 min </Text>
                    <Text style={styles.textRight}> Duration :Daily </Text>
                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Text style={styles.text}>نماز (عملی طریقہ)</Text>
                    <Text style={{color: 'grey',  textAlign: 'center', fontSize:16}}>Prayers (Practical Method)</Text>
            
                    <Text style={styles.textLeft}> وقت :  1 گھنٹہ</Text>
                    <Text style={styles.textLeft}>دورانیہ:مہینے کا پہلا پیر </Text>
                    <Text style={styles.textRight}>  Time : 1 hour </Text>
                    <Text style={styles.textRight}> Duration:1st Mon of month  </Text>
                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Text style={styles.text}>کفن (عملی طریقہ)  </Text>
                    <Text style={{color: 'grey',  textAlign: 'center', fontSize:16}}>Shroud (practical method)</Text>
                
                        <Text style={styles.textLeft}> وقت : ۴۰ منٹ</Text>
                        <Text style={styles.textLeft}>دورانیہ : 6 ماہ میں 1 بار</Text>
                        <Text style={styles.textRight}>  Time : 40 min </Text>
                        <Text style={styles.textRight}> Duration: Once in 6 months </Text>
                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Text style={styles.text}>وضو (عملی طریقہ) </Text>
                    <Text style={{color: 'grey',  textAlign: 'center', fontSize:16}}>Wudhu (Practical Method)</Text>
                    
                        <Text style={styles.textLeft}> وقت : ۴۰ منٹ</Text>
                        <Text style={styles.textLeft}>دورانیہ:مہینے کا تیسرا پیر</Text>
                        <Text style={styles.textRight}>  Time : 40 mint</Text>
                        <Text style={styles.textRight}> Duration:3rd Mon of Month  </Text>
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
        marginVertical:6,
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10,    
    },
    text: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        marginBottom: 10,    
    },
    textLeft: {
        flex: 1,
        // position: 'absolute',
        left:0,
        top:40,
        color: '#474545',
        fontSize: 16,
      },
      textRight: {
        flex: 1,
        position: 'relative',
        right: 0,
        top: 0,
        color: '#474545',
        fontSize: 16
      },
})
