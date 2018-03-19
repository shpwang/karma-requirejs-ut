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

        it('Spy: Test util execute one time', function () {
            var utilAppendSpy = sinon.spy(util, 'selfAppend');
            sut.render();
            expect(utilAppendSpy.calledOnce).to.equal(true);
            expect(utilAppendSpy.firstCall.args[1]).to.equal('<div>utils.selfAppend: 56746538535</div>');
            utilAppendSpy.restore();
        });

        it('Stub: Return empty value', function () {
            var utilAppendStub = sinon.stub(util, 'selfAppend').returns('');
            sut.render();
            expect(el.text()).to.equal('APP2 append: 123123');
            utilAppendStub.restore();
        });

    });

});
