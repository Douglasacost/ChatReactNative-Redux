import { MESSAGES_DATABASE } from '../firebase';
import * as types from './types';

export const loadMessages = () => dispatch =>{
    MESSAGES_DATABASE.limitToLast(20).on('value', x =>{
        dispatch(loadMessagesSuccess(x.val()))
    }, e=>{
        dispatch(loadMessagesError(e.message))
    })
}

export const sendMessage = payload => dispatch =>{
    dispatch(chatMessageLoading());

    let message = {
        content: payload.message,
        datetime: new Date().getTime(),
        by: payload.userName
    }

    MESSAGES_DATABASE.push().set(message, e=>{
        if(e){
            dispatch(chatMessageError(e.message))
        }else{
            dispatch(chatMessageSuccess())
        }
    })
}

export const updateMessage = text => dispatch =>{
    dispatch(chatUpdateMessage(text))
}

const chatMessageLoading = () => ({
    type: types.MESSAGE_LOADING
})

const chatMessageSuccess = () => ({
    type: types.MESSAGE_SUCCESS
})

const chatMessageError = error => ({
    type: types.MESSAGE_ERROR,
    error
})

const chatUpdateMessage = text => ({
    type: types.MESSAGE_UPDATE,
    text
})

const loadMessagesSuccess = messages => ({
    type: types.LOAD_MESSAGES_SUCCESS,
    messages
})

const loadMessagesError = error => ({
    type: types.LOAD_MESSAGES_ERROR,
    error
})