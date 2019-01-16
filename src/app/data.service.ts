import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getUser(id: any){
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + id);
  }
}
