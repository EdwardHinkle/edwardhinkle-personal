 var FooterView = TemplateView.extend({
    template: 'footer',
    initialize: function(options){
      this.parentEl = options.parentEl || undefined;
      
      $(this.parentEl).append(this.$el);
      this.render();
    },
});