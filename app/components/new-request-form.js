import Component from '@glimmer/component';
import { action } from "@ember/object";
import { inject as service } from '@ember/service';

export default class NewRequestFormComponent extends Component {
  @service router;

  @action
  sendToPreview( formData ) {
    this.router.transitionTo('requests.review', formData);
  }

}
