// pages/detail/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    CustomBar: app.globalData.CustomBar,
    imgs: [
      "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2522778567.jpg",
    ],

    duration: 2000, // 滑动动画时长
    indicatorDots: false, // 是否显示指示点
    autoplay: true, // 是否自动切换
    interval: 3000, // 自动切换时间间隔
    current: 0,
    previousMargin:0,
    nextMargin: 0

  },
  handleChange(){},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})