import Route from '@ember/routing/route';

export default class RequestsReviewRoute extends Route {

  model( params ) {

    return params.NewRequestFormComponent;

  }

}
