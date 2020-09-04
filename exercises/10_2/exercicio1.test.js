const uppercase = require('./exercicio1');

it('teste to equal TEST', (done) => {
  uppercase('test', (stringCallback) => {
    expect(stringCallback).toBe('TEST');
    done();
  })
})

//apoio para entender: https://scrimba.com/c/cNkRBBhw