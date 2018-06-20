import config from './config'
import '../utils/preview'
export default {
  //ajax请求
  async httpRequest(option = {}) {
    option.url = option.host + option.url;
    if (option.methods == 'GET' || option.methods == 'get') {
      return await axios.get(
        option.url, {
          params: option.data
        }
      )
    } else if (option.methods == 'POST' || option.methods == 'post') {
      return await axios.post(
        option.url, option.data
      )
    } else {
      console.log('method not allow!')
    }
  },
  //用户信息
  async getUserInfo() {
    let data = {
      userInfo: {
        avatarUrl: './../../res/image/liangPlus.jpg',
        nickName: '自如客'
      }
    }
    return data
  },
  
  //页面跳转
  async navigatePageTo(url = '/') {
    location.href = await url;
  },
  //设备宽高
  async getScreenOption() {
    let screenWidth = await screen.availWidth;
    let screenHeigth = await screen.availHeight;
    return {
      screenWidth: screenWidth,
      screenHeigth: screenHeigth
    }
  },
  //滚动顶部
  async scrollTop() {
    window.scrollTo(0, 0);
  },
  //预览图片
  previewImg(current, imgArray) {
    previewImage.start({
      urls : imgArray,
      current : current
    });
  },
  //本地存储
  setStorage(key, value) {
    if (typeof value === 'object') {
      value = JSON.stringify(value)
    }
    window.localStorage.setItem(key, value)
  },
  getStorage(key) {
    const value = window.localStorage.getItem(key)
    try {
      return JSON.parse(value)
    } catch (err) {
      return value
    }
  },
  clearStorage(){
    window.localStorage.clear()
  },
  removeStorage(key){
    window.localStorage.removeItem(key)
  }
}
