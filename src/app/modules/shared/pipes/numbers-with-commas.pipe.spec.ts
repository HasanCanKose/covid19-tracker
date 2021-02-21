import { NumbersWithCommasPipe } from './numbers-with-commas.pipe';

describe('NumbersWithCommasPipe', () => {
  it('create an instance', () => {
    const pipe = new NumbersWithCommasPipe();
    expect(pipe).toBeTruthy();
  });
});
