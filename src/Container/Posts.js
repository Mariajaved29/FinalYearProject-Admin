import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native';
import React from 'react';
import PostCard from './PostCard';

const postData = [
    {
        id: '1',
        userName: 'Maria Javed',
        userImg: require('../assets/user.png'),
        postTime: '4 hours ago',
        post: 'Namaz is peace of soul',
        postImg: require('../assets/namaz.jpg'),
        liked: true,
        likes: '14',
        comments: '5'
    },
    {
        id: '2',
        userName: 'Sobia Mustafa',
        userImg: require('../assets/images/user-profile.jpg'),
        postTime: '4 hours ago',
        post: 'Tommorow will be off',
        postImg: 'none',
        liked: true,
        likes: '1',
        comments: '8'
    },
    {
        id: '3',
        userName: 'Maria Javed',
        userImg: require('../assets/user.png'),
        postTime: '4 hours ago',
        post: 'Namaz is peace of soul',
        postImg: require('../assets/namaz.jpg'),
        liked: false,
        likes: '0',
        comments: '7'
    }
]


const Posts = () => {
  return (
   <View>
       <FlatList
       data={postData}
       renderItem={({item}) => <PostCard item={item} />}
       keyExtractor={item => item.id}
       showsVerticalScrollIndicator={false}
       ></FlatList>
   </View>    
  );
};

export default Posts;

