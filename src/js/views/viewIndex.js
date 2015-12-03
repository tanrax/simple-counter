define([
		'text!../../templates/templateIndex.html',
		'../models/modelIndex'
	], function (templateIndex, modelIndex) {
	return Backbone.View.extend({
		el: '#app-container',
		template: _.template(templateIndex),
		model: new modelIndex(this),
		hola: 'mundo',
		initialize: function() {
			this.render();
		},
		render: function() {
			this.$el.html(this.template());
		},
		events: {
			'click #aumentar': 'aumentar'
		},
		aumentar: function() {
			console.log('aumentando')
		}
	});
});
