import { mount } from '@vue/test-utils';
import HelloWorld from '@/pages/tabbar/goods/goods.vue';

function sum(a, b) {
    return a + b;
};

describe("sum test", () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
    test('adds 1 + 1 to equal 3', () => {
        expect(sum(1, 1)).toBe(3);
    });
})