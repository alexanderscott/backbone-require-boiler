({
    //appDir: "../app",                                     // All files get copied from path, use baseUrl as alternative
    baseUrl: "../app/web",                                  // All modules loaded relative to this path
    //dir: "../dist",                                       // Directory to save output, defaults to sibling folder (client-build)
    mainConfigFile: '../app/web/config.js',

    //keepBuildDir: true,                                   // Whether to keep or recreate output directory
    //removeCombined: true,                                 // WARNING! will delete source files =(

    name: "main",                                           // Name of the output module when only one is being built
    out: "../dist/web/main.js",                             // Path for output of module when only one is being built

    optimize: "uglify",                                     // Type of compiler/minifier

    pragmasOnSave: {
        excludeHbsParser : true,                            //removes Handlebars.Parser code (used to compile template strings) set
                                                            //it to `false` if you need to parse template strings even after build
                                                            //
        excludeHbs: true,                                   // kills the entire plugin set once it's built.
        excludeAfterBuild: true                             // removes i18n precompiler, handlebars and json2
    },

    locale: "en-us",

    //inlineText: true,                                     // Used for require text plugin inline compiling (not using in prod)

    uglify: {
        defines: {                                          // Define variables to be included upfront when compiling/minifying build
            DEBUG: ['name', 'false']
        }
    },


    paths: {
        jquery: "empty:"                                    // Resolve empty for no conflict (already loading in site) and shims can resolve deps sans CDN
    }


    //wrap: {                                               // TastemakerX license fragment to be inserted
        //startFile: "tmx-license-header.frag"
    //}

})
