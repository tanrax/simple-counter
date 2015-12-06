define([
		'views/viewIndex',
		'views/viewAyuda'
	], function(ViewIndex, ViewAyuda) {
	return Backbone.Router.extend({
		routes: {
			'': 'index', // Index
			'ayuda': 'ayuda', // Ayuda
			'*default': 'index', // 404
		},
		view: null,
		index: function() {
			this.fixEvents();
			this.view = new ViewIndex();
		},
		ayuda: function() {
			this.fixEvents();
			this.view = new ViewAyuda();
		},
		fixEvents: function() {
			if(this.view != null) this.view.undelegateEvents();
		}
	});
});
