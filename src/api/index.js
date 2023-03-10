/* 
包含应用所有接口的接口请求函数
*/
import ajax from "./ajax";
import mockAjax from "./mockAjax";

// 获取商品的三级分类列表
export function reqCategoryList() {
    return ajax({
        url: '/product/getBaseCategoryList'
    })
}

// 获取首页广告轮播效果
export const reqBannerList = () => ajax('/cms/banner')

// 获取搜索页商品列表
export const reqSearch = (searchParams) => ajax.post('/list', searchParams)

// 获取商品详情数据
export const reqDetailInfo = (skuId) => {
    return ajax({
        url: `/item/${skuId}`,
        method: 'get'
    })
}

/* 
购物车
*/
// 添加|修改购物车商品数量
export const reqAddOrUpdateCart = (skuId, skuNum) => {
    return ajax({
        url: `/cart/addToCart/${skuId}/${skuNum}`,
        method: 'post'
    })
}
// 获取购物车列表
export const reqCartList = () => {
    return ajax({
        url: '/cart/cartList',
        method: 'get'
    })
}
// 修改购物车商品的选中状态
export const reqUpdateCartChecked = (skuId, isChecked) => {
    return ajax({
        url: `/cart/checkCart/${skuId}/${isChecked}`,
        method: 'get'
    })
}
// 删除单个商品
export const reqDeleteCart = (skuId) => {
    return ajax({
        url: `/cart/deleteCart/${skuId}`,
        method: 'delete'
    })
}

/* 
用户注册与登录
*/
// 注册
export const reqUserRegister=(userInfo)=>{
    return ajax({
        url:'/user/passport/register',
        method:'post',
        data:userInfo
    })
}
// 登录
export const reqUserLogin=(userInfo)=>{
    return ajax({
        url:'/user/passport/login',
        method:'post',
        data:userInfo
    })
}

/* 
根据token获取用户信息
*/
export const reqUserInfo=()=>{
    return ajax({
        url:'/user/passport/auth/getUserInfo',
        method:'get'
    })
}

// 退出登录
export const reqUserLogout=()=>{
    return ajax({
        url:'/user/passport/logout',
        method:'get'
    })
}

/* 
购物车结算页面
*/
export const reqTradeInfo=()=>{
    return ajax({
        url:'/order/auth/trade',
        method:'get'
    })
}

// 结算页面提交订单(即创建订单)
export const reqSubmitOrder =(tradeNo,tradeData)=>{
    return ajax({
        url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,
        method:'post',
        data:tradeData
    })
}

// 获取支付信息
export const reqPayInfo=(orderId)=>{
    return ajax({
        url:`.payment/weixin/createNative/${orderId}`,
        method:'get'
    })
}

// 查询订单支付状态
export const reqPayStatus =(orderId)=>{
    return ajax({
        url:`/payment/weixin/queryPayStatus/${orderId}`,
        method:'get'
    })
}

// 二级分类我的订单数据
export const reqMyOrderInfo=(page,limit)=>{
    return ajax({
        url:`/order/auth/${page}/${limit}`,
        method:'get'
    })
}

/* 
mock数据 
*/
// 获取今日推荐数据
export const reqRecommends = () => mockAjax('/recommends')
export const reqFloors = () => mockAjax('/floors')
// reqSearch().then(result => {
//     console.log('result--', result);
// })
