requirejs.config({
    baseUrl: './js',
    paths: {
        backbone: 'core/backbone-min',
        jquery: 'core/jquery.min',
        underscore: 'core/underscore-min',
		bootstrap: 'core/bootstrap.min',
		text: 'core/text',
		urls: 'urls',
		viewIndex: 'views/viewIndex',
		modelIndex: 'models/modelIndex'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
		bootstrap: {
            deps: ['jquery'],
		},
		urls: {
			deps: ['backbone']
		},
		viewIndex: {
			deps: ['urls']
		},
		modelIndex: {
			deps: ['viewIndex']
		}
	}
});

require(['urls'], function(Urls) {
	new Urls()
	Backbone.history.start();
});
