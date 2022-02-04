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
    TextInput
  } from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CONTENT = [
    {
        isExpanded: false,
        category_name: 'ختم نبوت کورس',
        subcategory: [
        {id:1, val:'اس کورس میں عقیدہ ختم نبوت اور قادیانیت کے دجل و فریب سے متعلق پڑھایا جائے گا۔ ان شاء اللہ'},
        {id: 2, val: 'وقت : ۴۰ منٹ'},
        {id:3, val:'دورانیہ : ۴۰ یوم'}
        ],
    },
    {
        isExpanded: false,
        category_name: 'سیرت النبی کورس',
        subcategory: [
        {id:4, val:'اس کورس میں سیرت رسول صلی اللہ علیہ وسلم  کے متعلق پڑھایا جائے گا۔'},
        {id: 5, val: 'وقت : ۴۰ منٹ'},
        {id:6, val:'دورانیہ : ۴۰ یوم'}
        ],
    },
    {
        isExpanded: false,
        category_name: 'فہم رمضان کورس',
        subcategory: [
        {id:7, val:'اس کورس میں آپ سیکھیں گے استقبال رمضان، حقوق رمضان، اعمال رمضان، مسائل رمضان'},
        {id: 8, val: 'وقت : ۴۰ منٹ'},
        {id:9, val:'دورانیہ : شعبان تاریخ ۱ تا ۲۵'}
        ],
    },
    {
        isExpanded: false,
        category_name: 'حفظ چہل احادیث کورس',
        subcategory: [
        {id:10, val:'اس کورس میں چہل احادیث حفظ کروائی جائیں گی'},
        {id: 11, val: 'وقت : ۴۰ منٹ'},
        {id:12, val:' دورانیہ : ۴۰ یوم'}
        ],
    },
    {
        isExpanded: false,
        category_name: 'دورۂ ترجمہ و تفسیر',
        subcategory: [
        {id:13, val:'قرآن پاک کی ترجمہ تفسیر سیکھنے کے لیے مختصر دورانیہ کا مفید کورس'},
        {id:14, val: 'وقت : ۴۰ منٹ'},
        {id:15, val:'دورانیہ :-----'}
        ],
    },
    {
        isExpanded: false,
        category_name: 'دورہ بخاری شریف',
        subcategory: [
        {id:16, val:'اس کورس میں بخاری شریف کی احادیث کا دورہ کروایا جائے گا'},
        {id: 17, val: 'وقت : ۴۰ منٹ'},
        {id:18, val:'دورانیہ : -----'}
        ],
    },
    {
        isExpanded: false,
        category_name: 'تخصص فی العربیہ کورس',
        subcategory: [
        {id:19, val:'اس کورس میں بخاری شریف کی احادیث کا دورہ کروایا جائے گا'},
        {id: 20, val: ' وقت :  8 : 00 تا 2 : 00'},
        {id:21, val:'دورانیہ :  2 سال'}
        ],
    },
    {
        isExpanded: false,
        category_name: 'تجوید (قاعدہ/قرآن پاک)',
        subcategory: [
        {id:22, val:'اس کورس میں بخاری شریف کی احادیث کا دورہ کروایا جائے گا'},
        {id: 23, val: ' وقت :  8 : 00 تا 2 : 00'},
        {id:24, val:'دورانیہ :  -----'}
        ],
    },
    {
        isExpanded: false,
        category_name: 'تجوید قاعدہ مع قواعد ضروریہ ',
        subcategory: [
        {id:25, val:'اس کورس میں بخاری شریف کی احادیث کا دورہ کروایا جائے گا'},
        {id: 26, val: 'وقت : ۴۰ منٹ'},
        {id:27, val:'دورانیہ : ۴۰ یوم'}
        ],
    },
    {
        isExpanded: false,
        category_name: 'ذکر و تعلیم و دعا  ',
        subcategory: [
        {id:28, val:'اس کورس میں بخاری شریف کی احادیث کا دورہ کروایا جائے گا'},
        {id: 29, val: 'وقت : ۳۰ منٹ'},
        {id:30, val:'دورانیہ :روزانہ-علاوہ جمعہ'}
        ],
    },
    {
        isExpanded: false,
        category_name: 'نماز (عملی طریقہ) ',
        subcategory: [
        {id:31, val:'اس کورس میں بخاری شریف کی احادیث کا دورہ کروایا جائے گا'},
        {id: 32, val: 'وقت :  1 گھنٹہ'},
        {id:33, val:'دورانیہ:مہینے کا پہلا پیر'}
        ],
    },
    {
        isExpanded: false,
        category_name: 'کفن (عملی طریقہ)',
        subcategory: [
        {id:34, val:'اس کورس میں بخاری شریف کی احادیث کا دورہ کروایا جائے گا'},
        {id: 35, val: 'وقت : ۴۰ منٹ'},
        {id:36, val:'دورانیہ : 6 ماہ میں 1 بار'}
        ],
    },
    {
        isExpanded: false,
        category_name: 'وضو (عملی طریقہ)',
        subcategory: [
        {id:37, val:'اس کورس میں بخاری شریف کی احادیث کا دورہ کروایا جائے گا'},
        {id: 38, val: 'وقت : ۴۰ منٹ'},
        {id:39, val:'دورانیہ:مہینے کا تیسرا پیر'}
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
const Courses = () => {
    const [listDataSource, setListDataSource] = useState(CONTENT);

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
                   کورسز کی فہرست   
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

export default Courses;

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    header:{
        flexDirection: 'row',
        padding: 10
    },
    searchWrapperStyle: {
        backgroundColor: '#16A885',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconStyles: {
        marginTop: 12,
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

