import http from "./http";

interface paramType{
  [propName:string]:any
}
// export const getUser = (params:paramType) => http.get("/user/getuser", params);
export const getHello = (params:paramType) => http.get("/hello", params);