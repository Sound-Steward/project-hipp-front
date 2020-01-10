import Controller from '@ember/controller';
import { action } from "@ember/object";

export default class RequestsReviewController extends Controller {

  @action
  submitForm( formData ) {
    const { ipcRenderer } = requireNode('electron');

    let dataForIpc = {
      firstName: formData.firstname,
      lastName: formData.lastname,
      dob: formData.dob,
      ssn: formData.ssn,
      telNum: formData.telnum,
      mpin: formData.mpin,
      disSpecifics: formData.dis_specific,
      disDateFrom: formData.dis_date_from,
      disDateTo: formData.dis_date_to,
      disPurpose: formData.purpose,
      partyUsing: formData.party_using,
      partyRecieving: formData.party_recieving,
      disEffSpan: formData.eff_span,
      reqSigDate: formData.sig_date,
      rewSig: formData.sig
    }

    ipcRenderer.send('request-form', dataForIpc);
  }

}
