// pages/detail-video/index.js
import {getMVURL, getMVDetail, getRelatedVideo} from '../../service/api_video'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mvURLInfo:{},
    mvDetail:{},
    relatedVideos:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id = options.id
    this.getPageData(id)
    
  },

  getPageData:function(id){
    // 使用promise而不是await因为await是一个请求拿到结果后才进行下一个请求
    getMVURL(id).then(res => {
      // 请求播放地址
      this.setData({ mvURLInfo:res.data })
    })
      // 请求视频信息
      getMVDetail(id).then(res=>{
        this.setData({ mvDetail:res.data })
      })
      // 请求相关视频
      getRelatedVideo(id).then(res=>{
        this.setData({ relatedVideos:res.data })
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