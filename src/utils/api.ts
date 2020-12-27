import http from "./http";

interface paramType{
  [propName:string]:any
}
// export const getUser = (params:paramType) => http.get("/user/getuser", params);
export const getHello = (params:paramType) => http.get("/hello", params);

export const getTimeListApi = (params:paramType) => http.get("/timefirst", params);

//获得首页外教展示列表
export const getForeignListApi = (params:paramType) => http.get("/getindexlist", params);

//首页轮播信息
export const getBannerApi = (params:paramType) => http.get("/getindexlist", params);