requirejs.config({
    paths: {
        'jquery': '../node_modules/jquery/dist/jquery',
        'lodash': '../node_modules/lodash/lodash',
        'underscore': '../node_modules/underscore/underscore'
    },

    shim: {
        'underscore': {
            exports: '_'
        }
    }
});

define(['app', 'jquery', 'lodash', 'app2'], function (App, $, _, App2) {
    var app = new App($('#app'));
    app.render();
    console.log(_.size([1,2,3]));

    var app2 = new App2($('#app2'));
    app2.render();
});
