import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Switch,
  TouchableOpacity,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,
      light_theme: true,
    };
  }

  toggleSwitch() {
    const previous_state = this.state.isEnabled;
    const theme = !this.state.isEnabled ? 'dark' : 'light';
    var updates = {};
    updates['/users/' + firebase.auth().currentUser.uid + '/current_theme'] =
      theme;
    firebase.database().ref().update(updates);
    this.setState({ isEnabled: !previous_state, light_theme: previous_state });
  }

  componentDidMount() {
    this.fetchUser();
  }

  async fetchUser() {
    let theme, name, image;
    await firebase
      .database()
      .ref('/users/' + firebase.auth().currentUser.uid)
      .on('value', function (snapshot) {
        theme = snapshot.val().current_theme;
        name = `${snapshot.val().first_name} ${snapshot.val().last_name}`;
      });
    this.setState({
      light_theme: theme === 'light' ? true : false,
      isEnabled: theme === 'light' ? false : true,
      name: name,
    });
  }

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
              <Text style={styles.buttonText}>Name</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Age</Text>
            </TouchableOpacity>

            <View style={styles.themeContainer}>
              <Text style={styles.themeText}>Dark Theme</Text>
              <Switch
                style={{
                  transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }],
                }}
                trackColor={{ false: '#767577', true: 'white' }}
                thumbColor={this.state.isEnabled ? '#ee8249' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => this.toggleSwitch()}
                value={this.state.isEnabled}
              />
            </View>
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
  themeText: {
    color: 'white',
    fontSize: RFValue(20),
    marginRight: RFValue(15),
  },
  themeContainer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: RFValue(20),
  },
});
