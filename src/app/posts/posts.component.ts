import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  private posts: object;
  private users: object;

  constructor(private service:DataService) { }

  ngOnInit() {
    this.service.getPosts().subscribe(
      service => this.posts = service
    )

    this.service.getUsers().subscribe(
      service => this.users = service
    )
  }

}
