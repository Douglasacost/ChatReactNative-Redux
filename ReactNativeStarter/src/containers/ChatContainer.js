import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { ActionCreators } from '../actions';
import Chat from '../components/Chat';

const ChatContainer = props => <Chat {...props}/>;

function mapStateToProps({ chat, starter }) {
    return { ...chat.toJS(), userName: starter.get('name'),};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);