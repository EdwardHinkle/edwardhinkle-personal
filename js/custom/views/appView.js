 var AppView = Backbone.View.extend({
    el: '#container',
    render: function(){
    
      this.router = new Router();
      try {
         Backbone.history.start();
      } catch (e) {
         console.debug("History Fail");
         console.error(e);
      }
    
      var header = new HeaderView({
         parentEl: this.el
      });
      
      // Add Content Here
      var row = $('<div>').addClass('row');
      var main = $('<div>').addClass("small-12 columns");
      main.append($("<h1>").html("Currently under revision. Coming Soon."));
      row.append(main);
      this.$el.append(row);
      
      var footer = new FooterView({
         parentEl: this.el
      });
      
      $(document).foundation();
    
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