import { Map } from 'immutable';

export default Map({
    starter: Map({
        name: ''
    }),
    chat: Map({
        sending: false,
        sendingError: null,
        message: '',
        messages: {},
        loadMessagesError: null
      })
});