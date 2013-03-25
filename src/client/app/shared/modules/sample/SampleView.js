/**
 * @author      Alex Ehrnschwender <alex@tastemakerx.com>
 * @created     
 * @desc        sample backbone view
 */

define([
    'app',
    'SampleModel',
    'SampleCollection',
    'hbs!sample/sample-template'
],
function(app, SampleModel, SampleCollection, SampleTpl){

    var ActivityListView = Backbone.View.extend({

        initialize: function(options){
            _.bindAll(this);

            this.sampleCollection = new SampleCollection([], {});
            this.sampleCollection.on('change', this.render);

        },

        events: { },

        onClose: function(){ },

        render: function(){

            return this;
        }


    });

    return ActivityListView;
});

