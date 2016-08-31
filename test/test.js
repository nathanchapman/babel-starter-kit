import sinon from 'sinon';
import { assert, expect } from 'chai';
import Main from '../src/Main';

describe('TestSuite', () => {
  it('someFunction() should return `Wooo!`', () => {
    expect(new Main().someFunction()).to.equal('Wooo!');
  });

  it('someFunction() is called twice', () => {
    const wrapper = new Main();
    const spy = sinon.spy(wrapper, 'someFunction');
    spy();
    expect(spy.callCount).to.equal(1);
  });
});
