import { action } from "typesafe-actions";
import { CommonActionTypes } from "./types";

// 更新单个state
export const fetchUpdateCommonState = (data: any) => action(
  CommonActionTypes.FETCH_UPDATE_COMMON_STATE,
  data
)

// 获取头部路由导航数据
export const fetchRouterData = (data: any) => action(
  CommonActionTypes.FETCH_ROUTER_DATA,
  data
)