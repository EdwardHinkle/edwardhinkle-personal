 var GithubView = TemplateView.extend({
    template: 'github',
    initialize: function(options){
      this.parentEl = options.parentEl || undefined;
      
      $(this.parentEl).prepend(this.$el);
      this.render();
    },
    postRender: function() {
      
    }
});