import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    billLookup(){
      var params = {
        keyword: this.get('keyword')
      };
      this.sendAction('billLookup', params);
    }
  }
});
