import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private service: FormService,private router:Router) { }
  postFormData(form) {
    this.service.postData(form.value).subscribe(data => {
      console.log(data);
      this.router.navigate(['/table'])
    },err => {
      console.log(err);
    }, () => {
      console.log("Posted Data Successfully")
    })

  }
  ngOnInit() {
  }

}
