import Ember from 'ember';

export default Ember.Route.extend({
  model(params){

    var url = 'https://congress.api.sunlightfoundation.com/bills/search?keywords=' + params.keyword + '&apikey=489cf1a3d1704f45a0a722b55914b755';
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.results;
    });
  }
});
