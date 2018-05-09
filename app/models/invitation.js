import DS from 'ember-data';

export default DS.Model.extend({

   email: DS.attr('string'),
   optionA: DS.attr('string'),
   optionB: DS.attr('string'),
   optionC: DS.attr('string')

});
