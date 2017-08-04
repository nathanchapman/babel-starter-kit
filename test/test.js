import sinon from 'sinon';
import { assert, expect } from 'chai';
import example from '../src/index';

describe('Test Suite', () => {
  it('example() should append `-example`', () => {
    expect(example('hello')).to.equal('hello-example');
  });
});
