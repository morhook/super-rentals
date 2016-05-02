import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {title: 'wizard for testing list',steps:[
            {
                alias:'step1',
                items:[
                    {
                        type:'list',
                        items: [{
                            type:'text',
                            text: 'hola'
                        }, {
                            type:'text',
                            text:'segundo textitem'
                        }, 'third item just a string', {
                            type: 'link',
                            text: 'go go go'
                        }]
                    }
                ]
            }
        ]};
    }
});
