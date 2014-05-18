var Router = Backbone.Router.extend({
    routes:{
        '': 'front',
        //'resume': 'resume',
        'work': 'work',
        'about': 'aboutme',
        'github': 'github'
    },
    front: function() {
        this.github();
    },
    resume: function() {
        appView.updatePage("resume", ResumeView);
    },
    work: function() {
        appView.updatePage("work", WorkView);
    },
    aboutme: function() {
        appView.updatePage("about", AboutView);
    },
    github: function() {
        appView.updatePage("github", GithubView);
    }
});