import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import moment from 'moment';

import styles from './styles/bubbles'

const MESSAGE_TEXT_MARGIN = 100

const Bubble = props => {
  const currentUser = props.currentUser === props.message.by;
  const alignItems = currentUser ? 'flex-end' : 'flex-start'
  const margin = currentUser ? {marginLeft: MESSAGE_TEXT_MARGIN} : {marginRight: MESSAGE_TEXT_MARGIN}
  const username = currentUser ? 'you' : props.message.by
  const date = moment(props.message.datetime).fromNow();
  return (
    <View
      style={styles.container}>
      <View
        style={ [styles.bubbleView, {alignItems: alignItems}, margin] }>
        <Text
          style={styles.userText} >
          {date + ' - ' + username}
        </Text>
        <Text
          style={styles.messageText}>
          {props.message.content}
        </Text>
      </View>
    </View>
  )
}

Bubble.propTypes = {
  currentUser: PropTypes.string.isRequired,
  message: PropTypes.shape({
    datetime: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    by: PropTypes.string.isRequired
  })
}

export default Bubble