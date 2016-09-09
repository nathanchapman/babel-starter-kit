import sinon from 'sinon';
import { assert, expect } from 'chai';
import Main from '../src/Main';

describe('TestSuite', () => {
  it('someMethod() should return `Wooo!`', () => {
    expect(new Main().someMethod()).to.equal('Wooo!');
  });

  it('someMethod() is called twice', () => {
    const wrapper = new Main();
    const someMethod = sinon.spy(wrapper, 'someMethod');
    someMethod.call(wrapper);
    someMethod.restore();
    sinon.assert.calledOnce(someMethod);
  });

  it('someOtherMethod() is called twice', () => {
    const wrapper = new Main();
    const someOtherMethod = sinon.spy(wrapper, 'someOtherMethod');
    someOtherMethod();
    someOtherMethod.restore();
    sinon.assert.calledOnce(someOtherMethod);
  });
});
