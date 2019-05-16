import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import { SocialIcon } from 'react-native-elements/src/index';

const backgroundImg = require('../../assets/images/headerHome.jpeg');
const profilePic = require('../../assets/images/95mine.jpg');

export default class Header extends Component {
  render() {
    return (

      <View style={styles.container}>
        <ImageBackground style={styles.headerBackground} source={backgroundImg}>
          <View style={styles.header}>
            <View style={styles.profilePicCircle}>
              <Image style={styles.pic} source={profilePic} />
            </View>

            <View style={{ flex: 1, flexDirection: 'row', marginTop: 5 }}>
              <SocialIcon type="twitter" />
              <SocialIcon type="instagram" />
              <SocialIcon type="facebook" />
              <SocialIcon type="google-plus-official" />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  headerBackground: {
    height: 270,
    width: '100%',
    alignSelf: 'stretch',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profilePicCircle: {
    width: Dimensions.get('window').height / 4.5 - 2,
    height: Dimensions.get('window').height / 4.5 - 2,
    borderRadius: Dimensions.get('window').height - 4.5,
    borderWidth: 7,
    borderColor: 'rgba(0,0,0, 0.4)',
  },
  pic: {
    flex: 1,
    width: '100%',
    alignSelf: 'stretch',
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 4,
    opacity: 0.8,
  },
  addPlantTxt: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
  },
  buttonStyle: {
    height: 40,
    width: 100,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
  },
});
