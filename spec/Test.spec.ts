
fdescribe('root', () => {
  beforeEach(async () => {
    console.log('root: begin');
    await sleep(1500);
    console.log('root: end');
  });

  describe('inner', () => {
    beforeEach(async () => {
      console.log('inner: begin');
      await sleep(1500);
      console.log('inner: end');
    });

    it('inner it', () => {
      expect().nothing();
    });

  });

  function sleep(delayInMilliseconds: number) {
    return new Promise( resolve => setTimeout(resolve, delayInMilliseconds) );
  }
});
