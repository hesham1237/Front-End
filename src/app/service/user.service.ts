import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Users } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private AddUserURL = "http://localhost:8080/Users/addUser"
  private GetAllUsersURL = "http://localhost:8080/Users/GetAllUsers";
  

  constructor(private httpClient: HttpClient) { }

  addUser(user: Users) {
    return this.httpClient.post(this.AddUserURL,user);
  };

  getAllUsers() {
    return this.httpClient.get<Users[]>(this.GetAllUsersURL);
  };

}