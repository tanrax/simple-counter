define(function(){return Backbone.Model.extend({defaults:{counter:0},initialize:function(){},aumentarContador:function(){this.set("counter",this.get("counter")+1)},disminuirContador:function(){this.get("counter")>0&&this.set("counter",this.get("counter")-1)},resetearContador:function(){this.set("counter",0)}})});