define(['jquery', 'util'], ($, util) => {
    var App2 = function (el) {
        this.el = el;
    };

    App2.prototype.render = function () {
        this.el.html('<div>APP2 append: 123123</div>');
        util.selfAppend(this.el, '<div>utils.selfAppend: 56746538535</div>');
    };

    return App2;

});
