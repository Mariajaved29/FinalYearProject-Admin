import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const PostCard = ({item}) => {

  const likeIcon = item.liked ? 'heart' : 'heart-outline';
  const likeIconColor = item.liked ? '#2e64e5' : '#333';
  const liketext = item.likes ? '#2e64e5' : '#333';
  const commenttext = item.comments ? '#2e64e5' : '#333';

//   if (item.likes == 1) {
//     likeText = '1 Like';
//   } else if (item.likes > 1) {
//     likeText = item.likes + ' Likes';
//   } else {
//     likeText = 'Like';
//   }

//   if (item.comments == 1) {
//     commentText = '1 Comment';
//   } else if (item.comments > 1) {
//     commentText = item.comments + ' Comments';
//   } else {
//     commentText = 'Comment';
//   }
  
  return (
    <View style={styles.container}>
    <View style={styles.card}>
        <View style={styles.userInfo}>
       <Image source={item.userImg} style={styles.userImg}/>
      <View style={styles.userInfoText}>
      <Text style={styles.userName}>{item.userName}</Text>
      <Text style={styles.postTime}>{item.postTime}</Text>
      </View>
      </View>
      <Text style={styles.postText}>{item.post}</Text>
      {item.postImg != 'none' ? 
      <Image source={item.postImg} /> 
      : 
      <View style={styles.divider} /> }
      <View style={styles.interactionWrapper}>
          <View style={styles.interaction }>
          <Icon name={likeIcon} size={25} color={likeIconColor} />
          <Text style={[styles.interactionText, {liketext}]} >{item.likes} Like</Text>
          </View>
          <View style={styles.interaction}>
          <Icon name='md-chatbubble-outline' size={25} />
          <Text style={[styles.interactionText, {commenttext}]}>{item.comments} Comment</Text>
          </View>
      </View>
       </View>
       </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10

      },
    card: {
        backgroundColor: '#f8f8f8',
        width: '100%',
        marginBottom: 2,
        borderRadius: 10,
    },
    userInfo:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 15,
    },
    userImg: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    userInfoText:{
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 10,
    },
    userName:{
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Lato-Regular',
        color: '#000'
    },
    postTime:{
        fontSize: 12,
        fontFamily: 'Lato-Regular',
        color: '#666',
    },
    postText:{
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 15,
        color: '#000'
    },
    postImg:{
        width: '100%',
        height: 250
    },
    divider: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        width: '92%',
        alignSelf: 'center',
        marginTop: 10
    },
    interactionWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15
    },
    interactionText:{
        fontSize: 12,
        fontFamily: 'Lato-Regular',
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft: 5,
    },
    interaction:{
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 5,
        padding: 2, 
        // backgroundColor: active ? '#2e64e515' : 'transparent',
    }
})