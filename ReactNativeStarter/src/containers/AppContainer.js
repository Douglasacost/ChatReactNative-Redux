import React, { Component } from 'react';
import {
    Router,
    Scene
} from 'react-native-router-flux'
import ChatContainer from './ChatContainer';
import HomeContainer from './HomeContainer';

export default class AppContainer extends Component {
    render(){
        return(
            <Router>
                <Scene key='root'>
                    <Scene key='home' component={HomeContainer} title='Home' />
                    <Scene key='chat' component={ChatContainer} title='Chat' />
                </Scene>
            </Router>
        );
    }
}
