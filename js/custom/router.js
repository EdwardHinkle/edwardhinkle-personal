var Router = Backbone.Router.extend({
    routes:{
        '': 'github',
        //'resume': 'resume',
        //'work': 'work',
        //'about': 'aboutme',
        'github': 'github'
    },
    front: function() {
        console.debug("Front Page");
    },
    resume: function() {
        appView.updateNavigation("resume");
        console.debug("Resume Page");
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

        
        
    }
});