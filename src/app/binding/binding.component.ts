import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  myBlog: string = "My First Angular Blog";
  imgUrl = "https://cdn.pixabay.com/photo/2020/01/30/18/21/landscape-4806171__340.jpg"
  isSuccess = false;
  flag: boolean = false;
  isTrue: boolean = true;
  number=2;

  ssalert() {
    alert("hii google")
  }
  constructor() {
    setInterval(()=>{
      setTimeout(() => {
        this.flag = true;
      }, 100)
    
    })
  
  }

  name = "Ayusha"

  count=[1,2,3]

  ngOnInit() {
  }

}
