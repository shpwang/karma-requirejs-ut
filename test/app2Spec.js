define(['app2', 'jquery', 'util'], function (App2, $, util) {

   describe('check app2', function () {
        let el, sut;
        
        beforeEach(() => {
            el = $('<div></div>');
            sut = new App2(el);
        });

        // afterEach(() => {
        //     utilAppendStub.restore();
        // });

        it('Check render result', function () {
            sut.render();
            expect(el.text()).to.equal('APP2 append: 123123utils.selfAppend: 56746538535');
        });

        it('Test util execute one time', function () {
            var utilAppendSpy = sinon.spy(util, 'selfAppend');
            sut.render();
            expect(utilAppendSpy.calledOnce).to.equal(true);
            expect(utilAppendSpy.firstCall.args[0]).to.equal('<div><div>APP2 append: 123123</div><div>utils.selfAppend: 56746538535</div></div>');
        });

    });

});
