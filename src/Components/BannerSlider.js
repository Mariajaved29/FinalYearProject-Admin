import React from 'react';
import {View, Image, StatusBar} from 'react-native';

export default function BannerSlider({data}) {
  return (
    <View>
      <StatusBar backgroundColor='#b09154' barStyle='light-content' />
      <Image
        source={data.image}
        style={{height: 150, width: 300, borderRadius: 10}}
      />
    </View>
  );
}
