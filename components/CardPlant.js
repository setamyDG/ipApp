import React, { Component } from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Card, Slider,
} from 'react-native-elements/src/index';
import LinearGradient from 'react-native-linear-gradient/index';


export default class ProfileScreen extends Component {
  render() {
    const { isCardVisible } = this.state;
    return (
      <View style={{ flex: 1 }}>

        <ScrollView style={{ width: '100%' }}>
          <Card
            containerStyle={{
              height: 325,
            }}
            key="card"
            flexDirection="column"
            title="Plant #1"
            titleStyle={{
              color: 'green',
            }}
            image={require('../../assets/images/plant1.jpeg')}
            imageStyle={{
              height: 150,
              marginTop: -10,
            }}
          >
            <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
              <LinearGradient
                colors={['#00b3b7', '#084d7a']}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 1.0 }}
                style={{
                  height: 40,
                  width: 120,
                  alignItems: 'center',
                  borderRadius: 25,
                  justifyContent: 'center',
                  marginRight: 210,
                  marginBottom: 90,

                }}
              >
                <Text style={styles.addPlantTxt}>
                                                PODLEJ
                </Text>
              </LinearGradient>
              <LinearGradient
                colors={['#00b3b7', '#084d7a']}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 1.0 }}
                style={{
                  height: 40,
                  width: 120,
                  alignItems: 'center',
                  borderRadius: 25,
                  justifyContent: 'center',
                  marginLeft: -100,
                  marginBottom: 90,
                }}
              >
                <Text style={styles.addPlantTxt} onPress={this.deleteCard}>
                                                USUN
                </Text>
              </LinearGradient>
            </View>
            <Text>Wilgoć</Text>
            <Slider
              minimumValue={0}
              maximumValue={100}
              value={50}
              thumbTintColor="green"
              minimumTrackTintColor="green"
              maximumTrackTintColor="black"
            />
            <Text>Temperatura</Text>
            <Slider
              minimumValue={0}
              maximumValue={100}
              value={50}
              thumbTintColor="orange"
              minimumTrackTintColor="orange"
              maximumTrackTintColor="red"
            />
          </Card>
,
                            ]}
          <Card
            containerStyle={{
              height: 325,
            }}
            key="card"
            flexDirection="column"
            title="Plant #2"
            titleStyle={{
              color: 'green',
            }}
            image={require('../../assets/images/plant1.jpeg')}
            imageStyle={{
              height: 150,
              marginTop: -10,
            }}
          >
            <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
              <LinearGradient
                colors={['#00b3b7', '#084d7a']}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 1.0 }}
                style={{
                  height: 40,
                  width: 120,
                  alignItems: 'center',
                  borderRadius: 25,
                  justifyContent: 'center',
                  marginRight: 210,
                  marginBottom: 90,

                }}
              >
                <Text style={styles.addPlantTxt}>
                                            PODLEJ
                </Text>
              </LinearGradient>
              <LinearGradient
                colors={['#00b3b7', '#084d7a']}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 1.0 }}
                style={{
                  height: 40,
                  width: 120,
                  alignItems: 'center',
                  borderRadius: 25,
                  justifyContent: 'center',
                  marginLeft: -100,
                  marginBottom: 90,
                }}
              >
                <Text style={styles.addPlantTxt} onPress={this.deleteCard}>
                                            USUN
                </Text>
              </LinearGradient>
            </View>
            <Text>Wilgoć</Text>
            <Slider
              minimumValue={0}
              maximumValue={100}
              value={50}
              thumbTintColor="green"
              minimumTrackTintColor="green"
              maximumTrackTintColor="black"
            />
            <Text>Temperatura</Text>
            <Slider
              minimumValue={0}
              maximumValue={100}
              value={50}
              thumbTintColor="orange"
              minimumTrackTintColor="orange"
              maximumTrackTintColor="red"
            />
          </Card>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255, 0.4)',
  },
  headerBackground: {
    flex: 1,
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
    width: Dimensions.get('window').height / 4.9 - 2,
    height: Dimensions.get('window').height / 4.9 - 2,
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
  textStyle: {
    color: '#fff',
    fontSize: 20,
    fontStyle: 'italic',
    textAlign: 'center',
    alignSelf: 'center',
    paddingTop: 5,
  },
  separators: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    alignSelf: 'stretch',
  },
  textStyle2: {
    color: 'black',
    fontSize: 30,
    fontStyle: 'italic',
    textAlign: 'center',
    alignSelf: 'center',
  },
  addPlantTxt: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
  },
});
