Ember.TEMPLATES["test/fixtures/text"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compiledVersion = '1.0.rc.2';
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("Basic template that does nothing.");
  
});

Ember.TEMPLATES["test/fixtures/simple"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compiledVersion = '1.0.rc.2';
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("<p>Hello, my name is ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(".</p>");
  return buffer;
  
});

Ember.TEMPLATES["test/fixtures/grandparent/parent/child"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compiledVersion = '1.0.rc.2';
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("Should be nested.");
  
});