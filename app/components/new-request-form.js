import Component from '@glimmer/component';
import { action } from "@ember/object";

export default class NewRequestFormComponent extends Component {

  @action
  submit() {
    console.log(this);
  }

}
