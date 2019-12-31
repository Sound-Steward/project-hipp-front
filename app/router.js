import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('requests', function() {
    this.route('new', {path: '/new'});
    this.route('index', {path: '/'});
    this.route('request', {path: '/:request_id'});
  });
});
