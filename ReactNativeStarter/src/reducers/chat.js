import * as types from '../actions/types';
import initial from './state';
 
export default function (state = initial.get('chat'), action) {
  switch(action.type) {
    case types.MESSAGE_LOADING:
      return state.merge({ sending: true, sendingError: null })
    case types.MESSAGE_ERROR:
      return state.merge({ sending: false, sendingError: action.error })
    case types.MESSAGE_SUCCESS:
      return state.merge({ sending: false, sendingError: null, message: '' })
    case types.MESSAGE_UPDATE:
      return state.merge({ sending: false, message: action.text, sendingError: null })
    case types.LOAD_MESSAGES_SUCCESS:
      return state.merge({ messages: action.messages, loadMessagesError: null })
    case types.LOAD_MESSAGES_ERROR:
      return state.merge({ messages: null, loadMessagesError: action.error })
    default:
      return state
  }
}
