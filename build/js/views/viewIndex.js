define(["text!../../templates/templateIndex.html","../models/modelIndex"],function(e,t){return Backbone.View.extend({el:"#app-container",model:new t,template:_.template(e),initialize:function(){this.render(),this.listenTo(this.model,"change",this.render)},render:function(){this.$el.html(this.template({counter:this.model.get("counter")}))},events:{"click #aumentar":"aumentar","click #disminuir":"disminuir","click #resetear":"resetear","click #ayuda":"ayuda"},aumentar:function(){this.model.aumentarContador()},disminuir:function(){this.model.disminuirContador()},resetear:function(){this.model.resetearContador()},ayuda:function(){}})});