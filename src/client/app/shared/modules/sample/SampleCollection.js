/**
 * @author      Alex Ehrnschwender
 * @created     
 * @desc        sample backbone collection
 */

define([
    'app', 
    'SampleModel'
], function(app, SampleModel) {

    var SampleCollection = Backbone.Collection.extend({
        //model: SampleModel,

        initialize: function(models, options) { },

        url: function() {
            return app.API + '/sample/';
        },

        reqParams: [],

        parse: function(res, xhr) {
            return res;
        },

        // for collection sorting
        //comparator: function(){ },

        /* Should eliminate duplicates when added to the collection */
        add : function(models, options) {
            var newModels = [];
            _.each(models, function(model) {
                if (_.isUndefined(this.get(model.id))) {
                    newModels.push(model);
                }
            }, this);
            return Backbone.Collection.prototype.add.call(this, newModels, options);
        }


    });

    return SampleCollection;
});

