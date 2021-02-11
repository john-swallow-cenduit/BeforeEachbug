//jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

describe('root', () => {
  beforeEach(async () =>   
  {
    
    console.log('root: begin');
    // If this sleep exceeds the default timeout the issue
    // will appear.
    await sleep(5000);
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
