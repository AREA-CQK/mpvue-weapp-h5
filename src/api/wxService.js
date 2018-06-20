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
      options.url = config.host + options.url;
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
  async getScreenOption() {
    let data = await new Promise((resolve, reject) => {
      wx.getSystemInfo({
        success: resolve,
        fail: reject
      })
    })
    return {
      screenWidth: data.screenWidth,
      screenHeigth: data.screenHeight
    };
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
  },
  //本地存储
  setStorage(key, value) {
    if (typeof value === 'object') {
      value = JSON.stringify(value)
    }
    wx.setStorageSync(key, value);
  },
  getStorage(key) {
    const value = wx.getStorageSync(key);
    try {
      return JSON.parse(value)
    } catch (err) {
      return value
    }
  },
  clearStorage(){
    wx.clearStorage()
  },
  removeStorage(key){
    wx.removeStorageSync(key)
  }

}
