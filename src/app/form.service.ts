import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  url = "https://product-details-e7156.firebaseio.com/"

  constructor(private http: HttpClient) {
    this.getData()
  }

  postData(data) {
    return this.http.post(`${this.url}/product.json`, data);
  };

  getData() {
    return this.http.get(`${this.url}/product.json`).pipe(map(data => {
      let newArray: any = [];
      for (let key in data) {
        newArray.push({ ...data[key], id: key })
      }
      return newArray
    }))
  }
  updateData(data) {
    console.log(data, 'id in service')
    return this.http.put(`${this.url}/product/${data.id}.json`, data);
  }

  deleteData(id) {
    return this.http.delete(`${this.url}/product/${id}.json`)
  }
}
