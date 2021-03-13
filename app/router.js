'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);
  //登录
  router.post('/user/login',controller.user.login)
  //注册
  router.post('/user/register',controller.user.register)
  // router.post('/user',controller.user.user)
  // router.get('/user/user',controller.user.getUser)
  //导航栏
  router.get('/nav/getNav',controller.nav.getNav)
  //新增商品
  router.post('/goods/addgoods',controller.goods.addGoods)
  //获取商品详情
  router.post('/goods/getmore',controller.goods.getMore)
  //获取商品列表
  router.get('/goods/getGoods',controller.goods.getGoods)
  //删除商品
  router.post('/goods/delGoods',controller.goods.delGoods)
  //修改商品
  router.post('/goods/changeGoods',controller.goods.changeGoods)
  router.get('/goods/findGoods',controller.goods.findGoods)
  //获取轮播图
  router.get('/goods/getBanners',controller.goods.getBanners)
  //添加秒杀商品
  router.post('/hotgoods/addhotgoods',controller.hotgoods.addHotgoods)
  //获取秒杀商品列表
  router.get('/hotgoods/gethotgoods',controller.hotgoods.getHotgoods)
  //删除秒杀商品
  router.post('/hotgoods/delHotgoods',controller.hotgoods.delHotgoods)
  //新增地址
  router.post('/address/addAddress',controller.address.addAddress)
  //获取地址
  router.get('/address/getAddress',controller.address.getAddress)
  //修改地址
  router.post('/address/changeAddress',controller.address.changeAddress)
  //删除地址
  router.post('/address/delAddress',controller.address.delAddress)
  
};
