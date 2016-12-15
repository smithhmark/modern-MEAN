import { Injectable } from '@angular/core';

import { Post } from './post';
import { POSTS } from './mock-posts';

@Injectable()
export class PostService {

  constructor() { }

  getPosts(): Promise<Post[]> { 
    return this.getPostsInstantly();
    //return this.getPostsSlowly();
  }

  getPostsInstantly(): Promise<Post[]> {
    return Promise.resolve(POSTS);
  }

  getPostsSlowly(): Promise<Post[]> {
    return new Promise<Post[]>(resolve =>
                               setTimeout(resolve, 2000)) // delay 2 seconds
                               .then(() => this.getPostsInstantly());
  }
}
