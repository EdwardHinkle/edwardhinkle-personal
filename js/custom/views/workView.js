 var WorkView = TemplateView.extend({
    template: 'work',
    className: "work",
    initialize: function(options){
      this.parentEl = options.parentEl || undefined;
      
      $(this.parentEl).prepend(this.$el);
      this.render();
    },
    postRender: function() {
      
    }
});