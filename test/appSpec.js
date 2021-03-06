define(['app', 'jquery', 'underscore'], function (App, $, _) {

    describe('just checking', function () {

        it('works for app', function () {
            var el = $('<div></div>');

            var app = new App(el);
            app.render();

            expect(el.text()).to.equal('require.js up and running');
        });

        it('works for underscore', function () {
            // just checking that _ works
            expect(_.size([1, 2, 3])).to.equal(3);
        });

    });

});
