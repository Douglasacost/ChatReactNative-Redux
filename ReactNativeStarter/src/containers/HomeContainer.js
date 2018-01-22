import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { ActionCreators } from '../actions';
import Home from '../components/Home';


function mapStateToProps({ starter }) {
    return {
      userName: starter.get('name'),
      Actions: Actions
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);