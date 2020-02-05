import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NodeService {
url="http://localhost:5000"
  constructor(private http:HttpClient) {
   this.getData()
   }
postData(data){
  return this.http.post(`${this.url}/postdata`,data);
}
getData(){
  return this.http.get(`${this.url}/getData`)
}
updateServiceData(data){
  console.log(data);
  return this.http.post(`${this.url}/editemployee`,data)
}
deleteServiceData(id){
  console.log(id,"service delete id");
  return this.http.delete(`${this.url}/delete/${id}`)
}
}
