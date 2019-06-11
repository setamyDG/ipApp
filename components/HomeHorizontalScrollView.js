import React, { Component } from 'react';
import {
  Image,
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// todo: usun inline style

export default class HomeHorizontalScrollView extends Component {
    state = {
      modalVisible: false,
    };

    setModalVisible(visible) {
      this.setState({ modalVisible: visible });
    }

    render() {
      return (
        <View style={styles.mainContainer}>
          <View style={{ flex: 2 }}>
            <Image
              source={this.props.imageUri}
              style={{
                flex: 1, width: null, height: null, resizeMode: 'cover',
              }}
            />
          </View>

          <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
            <TouchableWithoutFeedback
              onPress={() => {
                this.setModalVisible(true);
              }}
            >
              <Text>{this.props.name}</Text>
            </TouchableWithoutFeedback>
          </View>
          <View>
            <View>
              <Modal
                animationType="fade"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <View>
                  <ImageBackground
                    source={this.props.backgroundImageUri}
                    style={{ width: '100%', height: '100%' }}
                  >
                    <View>
                      <Text
                        style={styles.headerModalText}
                      >
                        {this.props.headerModalText}
                      </Text>
                      <Text
                        style={styles.modalText}
                      >
                        {this.props.modalText}
                      </Text>
                      <Text
                        style={styles.modalText}
                      >
                        {this.props.modalText2}
                      </Text>
                      <Text
                        style={styles.modalText}
                      >
                        {this.props.modalText3}
                      </Text>
                      <Text
                        style={styles.modalText}
                      >
                        {this.props.modalText4}
                      </Text>
                      <LinearGradient
                        colors={['transparent', 'transparent']}
                        start={{ x: 0.0, y: 1.0 }}
                        end={{ x: 1.0, y: 1.0 }}
                        style={[styles.gradient, { top: 55 }]}
                      >
                        <Text
                          style={{ color: 'white' }}
                          onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                          }}
                        >
BACK
                        </Text>
                      </LinearGradient>
                    </View>
                  </ImageBackground>
                </View>
              </Modal>
            </View>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 120,
    width: 150,
    marginLeft: 20,
    borderWidth: 0.5,
    borderColor: 'black',
  },
  headerModalText: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '700',
    paddingHorizontal: 20,
    color: 'white',
    marginTop: 30,
  },
  modalText: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '700',
    paddingHorizontal: 20,
    color: 'white',
    marginTop: 35,
  },
  gradient: {
    height: 40,
    width: '50%',
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    borderWidth: 2,
    alignSelf: 'center',
    borderColor: 'white',
  },

});
