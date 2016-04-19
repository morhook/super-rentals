import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ['page'],
    page: 0,
    ajax: Ember.inject.service(),
    init() {
        var config = Ember.getOwner(this).resolveRegistration('config:environment'),
            promise = this.get('ajax').request(`${config.baseURL}sem-wizard/data.json`);
        promise.then((config) => {
            this.set('json', config);
        });
    }

});
