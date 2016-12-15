import { Component, OnInit } from '@angular/core';

import { PostService } from '../post.service';
import {Post} from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  newBody: string;
  posts: Post[];

  constructor(private postService: PostService) { }

  getPosts(): void {
    this.postService.getPosts().then(posts => { this.posts = posts; });
  }


  ngOnInit() {
    this.getPosts();
  }

  addPost(): void{
    if (this.newBody) {
      this.posts.unshift({username: 'current_user', body: this.newBody});
    }
    this.newBody = null; // manually clearing the input field
  }

}
