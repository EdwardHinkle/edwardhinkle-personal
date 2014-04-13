 var ResumeView = TemplateView.extend({
    template: 'resume',
    className: "resume",
    initialize: function(options){
      this.parentEl = options.parentEl || undefined;
      
      $(this.parentEl).prepend(this.$el);
      this.render();
    },
    postRender: function() {
      
    }
});