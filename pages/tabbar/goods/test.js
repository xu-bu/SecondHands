const automator = require('miniprogram-automator')

automator.launch({
  projectPath: './goods.vue', // 项目文件地址
}).then(async miniProgram => {
  const page = await miniProgram.reLaunch('/pages/')
  await page.waitFor(500)
  // const element = await page.$('.kind-list-item-hd')
  // console.log(await element.attribute('class'))
  // await element.tap()

  await miniProgram.close()
})