/**
 * @author      Alex Ehrnschwender
 * @created		
 * @desc		configure WEB aliases and dependencies, bootstrap the desktop app router
 */

if (typeof DEBUG === 'undefined') {                // removed in production by uglify
    DEBUG = true;

    require.config({                             // cache busting for development
        urlArgs: "bust=" +  (new Date()).getTime()
    });
}

require.config({

    baseUrl: '/client/app/web',

    paths: {

        // Shared app modules
        'helpers'                  : '../shared/helpers',
        'modules'                  : '../shared/modules',

        // Core libs
        //'jquery'                 : '../../assets/libs/jquery/jquery',
        'jquery'                   : 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min',
        'handlebars'               : '../../assets/libs/require/plugins/Handlebars',
        'hbs'                      : '../../assets/libs/require/plugins/hbs',
        'json2'                    : '../../assets/libs/require/plugins/json2',
        'i18nprecompile'           : '../../assets/libs/require/plugins/i18nprecompile',
        'underscore'               : '../../assets/libs/underscore/lodash',
        'backbone'                 : '../../assets/libs/backbone/backbone',

        //'domReady'               : '../../assets/libs/require/plugins/domReady',
        //'text'                   : '../../assets/libs/require/plugins/text',

        // Plugins
        'bootstrap-tab'            : '../../assets/vendor/bootstrap/js/bootstrap-tab',
        'spin'                     : '../../assets/libs/spin/spin-min',
        'jquery-dotdotdot'         : '../../assets/libs/jquery/plugins/jquery-dotdotdot',
        'jquery-loading-dotdotdot' : '../../assets/libs/jquery/plugins/jquery-loading-dotdotdot'

        //'jquery-drag'        : '../../assets/libs/jquery/plugins/jquery-event-drag',
        //'jquery-drop'        : '../../assets/libs/jquery/plugins/jquery-event-drop'
        //'jquery-drag-live' : '../../assets/libs/jquery/plugins/jquery-event-drag-live',
        //'jquery-drop-live' : '../../assets/libs/jquery/plugins/jquery-event-drop-live',

    },

    // non-AMD libs
    shim: {
        'jquery'            : { exports : '$' },
        'underscore'        : { exports : '_' },
        'backbone'          : { deps : ['underscore', 'jquery'], exports : 'Backbone' },
        'bootstrap'         : { deps : ['jquery'], exports : 'Bootstrap' },
        //'handlebars'      : { exports : 'Handlebars' },

        'jquery-dotdotdot'  : { deps : ['jquery'] },
        'jquery-loading-dotdotdot'  : { deps : ['jquery'] }
        //'jquery-drag'  : { deps : ['jquery'] },
        //'jquery-drop'  : { deps : ['jquery'] }

    },

    hbs: {
        templateExtension: "html",
        disableI18n: true,
        helperDirectory: 'helpers/'
    }

});

require(['main']);                   // Initialize the application with the main application file.
