import { tgv } from '../src';

describe('api.basic', () => {
  test('01 - Test tgv', () => {
    const result = tgv`sm:(debug-red bg-red-200) md:(debug-blue bg-blue-200) flex`;
    expect(result).toBe('sm:debug-red sm:bg-red-200 md:debug-blue md:bg-blue-200 flex');
    const result2 = tgv`absolute desktop:(lh-5.5 right-15 bottom-3) mobile:(lh-3 right-5.5 bottom-1)`;
    expect(result2).toBe('absolute desktop:lh-5.5 desktop:right-15 desktop:bottom-3 mobile:lh-3 mobile:right-5.5 mobile:bottom-1');
  });

});
