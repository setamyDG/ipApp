import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card, Slider } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient/index';

export default class Body extends Component {
  state = { isCardVisible: true };

  componentDidMount() {
    this.setState({
      isCardVisible: true,
    });
  }

  deleteCard = () => {
    this.setState({
      isCardVisible: false,
    });
  };

  addCard = () => {
    this.setState({
      isCardVisible: true,
    });
  };

  render() {
    const { isCardVisible } = this.state;
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#093028', '#237A57']}
          style={{
            flex: 1,
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <LinearGradient
            colors={['#116e1c', '#092509']}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 1.0 }}
            style={{
              height: 50,
              width: '100%',
              alignItems: 'center',
              borderRadius: 0,
              justifyContent: 'center',
              marginTop: 0,
            }}
          >
            <Text style={styles.addPlantTxt} onPress={this.addCard}>
              ADD PLANT
            </Text>
          </LinearGradient>
          <ScrollView style={{ width: '100%' }}>
            <View>
              {isCardVisible && [
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
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}
                  >
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
                      <Text style={styles.addPlantTxt}>PODLEJ</Text>
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
                      <Text
                        style={styles.addPlantTxt}
                        onPress={this.deleteCard}
                      >
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
                </Card>,
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
                <View
                  style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}
                >
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
                    <Text style={styles.addPlantTxt}>PODLEJ</Text>
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
            </View>
          </ScrollView>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255, 0.4)',
  },

  addPlantTxt: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
  },
});
