import React, { Component } from 'react';
import {
View,
Text
} from 'react-native';
import PropTypes from 'prop-types';

import ChatForm from './ChatForm';
import Messages from './Messages';
import styles from './styles/chat'

export default class Chat extends Component{
    componentDidMount() {
        this.props.loadMessages();
    }
    getItems(data){
        return data ? Object.keys(data).map(key => data[key]) : [];
    }
    render(){
        let data = this.getItems(this.props.messages).reverse();
        return (
            <View style={styles.container}>
                <Messages currentUser={this.props.userName} data={data}/>
                <ChatForm {...this.props}/>
            </View>
        );
    }
}

Chat.defaultProps = {
    userName: 'Unknow'
}

Chat.propTypes = {
    userName: PropTypes.string
}
