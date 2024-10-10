import { tgv } from '../src';

describe('api.basic', () => {
  test('01 - Test tgv', () => {
    const result = tgv`sm:(debug-red bg-red-200) md:(debug-blue bg-blue-200) flex`;
    expect(result).toBe('sm:debug-red sm:bg-red-200 md:debug-blue md:bg-blue-200 flex');
  });
});
