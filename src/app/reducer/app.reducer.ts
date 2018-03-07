import { ActionReducerMap } from '@ngrx/store';
import * as fromCounter from './counter.reducer'
import {CounterModel} from "../model/counter.model"


export const appReducer  =  {
    counter : fromCounter.counterReducer,
}
