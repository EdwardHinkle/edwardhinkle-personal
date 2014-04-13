 var AppView = Backbone.View.extend({
    el: '#container',
    render: function(){
    
      var page = new PageView({
         parentEl: this.el
      });
      
      $(document).foundation();
      
      this.router = new Router();
      try {
         Backbone.history.start();
      } catch (e) {
         console.debug("History Fail");
         console.error(e);
      }
    
    },
    getTemplate:function (templateName) {
        // Check if template is compiled yet
        if (typeof(EHTemplates.templates[templateName]) == 'string') {
            // Then compile the darn template
            EHTemplates.templates[templateName] = Handlebars.compile(EHTemplates.templates[templateName]);
        }

        return EHTemplates.templates[templateName];
    },
    updateNavigation: function(navigationId) {
      $("li.active").removeClass("active");
      $("li#nav-" + navigationId).addClass("active");
    },
    updatePage: function(navigationId, pageClass) {
      this.updateNavigation(navigationId);
      var lastPage = $("section.main-section div");
      if (lastPage.length > 0) {
         lastPage.remove();
      }
      
      var page = new pageClass({
         parentEl: $("section.main-section")
      });
    }
});
 
Handlebars.registerHelper('ifCond', function (v1, v2, options) {
   if (v1 === v2) {
      return options.fn(this);
   }
   return options.inverse(this);
});

Handlebars.registerHelper('forEach', function (context, options) {
    var ret = "";
    _.each(context, function (item) {
        this[options.hash.key] = item;
        ret += options.fn(this);
    }, this);

    this[options.hash.key] = null;
    return ret;
});