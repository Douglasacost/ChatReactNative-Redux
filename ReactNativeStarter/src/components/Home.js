import React, { Component } from 'react';
import {
View,
Text,
TextInput,
TouchableOpacity
} from 'react-native';

import style from './styles/home'

export default class Home extends Component{
    render(){
        const { setName, userName, Actions } = this.props;
        return (
            <View style={style.container}>
                <Text style={style.title}>
                    Enter your name:
                </Text>
                <TextInput style={style.textInput} placeholder='Jhon Doe' 
                onChangeText={(value)=>{
                    return setName(value)
                 }}
                 value={userName} />
                <TouchableOpacity 
                onPress={()=>{
                    Actions.chat({
                        userName
                    })
                }}>
                    <Text style={style.buttonText}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}