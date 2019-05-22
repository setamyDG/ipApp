import React, { Component } from 'react';
import {
  Dimensions, Image, Platform, ScrollView, StyleSheet, Text, View,
} from 'react-native';

import HomeHorizontalScrollView from '../../components/HomeHorizontalScrollView';
const { width } = Dimensions.get('window');
export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    alignSelf: 'center',
    headerTitleStyle: {
      color: 'black',
      fontStyle: 'italic',
      textAlign: 'center',
      alignSelf: 'center',
      flex: 1,
    },
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        scrollEventTgrottle={16}
      >
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
              What can we help you find, Daniel?
          </Text>

          <View style={{ height: 130, marginTop: 20 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <HomeHorizontalScrollView
                imageUri={require('../../assets/images/plant2.jpg')}
                name="Authors"
                backgroundImageUri={require('../../assets/images/plant2.jpg')}
                headerModalText="Hello Users"
                modalText="Regards from developers"
                modalText2="Daniel Gola - Creating application in React-Native technology"
                modalText3="Wojciech Wlaźlak - Connecting between application and RaspberryPi 3.0 with database"
                modalText4="Szymon Rybarczyk - Creating database with Azure technology"
              />
              <HomeHorizontalScrollView
                imageUri={require('../../assets/images/headerHome.jpeg')}
                name="Plants"
                backgroundImageUri={require('../../assets/images/headerHome.jpeg')}
                headerModalText="Supported Plants"
                modalText="In progress"
              />
              <HomeHorizontalScrollView
                imageUri={require('../../assets/images/plant1.jpeg')}
                name="How it works"
                backgroundImageUri={require('../../assets/images/plant1.jpeg')}
                headerModalText="How does it works?"
                modalText="Assumptions"
                modalText2="With the help of the application, the user can authenticate the plant which is in the pot, that is, he can choose the plant from the base, select the appropriate watering plan, set it manually or water it at once by using the water hose button"
                modalText3="In addition, the user can evaluate the watering plan with a suitable emoticon"
                modalText4="Application is still in progress. Regards"
              />
            </ScrollView>
          </View>

          <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: '700' }}>Introducing iPlants</Text>
            <Text style={{ fontWeight: '100', marginTop: 10 }}>
                A new selection of plants verified for quality & comfort.
            </Text>
            <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
              <Image
                style={{
                  flex: 1,
                  height: null,
                  width: null,
                  resizeMode: 'cover',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: '#dddddd',
                }}
                source={require('../../assets/images/plant1.jpeg')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
