import http from "./http";

interface paramType{
  [propName:string]:any
}
// export const getUser = (params:paramType) => http.get("/user/getuser", params);
export const getHello = (params:paramType) => http.get("/hello", params);

export const getTimeListApi = (params:paramType) => http.get("/timefirst", params);

export const getTimeDetailApi = (params:paramType) => http.get("/particulars", params);