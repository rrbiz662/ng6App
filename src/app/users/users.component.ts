import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users: object;

  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getUsers().subscribe(
      // Bind this.users to service user data.
      service => this.users = service
    )
  }

}
