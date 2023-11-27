const app = getApp()
Component({
  /**
   * 组件的一些选项
   */
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  /**
   * 组件的对外属性
   */
  properties: {
    bgColor: {
      type: String,
      value: ''
    },
    isCustom: {
      type: Boolean,
      value: false
    },
    isBack: {
      type: Boolean,
      value: false
    },
    bgImage: {
      type: String,
      value: ''
    },
    customBarBackgroundColor: {
      type: String,
      value: ''
    },
    backIcon: {
      type: String,
      value: ''
    },
    isCustomBar: {
      type: Boolean,
      value: true
    },
    backColor: {
      type: String,
      value: 'black'
    }
  },
  lifetimes: {
    attached: function () {
      console.log(app.globalData, 'app')
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom
  },

  /**
   * 组件的方法列表
   */
  methods: {
    BackPage() {
      var pages = getCurrentPages()
      if (pages.length > 1) {
        wx.navigateBack({
          delta: 1
        })
      } else {
        wx.switchTab({
          url: '/pages/welcome/index',
          fail(){
            wx.redirectTo({
              url: '/pages/welcome/index'
            })
          }
        })

      }
    },
    HomePage() {
      wx.s
    },
    toHome() {
      wx.reLaunch({
        url: '/pages/index/index'
      })
    }
  }
})