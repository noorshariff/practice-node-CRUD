import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator} from './custom.validator'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }
get empUser(){
  return this.Rform.get('empUser');
}

get empPhone(){
  return this.Rform.get('empPhone');
}

Rform=new FormGroup({
  empUser:new FormControl('',[Validators.required,CustomValidator.noSpace,Validators.pattern('[a-zA-Z]*')]),
  empPhone:new FormControl('',[Validators.required,CustomValidator.noSpace])
})

onSubmit(Rform){
  console.log(Rform)
}






  ngOnInit() {
  }

}
