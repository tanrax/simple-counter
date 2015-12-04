define(function() {
    return Backbone.Model.extend({

		/**
		 * Variables
		 */
		defaults: {
			counter: 0,
			numCifrasMax: 5
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
		},

		/**
		 * Get contador formateado
		 */
		getContForm: function() {
			var sCount = this.get('counter') + '';
			var iNumCont = sCount.length;
			for(var i = iNumCont; i < this.get('numCifrasMax'); i++) {
				sCount = '0' + sCount;	
			}
			return sCount;
		}
    })
});
