define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/tnm.html',
    'app/tableFacade',
    'views/tnm/T1View'
], function ($, _, Backbone, template, tables, T1View) {

    return Backbone.View.extend({
        el: '#content',

        render: function () {
            var parentId = 'accordion';
            var t1View  = new T1View();
            this.$el.html(_.template(template, {}));
            t1View.render(parentId);
        }
    });
});