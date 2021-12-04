import React from 'react';
import {
  View,
  Alert,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

const HeartButton = () => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Button pressed!')}>
        <Text style={styles.text}>Check now!</Text>
        <Image
          style={styles.heartImage}
          source={require('../assets/png/heart.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    // width: '85%',
    width: Dimensions.get('window').width - 25,
  },

  text: {
    fontFamily: 'Montserrat-Bold',
    color: '#0E0E0E',
    fontSize: 20,
  },

  heartImage: {
    width: 40,
    height: 40,
    marginLeft: 5,
  },
});

export default HeartButton;
