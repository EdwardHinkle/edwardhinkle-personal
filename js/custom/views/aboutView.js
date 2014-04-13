 var AboutView = TemplateView.extend({
    template: 'about',
    className: "about row",
    initialize: function(options){
      this.parentEl = options.parentEl || undefined;
      
      $(this.parentEl).prepend(this.$el);
      this.render();
    },
    postRender: function() {
      
    }
});