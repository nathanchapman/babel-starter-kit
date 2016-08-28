import chai from 'chai';
import mocha from 'mocha';
const { assert, expect } = chai;

import Main from '../src/main';

describe('TestSuite', () => {
  it('someFunction() should return `Wooo!`', () => {
    expect(new Main().someFunction()).to.equal('Wooo!');
  });
});
