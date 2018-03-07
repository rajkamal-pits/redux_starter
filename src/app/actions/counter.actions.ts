import {ActionReducer, Action} from "@ngrx/store";

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const ADD_TO_CART = 'ADD_TO_CART';



export class Increment implements Action{
    readonly type = INCREMENT
    // constructor(public payload: number) {

    // }
}

export class Decrement implements Action{
    readonly type = DECREMENT
    // constructor(public payload: number) {

    // }
}

export class Reset implements Action{
    readonly type = RESET
    // constructor(public payload: number) {

    // }
}

export class AddToCart implements Action{
    readonly type = ADD_TO_CART
    // constructor(public payload: number) {

    // }
}

export type COUNTER_ACTIONS_ALL = Increment | Decrement | Reset | AddToCart;