import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rental-listing', 'Integration | Component | rental listing', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{rental-listing}}`);

  assert.equal(this.$().text().trim(), 'Owner: \nType: \nLocation: \nBedrooms: \n  Show image');

  // Rental full from Veruca Salt
  this.set('rental', {title:'Grand Old Mansion', owner:'Veruca Salt', type:'Estate', 
    city: 'San Francisco', bedrooms: 15});
  this.render(hbs`
    {{#rental-listing rental=rental}}
    {{/rental-listing}}
  `);

  assert.equal(this.$().text().trim(), `Grand Old Mansion
Owner: Veruca Salt
Type: Estate
Location: San Francisco
Bedrooms: 15
  Show image`);
});
