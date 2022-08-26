export interface RouterDataType {
  label: string,
  value: string,
  router: string,
  children?: RouterDataType[]
}

export interface CommonState {
  readonly routerData: RouterDataType[];
}

export enum CommonActionTypes {
  // 更新state数据
  FETCH_UPDATE_COMMON_STATE = "CommonActionTypes/FETCH_UPDATE_COMMON_STATE",
  // 获取头部路由导航数据
  FETCH_ROUTER_DATA = "CommonActionTypes/FETCH_ROUTER_DATA",
}