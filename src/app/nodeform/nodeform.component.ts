import { Component, OnInit } from '@angular/core';
import { NodeService } from '../node.service';

@Component({
  selector: 'app-nodeform',
  templateUrl: './nodeform.component.html',
  styleUrls: ['./nodeform.component.css']
})
export class NodeformComponent implements OnInit {

  constructor(private service: NodeService) { }

  ngOnInit() {
  }
  postFormData(form) {
    this.service.postData(form.value).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    }, () => {
      console.log("posted Successfully")
    })
  }
}
