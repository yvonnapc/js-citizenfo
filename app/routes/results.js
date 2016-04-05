import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?zip=' + params.zip + '&apikey=489cf1a3d1704f45a0a722b55914b755';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
