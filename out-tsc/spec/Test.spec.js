var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
fdescribe('root', () => {
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        console.log('root: begin');
        yield sleep(1500);
        console.log('root: end');
    }));
    describe('inner', () => {
        beforeEach(() => __awaiter(this, void 0, void 0, function* () {
            console.log('inner: begin');
            yield sleep(1500);
            console.log('inner: end');
        }));
        it('inner it', () => {
            expect().nothing();
        });
    });
    function sleep(delayInMilliseconds) {
        return new Promise(resolve => setTimeout(resolve, delayInMilliseconds));
    }
});
//# sourceMappingURL=Test.spec.js.map