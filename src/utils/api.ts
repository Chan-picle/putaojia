import http from "./http";

interface paramType{
  [propName:string]:any
}
export const getHello = (params:paramType) => http.get("/hello", params);

export const getTimeListApi = (params:paramType) => http.get("/timefirst", params);

export const getTimeDetailApi = (params:paramType) => http.get("/particulars", params);
//获得首页外教展示列表
export const getForeignListApi = (params:paramType) => http.get("/getindexlist", params);

//首页轮播信息
export const getBannerApi = (params:paramType) => http.get("/getbanner", params);

//首页tab切换 course
export const getCourseListApi = (params:paramType) => http.get("/product/productlist", params);

//通过商品id获得商品所有信息params{id:1000}
export const getProductInfoApi = (params:paramType) => http.post("/product/getproduct", params);

//获得验证码params{phone:"15300000000"}
export const getVertifyCodeApi = (params:paramType) => http.post("/user/sendcode", params);

//用户登陆/注册params{phone:"15300000000",code:"1236"}
export const loginApi = (params:paramType) => http.post("/user/login", params);
