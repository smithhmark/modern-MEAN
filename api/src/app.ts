import * as path from 'path';
import * as express from 'express';
//import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import { Post } from './schemas/post';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    //this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    /* This is just to get up and running, and to make sure what we've got is
     * working so far. This function will change when we start to add more
     * API endpoints */
    let router = express.Router();
    // placeholder route handler
    router.get('/api/posts', (req, res, next) => {
      Post.find((err, posts) => {
        if (err) { return next(err); }
        res.json(posts);
      });
    });

    router.post('/api/posts', (req, res, next) => {
      console.log('post received!');
      console.log('uname', req.body.username);
      console.log('body', req.body.body);
      var post = new Post({
        username: req.body.username,
        body: req.body.body
      });
      post.save(function (err, post) {
        if (err) {return next(err);}
        res.status(201).json(post);
      });
    });

    this.express.use('/', router);
  }
}

export default new App().express;
