import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Post } from './post';
import { POSTS } from './mock-posts';

@Injectable()
export class PostService {
  private postsUrl = 'api/posts';

  constructor(private http: Http) { }

  getPosts(): Promise<Post[]> { 
    return this.getPostsHTTP();
  }

  getPostsHTTP(): Promise<Post[]> {
    return this.http.get(this.postsUrl)
                .toPromise()
                .then(response => response.json() as Post[])
                .catch(this.handleError);
  }

  getPostsInstantly(): Promise<Post[]> {
    return Promise.resolve(POSTS);
  }

  getPostsSlowly(): Promise<Post[]> {
    return new Promise<Post[]>(resolve =>
                               setTimeout(resolve, 2000)) // delay 2 seconds
                               .then(() => this.getPostsInstantly());
  }

  handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // debugging only
    return Promise.reject(error.message || error);
  }
}
