var TemplateView = Backbone.View.extend({
    render: function(renderOptions) {
        if (typeof(this.template) == 'string') {
            var templateName = this.template;
        } else {
            templateName = this.template(renderOptions);
        }
        
        var context = this.templateContext ? this.templateContext(renderOptions) : {};

        var template = appView.getTemplate(templateName);
        
        var html = template(context);

        if (this.preRender) {
            html = this.preRender(renderOptions, html);
        }
        
        // Put html in page
        this.$el.html(html);


        if (this.postRender) {
            this.postRender(renderOptions);
        }

        return this;
    }
});