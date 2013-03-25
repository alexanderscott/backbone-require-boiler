Backbone.js | Require.js | SASS Boilerplate
==========================================

This project acts as a boilerplate to develop apps in using backbone/require frameworks and SASS styles.
It was compiled using best-practices and lessons learned after developing production apps on this stack.


Features
---------------
 * Require path configuration & build script for distribution builds
 * Backbone app globals & helpful view/model/collection extensions
 * SASS component-based structure, with imports from bootstrap-sass
 * Automatic spritesheet generation using compass
 * Testing structure with sample API return (JSON) and Sinon unit-tests


Install
---------------
 * Clone the repository via `git clone https://github.com/alexanderscott/backbone-require-boiler.git`
 * Configure any necessary paths and point your server to DocumentRoot at `src` folder
 * Install Compass via `sudo gem install compass`
 * CD into `src/client/assets` and run `compass watch` to poll for SASS & asset changes
