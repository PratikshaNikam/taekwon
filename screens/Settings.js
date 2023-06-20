import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import * as Font from 'expo-font';

export default class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.iconImage}></Image>
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>Taekwon</Text>
          </View>
        </View>

        <View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>My Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Dark theme</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>My progress</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
    marginBottom: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  iconImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
    marginLeft: 40,
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(28),
    fontFamily: 'Times New Roman',
    marginTop: 25,
    marginLeft: 0.01,
  },
  button: {
    padding: 20,
    marginTop: 20,
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'white',
  },
  buttonText: {
    color: 'black',
    fontFamily: 'Times New Roman',
    fontSize: 15,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 30,
  },
});
