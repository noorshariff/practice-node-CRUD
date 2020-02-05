import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormService } from '../form.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  getData: any = [];
  updateData: any = []
  edit = {
    id: '',
    pname: null,
    price: null,
    Pimage: null,
    pbrand: null

  }
  constructor(private service: FormService) {
    this.getFormData()
  }

  getFormData() {
    this.service.getData().subscribe(data => {
      this.getData = data;
      console.log(this.getData);
    }, err => {
      console.log(err)
    }, () => {
      console.log("Getting data Successfully");
    })
  }

  editData(data) {
    console.log(data, "edited data");
    this.edit = data
  }

  updateFormData(data) {
    console.log(data)
    this.service.updateData(data).subscribe(data => {
      console.log(data , 'updated Dataa')
      this.updateData = data;
      console.log(this.updateData, "service update data");
    }, err => {
      console.log(err);
    }, () => {
      console.log("updated successfully");
    })
  }
  deleteData(id) {
    this.service.deleteData(id).subscribe(data => {
      console.log(data)
      this.getFormData()
    }, err => {
      console.log(err)
    }, () => {
      console.log("deleted successfully")
    })
  }
  ngOnInit() {
  }

}
