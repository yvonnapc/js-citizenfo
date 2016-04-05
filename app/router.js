import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  this.route('billresults', {path: 'billresults/:keyword'});
  this.route('bill', {path: 'bill/:billId'});
});

export default Router;
