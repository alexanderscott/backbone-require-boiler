/**
 * @author      Alex Ehrnschwender
 * @created     
 * @desc        WEB app globals
 */
define([
    "jquery",
    "underscore",
    "backbone",
    "spin"
],
function($, _, Backbone, TMX, Spinner) {

    var app = {
        // The root path to run the application through.
        root : "/",
        URL : "/",
        API : "",

        SOURCE: 'web',
        WEB: true,

        spinnerOpts : {
          lines: 13, // The number of lines to draw
          length: 5, // The length of each line
          width: 4, // The line thickness
          radius: 8, // The radius of the inner circle
          corners: 1, // Corner roundness (0..1)
          rotate: 0, // The rotation offset
          color: '#463b35', // #rgb or #rrggbb
          speed: 1, // Rounds per second
          trail: 60, // Afterglow percentage
          shadow: false, // Whether to render a shadow
          hwaccel: false, // Whether to use hardware acceleration
          className: 'spinnerEl', // The CSS class to assign to the spinner
          zIndex: 2000, // The z-index (defaults to 2000000000)
          top: 'auto', // Top position relative to parent in px
          left: 'auto' // Left position relative to parent in px
        },
        spinnerShow : function($spinnerWrapper){
            if('spinner' in app) app.spinner.stop();
            app.spinner = new Spinner(app.spinnerOpts).spin();
            if(!$spinnerWrapper) $spinnerWrapper = $('.spinner');       // Use the generic class if a spinner is not passed in
            $spinnerWrapper.append(app.spinner.el).show();
        },
        spinnerHide : function(){
            $('.spinner').hide();
            app.spinner.stop();
        }
    };

    //$.ajaxSetup({ cache: false });          // force ajax call on all browsers (looking at you, IE)

    // Global event aggregator
    app.eventAggregator = _.extend({}, Backbone.Events);

    // Global queryString function for all models and collections
    Backbone.Model.prototype.queryString = Backbone.Collection.prototype.queryString = function() {
        var qryStr = '?';
        for(var i = 0; i < this.reqParams.length; i++){
            qryStr += this.reqParams[i] + '&';
        }
        return qryStr + 'source='+app.SOURCE;
    };

    // View.close() event for garbage collection
    Backbone.View.prototype.close = function() {
        this.remove();
        this.unbind();
        if (this.onClose) {
            this.onClose();
        }
    };

    return app;

});
