import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: object;

  constructor(private service: DataService, private route: ActivatedRoute) {
    // Need to get the user id so that we can use it later to get the user information.
    this.route.params.subscribe(params => this.user = params.userid);
  }

  ngOnInit() {
    this.service.getUser(this.user).subscribe(
      service => this.user = service
    )
  }

}
