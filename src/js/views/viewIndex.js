define([
		'text!../../templates/templateIndex.html'
	], function (templateIndex) {
	return Backbone.View.extend({
		el: '#app-container',
		template: _.template(templateIndex),
		initialize: function() {
			this.render();
		},
		render: function() {
			this.$el.html(this.template());
		}
	});
});
