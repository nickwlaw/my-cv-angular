import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { User } from '../../../model/user.class';
import { JsonResponse } from '../../../model/json-response.class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  jr: JsonResponse;

  constructor(private userSvc: UserService) { }

  ngOnInit() {
    this.userSvc.list().subscribe(jrespList => {
      this.jr = jrespList;
      this.users = this.jr.data as User[];
      console.log(this.users);
    });
    console.log(this.users);
  }

}
