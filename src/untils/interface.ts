//路由接口
export interface routerInterface {
  path: string,
  name: string,
  redirect?:string,
  component?: any
} 
