// uni-app自动化测试教程: uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

describe('test title', () => {

    function sum(a, b) {
        return a + b;
    };
    // beforeAll(async () => {
    //     page = await program.currentPage();
    //     await page.waitFor(3000);
    // });

    it('check goods database connection', async () => {
		expect(sum(1, 1)).toBe(3);
        // const db = uniCloud.database();
        // expect(db.collection('opendb-mall-goods').count()).toBe(1);
    });
});
