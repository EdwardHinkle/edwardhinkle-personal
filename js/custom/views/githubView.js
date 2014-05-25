 var GithubView = Backbone.View.extend({
    className: "github row",
    initialize: function(options){
      this.parentEl = options.parentEl || undefined;
      
      $(this.parentEl).prepend(this.$el);
      this.render();
    },
    render: function() {

         // Fetch all github repos
         $.getJSON("https://api.github.com/users/edwardhinkle/repos?sort=pushed", {}, $.proxy(function(data){
            
            this.$el.append($("<div>").attr("id", "repo-container").addClass("small-12 medium-12 columns"));
            
            // Sort through all repos
            $.each(data, $.proxy(function(idx, repo){
              
              // Check if repo is a fork
              if (!repo.fork) {
               
                // Repo isn't a fork, so we want to add it to the list
                
                // Create Box for Repo
                var repoBox = $("<div>").attr("id", repo.name).addClass("repo medium-3 small-12").append(
                        $("<div>").addClass("repo-header " + repo.language).append(
                           $("<h2>").addClass("repo-title").append(
                              $("<a>").attr("href", repo.html_url).html(repo.name)
                           )
                        )
                     );
                
                // Add repo box to container
                $("#repo-container").append(repoBox);
                
                repoBox.find("div.repo-header").append($("<h3>").addClass("repo-language " + repo.language).html(repo.language));
                
                repoBox.append($("<p>").html(repo.description));

                if (repo.homepage !== null && repo.homepage != "" && !repo.homepage.match(/edwardhinkle.com$/)) {
                  repoBox.append($("<a>").attr("href", repo.homepage).addClass("project-link").html("visit project page"));
                }
        
               // Add stats box
               var statsBox = $("<p>").addClass("stats");
               repoBox.append(statsBox);
               // Add Forks to Stats box
               statsBox.append($("<i>").addClass("fi-share"));
               statsBox.append($("<span>").addClass("fork-count").html(repo.forks_count));
               // Add starred to Stats box
               statsBox.append($("<i>").addClass("fi-star"));
               statsBox.append($("<span>").addClass("star-count").html(repo.watchers_count));
                
              }
            }, this)); // End repo loop
            
            //-- Activate jQuery Isotope --//
            $('#results').isotope({
              itemSelector : '.repo',
              layoutMode : 'masonry'
            });
      
         }, this));
    }       
});