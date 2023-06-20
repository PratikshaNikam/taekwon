import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Platform,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class HomeScreen extends Component {
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
          <Text style={styles.text}>
            The explanation of "Tae" "Kwon" "Do": Although it only has one word
            in Korean, the English spelling indicates that it is made up of
            three pieces. "Tae" means "foot," "leg," or "to step on"; "Kwon"
            means "fist," or "fight"; and "Do" means the "way" or "discipline."
            We can see two key ideas that underlie "Tae Kwon Do" if we combine
            these three elements.
          </Text>
          <Text style={styles.text_para}>
            The first is that Taekwondo is the proper way to use Tae and Kwon
            ("fists and feet") or all the bodily components that are represented
            by fists and feet. It also serves as a means of maintaining peace by
            containing or defusing conflicts. 'To bring fists under control' [or
            'to step on fists'] is how Tae Kwon is defined, which is where this
            idea originates. Taekwondo thus implies "the right way of using all
            parts of the body to stop fights and help to build a better and more
            peaceful world."
          </Text>
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
    marginBottom: 30,
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
    fontFamily: 'Bubblegum-Sans',
    marginTop: 25,
    marginLeft: 0.01,
  },
  text: {
    fontFamily: 'Times New Roman',
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 18,
    padding: 12,
  },
  text_para: {
    fontFamily: 'Times New Roman',
    color: 'white',
    text: {
      fontFamily: 'Times New Roman',
      color: 'white',
      marginTop: 0.002,
      marginBottom: 20,
      textAlign: 'center',
      alignItems: 'center',
      fontSize: 18,
      padding: 12,
    },
    marginBottom: 20,
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 18,
    padding: 12,
  },
});
