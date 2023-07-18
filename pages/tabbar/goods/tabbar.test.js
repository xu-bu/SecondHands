
const uniCloud = require('@dcloudio/uni-cloud');

function sum(a,b){
	return a+b
}

describe("sum test", () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
    test('cloud database connection', () => {
		const db=uniCloud.database();
		let count=db.collection('opendb-mall-goods').count();
		expect(count).toBeGreaterThan(0);
    });
})