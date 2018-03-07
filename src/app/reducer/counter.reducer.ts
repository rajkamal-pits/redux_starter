import { AddToCart } from './../actions/counter.actions';
import {ActionReducer, Action} from "@ngrx/store";
import * as ConterActions from "../actions/counter.actions"
import {CounterModel} from "../model/counter.model"
// export const INCREMENT = 'INCREMENT';
// export const DECREMENT = 'DECREMENT';
// export const RESET = 'RESET';

//Model
// export interface State {
//     counter: number,
// }

const initilaState: CounterModel = {
    counter : 0,
    addtocart: 0
}

const newState = (state, newData) => {
    return Object.assign({}, state, newData)
}

export function counterReducer (state = initilaState, action: Action)  {
    switch(action.type){
        case ConterActions.INCREMENT:
            return newState(state,{counter : state.counter + 1})

        case ConterActions.DECREMENT:
           return  state.counter > 0 ?  newState(state,{counter : state.counter - 1}) :  newState(state,{counter : state.counter = 0});
           
        case ConterActions.RESET:
            return newState(state,{counter : 0})

        case ConterActions.ADD_TO_CART:
            return newState(state,{addtocart : state.counter})
            
        default:
            return newState(state, initilaState);
    }
};

