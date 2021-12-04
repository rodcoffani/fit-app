import React from 'react';
import {View, Alert, TouchableOpacity, StyleSheet, Image} from 'react-native';

const ProfilePicture = () => {
  return (
    <View style={styles.profilePicContainer}>
      <TouchableOpacity onPress={() => Alert.alert('Profile Pic pressed')}>
        <Image
          style={styles.profilePic}
          source={require('./../assets/png/pic.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  profilePicContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
});

export default ProfilePicture;
