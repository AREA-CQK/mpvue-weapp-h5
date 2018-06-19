import config from './config'
export default {
  async getUserInfo() {
    let data = await new Promise((resolve, reject) => {
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: resolve,
            fail: reject
          })
        }
      })
    })
    return data
  },
  async httpRequest(options = {}) {
    let data = await new Promise((resolve, reject) => {
      options.url = config.host + options.url.split('/api')[1];
      wx.request({
        url: options.url,
        data: Object.assign({}, options.data),
        method: options.methods || 'GET',
        header: {
          'Content-Type': 'application/json'
        },
        success: resolve,
        fail: reject
      })
    })
    return data
  },
  async getScreenWidth() {
    let data = await new Promise((resolve, reject) => {
      wx.getSystemInfo({
        success: resolve,
        fail: reject
      })
    })
    return data;
  },
  async navigatePageTo(url = '/') {
    await wx.navigateTo({
      url: url
    })
  },

  //打开文件
  async downloadFile(url) {
    await wx.downloadFile({
      url: url,
      success: function (res) {
        var filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log('打开文档成功')
          },
          fail: res => {
            console.log('打开文档失败')
          }
        })
      }
    })
  },
  //下拉刷新
  async onPullDownRefresh(options, listFunction) {
    options.pageSize = options.pageSize + 10;
    return listFunction(options)
  },
  //预览图片
  previewImg(current, imgArray) {
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: imgArray // 需要预览的图片http链接列表
    })
  }
}
