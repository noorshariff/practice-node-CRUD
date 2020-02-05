import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {
  display = false;
  employees = ["jabeena", "ayush", "archana"]
  classArray = ["bg-success", "display-4", "text-center"]
  isSuccess=true;

  myStyles = {
    'background-color': 'lime',
    'font-size': '20px',
    'font-weight': 'bold',
    'color': 'red'
    }

  // public isSuccess = false;
  // public isFail = true;
  // public isSpecial = true;
  // public styleClasses = {
  //   "class-success": this.isSuccess,
  //   "class-fail": this.isFail,
  //   "class-special": this.isSpecial
  // }










  mySubscription: Subscription
  constructor() { }

  ngOnInit() {
    // this.mySubscription=interval(100).pipe(map(data=>{
    //   return data+1;
    // })).subscribe(data1=>{
    //   console.log(data1)
    // },err=>{
    //   console.log(err)
    // },()=>{
    //   console.log("Subscription completed");
    // })
  }

  ngOnDestroy() {

    // this.mySubscription.unsubscribe();
  }

  students = [{
    name: 'praveen',
    age: 15
  },
  {
    name: 'kiran',
    age: 22
  }]
}
