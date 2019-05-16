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
                        style={{
                          paddingTop: 20,
                          alignSelf: 'center',
                          fontSize: 24,
                          fontWeight: '700',
                          paddingHorizontal: 20,
                          color: 'white',
                        }}
                      >
                        {this.props.headerModalText}
                      </Text>
                      <Text
                        style={{
                          alignSelf: 'center',
                          fontSize: 15,
                          fontWeight: '700',
                          paddingHorizontal: 20,
                          color: 'white',
                          marginTop: 30,
                        }}
                      >
                        {this.props.modalText}
                      </Text>
                      <Text
                        style={{
                          alignSelf: 'center',
                          fontSize: 15,
                          fontWeight: '700',
                          paddingHorizontal: 20,
                          color: 'white',
                          marginTop: 35,
                        }}
                      >
                        {this.props.modalText2}
                      </Text>
                      <Text
                        style={{
                          alignSelf: 'center',
                          fontSize: 15,
                          fontWeight: '700',
                          paddingHorizontal: 20,
                          color: 'white',
                          marginTop: 65,
                        }}
                      >
                        {this.props.modalText3}
                      </Text>
                      <Text
                        style={{
                          alignSelf: 'center',
                          fontSize: 15,
                          fontWeight: '700',
                          paddingHorizontal: 20,
                          color: 'white',
                          marginTop: 65,
                        }}
                      >
                        {this.props.modalText4}
                      </Text>

                      <TouchableWithoutFeedback
                        onPress={() => {
                          this.setModalVisible(!this.state.modalVisible);
                        }}
                      >
                        <Text
                            style={{
                            alignSelf: 'center',
                            marginTop: '50%',
                            color: 'white',
                            fontSize: 15,
                            fontWeight: '700',
                          }}
                          >
                                                Back
                          </Text>
                      </TouchableWithoutFeedback>
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

});
