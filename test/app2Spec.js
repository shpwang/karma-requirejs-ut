define(['app2', 'jquery', 'underscore'], function (App2, $, _) {

    describe('just checking', function () {

        it('works for app2', function () {
            var el = $('<div></div>');

            var app2 = new App2(el);
            app2.render();

            expect(el.text()).to.equal('APP2 append: 123123utils.selfAppend: 56746538535');
        });

    });

});
