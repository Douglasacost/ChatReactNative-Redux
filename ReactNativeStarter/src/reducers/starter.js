import { Map } from 'immutable';
import * as types from '../actions/types';
import initial from './state';

export default function(state = initial.get('starter'), action){
    switch (action.type) {
        case types.SET_NAME:
            return state.set('name', action.payload);   
        default:
            return state;
    }
};