import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({

  responseMessage: '',
  emailAddress: '',
  optionA: '',
  optionB: '',
  optionC: '',

  isValid: match('emailAddress', /./),
  isValid: match('optionA', /./),
  isValid: match('optionB', /./),
  isValid: match('optionC', /./),
  isDisabled: not('isValid'),

  actions: {

    saveInvitation() {

      const email = this.get('emailAddress');
      const optionA = this.get('optionA');
      const optionB = this.get('optionB');
      const optionC = this.get('optionC');

      const newInvitation = this.store.createRecord('invitation', { email: email, optionA:optionA, optionB:optionB,optionC:optionC });
      newInvitation.save().then(response => {
        this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
        this.set('emailAddress', '');
        this.set('optionA', '');
        this.set('optionB', '');
        this.set('optionC', '');
      });

      // alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
      // this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
      // this.set('emailAddress', '');
    }
  }

});
