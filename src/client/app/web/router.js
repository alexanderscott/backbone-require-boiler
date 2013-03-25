/**
 * @author      Alex Ehrnschwender
 * @created     
 * @desc        desktop-web router with hash paths and corresponding fxns
 */

define([
    "app"

    // Models/Collections
    // Views

    // Templates
    //'text!templates/404.html'

],
function(app){

    var WebRouter = Backbone.Router.extend({

        initialize: function(){

        },

        routes: {
            ""                                           : "index",
            "*nonexistent"                               : "handle404"
        },

        index: function() {
            //window.location.replace("/#" + window.location.pathname.substring(1));
            this.navigate(window.location.pathname.substring(1), {trigger: true, replace: true});       // Fix for non-pushState routing (IE9 and below)
        },

        showView: function(view, animate){
            if(this.currentView) {
                this.currentView.close();
            }

            this.currentView = view;
            $('#main').html(this.currentView.render().el);
            $('html, body').animate({ scrollTop: 0 }, 'fast');
        },

        handle404: function(){
            var hostAddress= top.location.host.toString();
            window.location.href = "http://"+hostAddress+'/error_404';
        }

    });

    return WebRouter;
});
