import { assert, expect } from 'chai'
import Main from '../src/Main';

describe('TestSuite', () => {
  it('someFunction() should return `Wooo!`', () => {
    expect(new Main().someFunction()).to.equal('Wooo!');
  });
});
