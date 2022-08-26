import { put, takeEvery, call, delay, takeLatest, select } from "redux-saga/effects";
import { CommonActionTypes } from "./types";
import { fetchRouterData, fetchUpdateCommonState } from "./actions";
import { ApplicationState } from "store";
import getRouterData from "store/data/routerData"

// 获取头部路由导航数据
function* handleRouterData(action: ReturnType<typeof fetchRouterData>) {
  try {
    yield put(fetchUpdateCommonState({routerData: getRouterData()}));
  } catch (err) {
    console.log("error", err)
  }
}

// 监控，根据指定action类型，调用saga方法
function* commonSaga() {
  yield takeEvery(CommonActionTypes.FETCH_ROUTER_DATA, handleRouterData);
}

export default commonSaga;
