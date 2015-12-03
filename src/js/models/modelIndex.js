define(function() {
    return Backbone.Model.extend({

		/**
		 * Variables
		 */
		defaults: {
			counter: 0
		},

		/**
		 * Costructor
		 */
        initialize: function() {
        },

		/**
		 * Método que aumenta el contador
		 * @return void
		 */
		aumentarContador: function() {
			this.set('counter', this.get('counter') + 1);
		},

		/**
		 * Método que disminuye el contador
		 * @return void
		 */
		disminuirContador: function() {
			if(this.get('counter') > 0) this.set('counter', this.get('counter') - 1);
		},

		/**
		 * Método que resetea el contador
		 * @return void
		 */
		resetearContador: function() {
			this.set('counter', 0);
		}
    })
});
