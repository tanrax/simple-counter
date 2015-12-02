define(['views/viewIndex'], function(ViewIndex) {
	return Backbone.Router.extend({
		routes: {
			'': 'index', // Index
			'*default': 'error404Router', // 404
		},
		index: function() {
			new ViewIndex();
		},
		error404Router: function() {
			//miView = new View404();
		},
	});
});
