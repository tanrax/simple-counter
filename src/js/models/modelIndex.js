define(function() {
    return Backbone.Model.extend({
        initialize: function(miView) {
			console.log('modelo iniciado ' + miView.hola)
        }

    })
});
