define([
		'text!../../templates/templateAyuda.html',
		'../models/modelAyuda'
	], function (templateIndex, modelAyuda) {
	return Backbone.View.extend({
		el: '#app-container',
		model: new modelAyuda(),
		template: _.template(templateIndex),
		initialize: function() {
			this.render();
			this.model.on('change', this.render, this);
			//creado
		},
		render: function() {
			this.$el.html(this.template());
		}
	});
});
