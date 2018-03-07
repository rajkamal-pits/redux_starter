import { Component } from '@angular/core';
import {Observable} from 'rxjs/Rx'
import {Store} from "@ngrx/store";
import * as ConterActions from "./actions/counter.actions"
import {CounterModel} from "./model/counter.model"

interface AppState {
  counter: CounterModel;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  counter: number;
  addtocart : number;

  constructor(private store : Store<AppState>){
      store.select('counter').subscribe(res=>{
        console.log(res);
        this.counter = res.counter;
        this.addtocart = res.addtocart;
     });
  }

  increment(){
     this.store.dispatch(new ConterActions.Increment())
  }

  decrement(){
    this.store.dispatch(new ConterActions.Decrement())
  }

  reset(){
    this.store.dispatch(new ConterActions.Reset())
  }

  addToCart(){
    this.store.dispatch(new ConterActions.AddToCart())
  }
}
