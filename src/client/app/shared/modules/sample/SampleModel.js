/**
 * @author      Alex Ehrnschwender
 * @created     
 * @desc        sample backbone model
 */

define(['app'], function(app) {

    var SampleModel = Backbone.Model.extend({

        initialize: function(options){
            this.validators = {};
        },

        urlRoot: function(){
            return app.API + '/sample/'; // + this.queryString();
        },

        reqParams: [],

        defaults: { }


    });

    return SampleModel;
});

