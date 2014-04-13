var Router = Backbone.Router.extend({
    routes:{
        '': 'github',
        'resume': 'resume',
        //'work': 'work',
        //'about': 'aboutme',
        'github': 'github'
    },
    front: function() {
        console.debug("Front Page");
    },
    resume: function() {
        appView.updatePage("resume", ResumeView);
    },
    work: function() {
        appView.updateNavigation("work");
        console.debug("Work Page");
    },
    aboutme: function() {
        appView.updateNavigation("about");
        console.debug("Me!!!!");
    },
    github: function() {
        appView.updatePage("github", GithubView);
    }
});