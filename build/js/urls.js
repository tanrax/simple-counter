define(["views/viewIndex"],function(e){return Backbone.Router.extend({routes:{"":"index","*default":"error404Router"},index:function(){new e},error404Router:function(){}})});