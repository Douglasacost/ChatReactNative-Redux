import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Image, Alert, Text } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles/chatForm';

const OPACITY_ENABLED = 1.0
const OPACITY_DISABLED = 0.2

export default class ChatForm extends Component {

  constructor(props) {
    super()

    this.handleMessageChange = (message) => {
      this.props.updateMessage(message)
    }

    this.handleButtonPress = () => {
      this.props.sendMessage({
        message: this.props.message,
        userName: this.props.userName
      })
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.sendingError && this.props.sendingError) {
      Alert.alert('error', this.props.sendingError)
    }
  }

  render() {
    const sending = this.props.sending
    const isButtonDisabled = sending || this.props.message.trim().length == 0
    const opacity = isButtonDisabled ? OPACITY_DISABLED : OPACITY_ENABLED

    return (
      <View style={styles.container}>

        <TextInput
          style={styles.textInput}
          placeholder={'message'}
          returnKeyType='send'
          onChangeText={this.handleMessageChange}
          value={this.props.message}
          underlineColorAndroid={'transparent'}
          editable={!sending} />

          <TouchableOpacity
            style={styles.button}
            onPress={this.handleButtonPress}
            disabled={isButtonDisabled}>

            <Text>SEND</Text>

          </TouchableOpacity>

      </View>
    );
  }
}

ChatForm.propTypes = {
  sending: PropTypes.bool.isRequired,
  sendMessage: PropTypes.func.isRequired,
  updateMessage: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  sendingError: PropTypes.string
}
