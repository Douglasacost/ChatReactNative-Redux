import React, { Component } from 'react'
import { FlatList, Text } from 'react-native'
import PropTypes from 'prop-types'

import Bubble from './Bubble'

import styles from './styles/messages'

const ITEM_HEIGHT = 50

export default class Messages extends Component {

  constructor() {
    super()

    this.renderItem = ({item}) => {
      return <Bubble currentUser={this.props.currentUser} message={item} />
    }

    this.emptyList = () => {
      return (
        <Text
          style={styles.placeholder}>
          {'Empty inbox'}
        </Text>
      );
    }

    this.itemLayout = (data, index) => (
      {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
    );
  }

  componentDidUpdate() {
    if (this.props.data.length) {
        this.flatList.scrollToIndex({animated: true, index: 0});
    }
  }

  render() {
    const data = this.props.data;
    const contentContainerStyle = data.length ? null : styles.flatlistContainerStyle;
    return (
      <FlatList
        ref={(c) => { this.flatList = c }}
        style={null}
        contentContainerStyle={contentContainerStyle}
        data={data}
        keyExtractor={item => item.datetime}
        renderItem={this.renderItem.bind(this)}
        getItemLayout={this.itemLayout}
        ListEmptyComponent={this.emptyList}
        inverted />
    );
  }
}

Messages.propTypes = {
  data: PropTypes.array.isRequired,
}