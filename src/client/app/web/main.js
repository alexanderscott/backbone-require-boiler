/**
 * @author      Alex Ehrnschwender
 * @created		
 * @desc		bootstrap the web app router
 */

require([
    "app",
    "router"
],
function(app, MainRouter) {

    Backbone.emulateHTTP = true;

    app.router = new MainRouter();

    // HTML5 pushState for URLs without hashbangs
    var hasPushstate = !!(window.history && history.pushState);
    if(hasPushstate){
        Backbone.history.start({pushState: true, root: '/'});
    } else {
        Backbone.history.start();
        //Backbone.history.start({root: window.location.pathname+'/'});
    }

    // All navigation that is relative should be passed through the navigate
    // method, to be processed by the router. If the link has a `data-bypass`
    // attribute, bypass the delegation completely.
    $('#bb-main').on("click", "a:not([data-bypass])", function(evt) {
        var href = $(this).prop("href");                                        // Get the absolute anchor href.
        var root = location.protocol + "//" + location.host + app.root;         // Get the absolute root.

        // Ensure the protocol is not part of URL, meaning it's relative.
        if (href && href.slice(0, root.length) === root) {
            // Stop the default event to ensure the link will not cause a page
            // refresh.
            evt.preventDefault();

            // `Backbone.history.navigate` is sufficient for all Routers and will
            // trigger the correct events. The Router's internal `navigate` method
            // calls this anyways.  The fragment is sliced from the root.
            Backbone.history.navigate(href.slice(root.length), true);
        }
    });

});

