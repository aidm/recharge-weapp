// pages/pay/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '浪漫倾心',
    open_id: '',
    pay_info: '',
    orderNo: '',
    conShow: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //获取app传来的参数
    this.setData({
      orderNo: options.orderNo
    })
    this.login();
    if (this.orderNo) {
      this.setData({
        conShow: false
      })
    } else {
      console.log(this.data.orderNo, '等于空')
    }
  },
  login() {
    let that = this;
    wx.login({
      success(res) {
        if (res.code) {
          wx.request({
            url: 'https://www.xiaonmkj.com/index/Achieve/index',
            header: {
              'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
            },
            data: {
              code: res.code
            },
            //请求成功后返回
            success: (res) => {
              // 请求成功之后将数据给Info
              if (res.data.code === 200) {
                that.setData({open_id: res.data.data.open_id })
                that.getorder()
              } else {
                console.log('失败')
              }
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  getorder() {
    let that = this;
    if (this.data.orderNo) {
      wx.request({
        url: 'https://www.xiaonmkj.com/index/Achieve/wxPay',
        header: {
          'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
        },
        method: 'POST',
        data: {
          // order_no: this.orderNo,
          order_no: this.data.orderNo,
          open_id: this.data.open_id
        },
        //请求成功后返回
        success: (res) => {
          // 请求成功之后将数据给Info
          if (res.data.code === 200) {
            that.setData({pay_info: res.data.data.pay_info})
            that.gopay()
          } else {
            wx.showToast({
              title: res.data.msg,
              //将值设置为 success 或者直接不用写icon这个参数
              icon: 'none',
              //显示持续时间为 2秒
              duration: 2000
            })
          }
        }
      })
    }
  },
  gopay() {
    let that = this
    let data = this.data
    wx.requestPayment({
      provider: 'wxpay',
      timeStamp: data.pay_info.timeStamp,
      nonceStr: data.pay_info.nonceStr,
      package: data.pay_info.package,
      signType: 'MD5',
      paySign: data.pay_info.paySign,
      success: function(res) {
        console.log('success:' + JSON.stringify(res));
        that.seleteOrder()
      },
      fail: function(err) {
        console.log('fail:' + JSON.stringify(err));
        that.seleteOrder()
      }
    });
  },
  seleteOrder() {
    uni.request({
      url: 'https://www.xiaonmkj.com/index/Achieve/orders',
      data: {
        order_no: this.data.orderNo,
      },
      success: (res) => {
        // 请求成功之后将数据给Info
        if (res.data.code === 200) {
          console.log(res.data.data.trade_status)
          uni.navigateTo({
            url: '/pages/prompt/index?trade_status=' + res.data.data.trade_status
          })
        } else {
          uni.showToast({
            title: res.data.msg,
            //将值设置为 success 或者直接不用写icon这个参数
            icon: 'none',
            //显示持续时间为 2秒
            duration: 2000
          })
        }
      }
    })
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