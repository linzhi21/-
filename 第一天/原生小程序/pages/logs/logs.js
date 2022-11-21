// pages/logs/logs.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    toIndex(){
        //关闭当前页面  并跳转到  某个页面  跳回到首页(有小房子)
        // wx.redirectTo({
        //   url: '/pages/index/index',   //这里路径,最后不写文件名,必须是绝对路径
        // })

        //保留当前页面 跳转到某个页面 不能跳回到tabbr (没有小房子)
        wx.navigateTo({
          url: '/pages/index/index', 
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