define([
		'text!../../templates/templateIndex.html',
		'../models/modelIndex'
	], function (templateIndex, modelIndex) {
	return Backbone.View.extend({
		el: '#app-container',
		model: new modelIndex(),
		template: _.template(templateIndex),
		initialize: function() {
			this.render();
			this.listenTo(this.model, 'change', this.render);
		},
		render: function() {
			this.$el.html(this.template({
				'counter': this.model.getContForm()
			}));
		},
		events: {
			'click #aumentar': 'aumentar',
			'click #disminuir': 'disminuir',
			'click #resetear': 'resetear'
		},
		aumentar: function() {
			this.model.aumentarContador();
		},
		disminuir: function() {
			this.model.disminuirContador();
		},
		resetear: function() {
			this.model.resetearContador();
		}
	});
});
