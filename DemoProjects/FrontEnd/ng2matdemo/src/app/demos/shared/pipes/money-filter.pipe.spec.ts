import { MoneyFilterPipe } from './money-filter.pipe';

describe('MoneyFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new MoneyFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
