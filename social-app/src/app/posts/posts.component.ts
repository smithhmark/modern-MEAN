import { Component, OnInit } from '@angular/core';

const POSTS = [
  { username:'@dickeyxxx', body: 'Node Rules' },
  { username:'@jeffdickey', body:'trying out angular2' }
];

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts = POSTS;

  constructor() { }

  ngOnInit() {
  }

}
