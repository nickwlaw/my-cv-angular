import { Injectable } from '@angular/core';
import { User } from '../model/User.class';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const url: string = 'http://localhost:8080/users/';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  list(): Observable<User[]> {
    return this.http.get(url) as Observable<User[]>;
  }

  constructor(private http: HttpClient) { }
}
