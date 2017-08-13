import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class GetService {

  constructor(public http:Http) { }

  getUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users").map(f=>f.json());
  }
}
