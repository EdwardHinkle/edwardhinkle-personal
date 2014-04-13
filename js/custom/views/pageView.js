 var PageView = TemplateView.extend({
    template: 'page',
    initialize: function(options){
      this.parentEl = options.parentEl || undefined;
      
      $(this.parentEl).prepend(this.$el);
      this.render();
    },
    templateContext: function() {
      return {
         activePage: Backbone.history.fragment,
         mainMenu: [
            { name: "Work",
              id: "work",
              url: "#work"
            },
            { name: "Resume",
              id: "resume",
              url: "#resume"
            },
            { name: "GitHub Repos",
              id: "github",
              url: "#github"
            },
            { name: "About",
              id: "about",
              url: "#about"
            }
         ],
         rightMenu: [
            { name: "Blog",
              id: "blog",
              url: "http://blog.edwardhinkle.com"
            },
            { name: "Social Media",
              id: "socialmedia",
              children: [
                { name: "Twitter",
                  id: "twitter",
                  url: "https://twitter.com/edwardhinkle"
                },
                { name: "Linked In",
                  id: "linkedin",
                  url: "https://www.linkedin.com/in/edwardhinkle"
                }
              ]
            }
         ]
      };
    }
});