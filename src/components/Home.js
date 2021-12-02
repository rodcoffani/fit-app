import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  return (
    <View styles={styles.LinearGradient}>
      <LinearGradient
        colors={['#309590', '#35D9D3']}
        style={styles.LinearGradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <Text style={{fontSize: 48}}>LOADED</Text>
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
