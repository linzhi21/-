// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo:{} //初始化数据为空
    },

    //必须传递参数事件对象
    getUserInfo(event){
        wx.getUserProfile({
          desc: '就想获取你的个人信息',
          //发送请求
          success:(res)=>{
              console.log(res);
              this.setData({
                userInfo:res.userInfo
              })
          }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})