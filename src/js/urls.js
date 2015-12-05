define([
		'views/viewIndex',
		'views/viewAyuda'
	], function(ViewIndex, ViewAyuda) {
	return Backbone.Router.extend({
		routes: {
			'': 'index', // Index
			'ayuda': 'ayuda', // Ayuda
			'*default': 'error404Router', // 404
		},
		view: null,
		index: function() {
			if(this.view != null) this.view.undelegateEvents();
			this.view = new ViewIndex();
		},
		ayuda: function() {
			if(this.view != null) this.view.undelegateEvents();
			this.view = new ViewAyuda();
		},
		error404Router: function() {
			//miView = new View404();
		}
	});
});
