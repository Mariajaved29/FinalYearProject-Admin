import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
  LayoutAnimation,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Books = [
  {
      isExpanded: false,
      category_name: 'درس نظامی (6 سالۂ)',
      subcategory: [
      {id:1, val:'ترجمہ و تفسير: عمہؔ پارہ(مکمل)'},
      {id: 2, val: 'حديث: ذادلطالبين، جوامع الکلم(حفظ)'},
      {id:3, val:'فقہ: تعليم الاسلام (حصہ سوم)، بہشتی زيور(حصہ ۲،۳،۴)'},
      {id:4, val:'صرف و نحو: علم الصرف مع اجراء ازتمرين الصرف، علم النحو مع اجراء ازتمرين النحو عوامل النحو، تسہيل النحو'},
      {id:5, val:'لغتہ عربيہ: طريقتہ العصریہ(جلد اول)، عربی کا معِلّم (حصہ ۱،۲)'},
      {id:6, val:'تجويد: خلاصۃ التجويد'},
      ],
  },
  {
    isExpanded: false,
    category_name: 'دراسات دينيہ سال اوّل ',
    subcategory: [
    {id:7, val:'ترجمہ و تفسير: عمہؔ پارہ(مکمل)'},
    {id:8, val: 'حديث: ذادلطالبين، جوامع الکلم(حفظ)'},
    {id:9, val:'فقہ: تعليم الاسلام (حصہ سوم)، بہشتی زيور(حصہ ۲،۳،۴)'},
    {id:10, val:'صرف و نحو: علم الصرف مع اجراء ازتمرين الصرف، علم النحو مع اجراء ازتمرين النحو عوامل النحو، تسہيل النحو'},
    {id:11, val:'لغتہ عربيہ: طريقتہ العصریہ(جلد اول)، عربی کا معِلّم (حصہ ۱،۲)'},
    {id:12, val:'تجويد: خلاصۃ التجويد'},
    ],
},
{
  isExpanded: false,
  category_name: 'دراسات دينيہ سالِ دوم ',
  subcategory: [
  {id:13, val:'ترجمہ و تفسير: عمہؔ پارہ(مکمل)'},
  {id:14, val: 'حديث: ذادلطالبين، جوامع الکلم(حفظ)'},
  {id:15, val:'فقہ: تعليم الاسلام (حصہ سوم)، بہشتی زيور(حصہ ۲،۳،۴)'},
  {id:16, val:'صرف و نحو: علم الصرف مع اجراء ازتمرين الصرف، علم النحو مع اجراء ازتمرين النحو عوامل النحو، تسہيل النحو'},
  {id:17, val:'لغتہ عربيہ: طريقتہ العصریہ(جلد اول)، عربی کا معِلّم (حصہ ۱،۲)'},
  {id:18, val:'تجويد: خلاصۃ التجويد'},
  ],
},
]

const ExpandableComponent = ({item, onClickFunction}) => {
  const [layoutHeight, setLayoutHeight] = useState(0);

  useEffect(() => {
    if (item.isExpanded){
        setLayoutHeight(null);
    } else {
        setLayoutHeight(0);
    }
  }, [item.isExpanded]);
  return (
      <View>      
          <View  style={styles.item}>
          <Text style={styles.itemText}>
                  {item.category_name}  
          </Text>         
          <TouchableOpacity 
          style={{ width: 20, height: 20,}}
          onPress={onClickFunction}>
          <Ionicons name='caret-down' color='grey' size={20} />
          </TouchableOpacity>
          </View>
          <View
          style={{
              height: layoutHeight,
              overflow: 'hidden'
          }}
          >
              {
                  item.subcategory.map((item, key) => (
                      <View
                      key={key}
                      style={styles.content}
                      >
                          <Text style={styles.text}>
                              {item.val}
                          </Text>
                          <View style={styles.separator} />
                      </View>
                  ))
              }
          </View>    
      </View>
  )
}
const BooksDetailsScreen = () => {
  const [listDataSource, setListDataSource] = useState(Books);

    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true)
    }

    const updateLayout = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
        const array = [...listDataSource];
            // is single select is enabled
            array.map((value, placeindex) => 
            placeindex === index
            ? (array[placeindex]['isExpanded']) = !array[placeindex]['isExpanded']
            : (array[placeindex]['isExpanded'])= false
            )
        // }
        setListDataSource(array)
    }

return (
  <SafeAreaView style={{flex:1}}>

  <View style={styles.container}>
          <View style={styles.header}>
          <Text style={styles.titleText}>
          کتب خاصہ    
          </Text>
      </View>
      <ScrollView>
          {
              listDataSource.map((item, key) => (
                  <ExpandableComponent
                  key={item.category_name}
                  item={item}
                  onClickFunction={() => {
                      updateLayout(key)
                  }}
                  />
              ))
          }
      </ScrollView>
  </View>
  </SafeAreaView>
);
};

export default BooksDetailsScreen;

const styles = StyleSheet.create({
  container: {
      flex:1
  },
  header:{
      flexDirection: 'row',
      padding: 10
  },
  searchWrapperStyle: {
      backgroundColor: '#729875',
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  iconStyles: {
      marginTop: 15,
      marginHorizontal: 8
  },
  SearchInputStyle: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 8,
    margin: 8,
    color: 'white'      
  },
  titleText:{
      flex:1,
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center'
  },
  item:{
      backgroundColor: '#ebe8e1',
      padding: 10,
      marginBottom: 2,
      flexDirection: 'row-reverse',
      margin:10
  },
  itemText: {
      fontSize: 22,
      fontWeight: '700',
      width: '90%',
      marginLeft: 20
     
  },
  content: {
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: '#fff'   
  },
  text:{
      fontSize: 20,
      padding:10
  },
  separator:{
      height:1,
      backgroundColor: '#c8c8c8',
      width: '100%'
  }

});




// import { View, Text, ScrollView, StyleSheet } from 'react-native';
// import React from 'react';

// const BooksDetailsScreen = () => {
//   return (
//     <ScrollView>
//     <View style={styles.card}>
//         <View style={styles.cardContent}> 
//         <Text style={styles.text}>درس نظامی (6 سالۂ)</Text>
//         <Text style={styles.centerHeading}>کتب خاصہ سالِ اوّل</Text>
//         <Text style={styles.centerText}>ترجمہ و تفسير: عمہؔ پارہ(مکمل)</Text>
//         <Text style={styles.centerText}>حديث: ذادلطالبين، جوامع الکلم(حفظ)</Text>
//         <Text style={styles.centerText}>فقہ: تعليم الاسلام (حصہ سوم)، بہشتی زيور(حصہ ۲،۳،۴) </Text>
//         <Text style={styles.centerText}>صرف و نحو: علم الصرف مع اجراء ازتمرين الصرف، علم النحو مع اجراء ازتمرين النحو عوامل النحو، تسہيل النحو</Text>
//         <Text style={styles.centerText}>لغتہ عربيہ: طريقتہ العصریہ(جلد اول)، عربی کا معِلّم (حصہ ۱،۲)</Text>
//         <Text style={styles.centerText}>تجويد: خلاصۃ التجويد</Text>
//     <View style = {styles.lineStyle} />
//     <View style={{flexDirection:'row',flex:1,justifyContent:'space-between'}}>
//       <Text style={{color: "#000000",fontWeight:"bold"}}>وقت (۲:۰۰ تا ۱۰ بجے)</Text>
//       <Text style={{color: "#000000",fontWeight:"bold"}}>دورانیه: ۹ ماہ (ذی القعد تا رجب)</Text>
//     </View>
//     </View> 
//     </View>
//     {/* Card 1 End */}
//     <View style={styles.card}>
//         <View style={styles.cardContent}> 
//         <Text style={styles.text}>دراسات دينيہ سال اوّل </Text>
//         <Text style={styles.centerHeading}>کتب خاصہ سالِ اوّل</Text>
//         <Text style={styles.centerText}>ترجمہ و تفسیر: سورۃ يونس تا سورۃ عنکبوت</Text>
//         <Text style={styles.centerText}>حديث: معارف الحديث(جلد ۲،۳،۴)</Text>
//         <Text style={styles.centerText}>فقہ: تعليم الاسلام(مکمل)، بہشتی زيور(جلد۲،۳،۴) </Text>
//         <Text style={styles.centerText}>صرف و نحو: علم الصرف(حصّہ۱،۲)، علم النحو</Text>
//         <Text style={styles.centerText}>لغتہ عربيہ: طريقة العصريہ (جلد ۱)، قصص النبيين(حصہ۱،۲)، سيرت الانبياءصلی اللہ عليہ وسلم(مفتی محمد شفيع)</Text>
//         <Text style={styles.centerText}>سيرت، حرر: حرر آخری پارہ عم مع ربع آخر حفظ</Text>
//     <View style = {styles.lineStyle} />
//     <View style={{flexDirection:'row',flex:1,justifyContent:'space-between'}}>
//       <Text style={{color: "#000000",fontWeight:"bold"}}>وقت (۲:۰۰ تا ۱۰ بجے)</Text>
//       <Text style={{color: "#000000",fontWeight:"bold"}}>دورانیه: ۹ ماہ (ذی القعد تا رجب)</Text>
//     </View>
//     </View> 
//     </View>
//     {/* Card 2 end */}
//     <View style={styles.card}>
//         <View style={styles.cardContent}> 
//         <Text style={styles.text}>دراسات دينيہ سالِ دوم </Text>
//         <Text style={styles.centerHeading}>کتب خاصہ سالِ دوم</Text>
//         <Text style={styles.centerText}>ترجمہ و تفسير: سورۃ بقرہ تا سورۃ يونس و سورۃ عنکبوت تا ختم قرآن</Text>
//         <Text style={styles.centerText}>حديث: معارف الحديث(جلد ۱،۵،۶،۷)</Text>
//         <Text style={styles.centerText}>فقہ: بہشتی زيور (جلد ۱،۵،۶،۷)</Text>
//         <Text style={styles.centerText}>صرف و نحو: علم الصرف (جلد۳،۴)، عوامل النحو</Text>
//         <Text style={styles.centerText}>لغتہ عربیہ: طريقة العصريہ (جلد ۲)، قصص النبيين(جلد ۳،۴)</Text>
//         <Text style={styles.centerText}>عقائد: حيات المسلمين(اردو)</Text>
//     <View style = {styles.lineStyle} />
//     <View style={{flexDirection:'row',flex:1,justifyContent:'space-between'}}>
//       <Text style={{color: "#000000",fontWeight:"bold"}}>وقت (۲:۰۰ تا ۱۰ بجے)</Text>
//       <Text style={{color: "#000000",fontWeight:"bold"}}>دورانیه: ۹ ماہ (ذی القعد تا رجب)</Text>
//     </View>
//     </View> 
//     </View>
//     {/* Card 3 end */}
//     </ScrollView>
//   );
// };

// export default BooksDetailsScreen;

// const styles = StyleSheet.create({
//     card: {
//         borderRadius: 6,
//         elevation: 3,
//         backgroundColor: '#fff',
//         shadowOffset: {width: 1, height:1},
//         shadowColor: '#333',
//         shadowOpacity: 0.3,
//         shadowRadius:2,
//         marginHorizontal:4,
//         marginVertical:6,
//     },
//     cardContent: {
//         marginHorizontal: 18,
//         marginVertical: 10,    
//     },
//     text: {
//         fontSize: 22,
//         color: 'black',
//         textAlign: 'center',
//         marginBottom: 10,    
//     },
//     centerHeading: {
//         color: '#000',  
//         textAlign: 'center', 
//         fontSize:20
//     },
//     centerText: {
//         color: 'grey',  
//         textAlign: 'center', 
//         fontSize:20
//     },
//     lineStyle:{
//         borderWidth: 0.5,
//         borderColor:'black',
//        marginTop:10,
//        marginBottom:10,
//     },
// })