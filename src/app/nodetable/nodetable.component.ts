import { Component, OnInit } from '@angular/core';
import { NodeService } from '../node.service';

@Component({
  selector: 'app-nodetable',
  templateUrl: './nodetable.component.html',
  styleUrls: ['./nodetable.component.css']
})
export class NodetableComponent implements OnInit {
newArray:any=[];
editable={
  _id:null,
  name:null,
  password:null

}
  constructor( private service:NodeService) { 
    this.getData()
  }

getData(){
  this.service.getData().subscribe(data=>{
    this.newArray=data;
    console.log(data);
  },err=>{
    console.log(err);
  },()=>{
    console.log("getting successfully")
  })
}

updateData(data){
  console.log(data);
  this.editable=data;
}
postEditFormData(data){
   this.service.updateServiceData(data).subscribe(data=>{
     console.log(data);
   },err=>{
     console.log(err)
   },()=>{
     console.log("updated successfully")
   })
 }
deleteFormData(id){
  console.log(id);
  this.service.deleteServiceData(id).subscribe(data=>{
    console.log(data);
  },err=>{
    console.log(err)
  },()=>{
    console.log("deleted successfully")
  })
}



  ngOnInit() {
  }

}
