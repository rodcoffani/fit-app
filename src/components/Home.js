import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import HeartButton from './HeartButton';
import ProfilePicture from './ProfilePicture';

const Home = () => {
  return (
    <View styles={styles.LinearGradient}>
      <LinearGradient
        colors={['#309590', '#35D9D3']}
        style={styles.LinearGradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <ProfilePicture />
        <HeartButton />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  LinearGradient: {
    width: '100%',
    height: '100%',
  },
});

export default Home;
