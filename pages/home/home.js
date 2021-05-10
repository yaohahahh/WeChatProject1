// pages/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttons: [{text: '取消'}, {text: '确定'}],
    oneButton: [{text: '确定'}],
    dialogShow: false,
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.cloud.database().collection('task1')
      /*.get({

        success(res){
            console.log("请求成功",res)
        },

        fail(error){
            console.log("请求失败",error)
        }
      })//查询*/
  
      //es6简洁写法
      wx.cloud.database().collection('task1').get() 
        .then(res=>{
          console.log("请求成功",res)
          this.setData({
            list: res.data
          })
        })
        .catch(err=>{
          console.log("请求成功",err)
        })
  
    },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.openConfirm()
      // 显示导航栏loading
    wx.showNavigationBarLoading();
    // 调用接口加载数据
    //this.loadData();
    // 隐藏导航栏loading
    wx.hideNavigationBarLoading();
    // 当处理完数据刷新后，wx.stopPullDownRefresh可以停止当前页面的下拉刷新
    wx.stopPullDownRefresh();
    this.freshdialog();
  },

  openConfirm: function () {
    this.setData({
      dialogShow: true
    })
},

tapDialogButton(e) {
  this.setData({
      dialogShow: false,
      showOneButtonDialog: false
  })
},
freshdialog(e) {
  this.setData({
      dialogShow: false,
      showFreshDialog: true
  })
},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function (e) {
      
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})