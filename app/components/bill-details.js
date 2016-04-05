import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    getBillDetails() {
      var params = {
        billId: this.get('billId')
      };
      this.sendAction('getBillDetails', params);
    }
  }
});
