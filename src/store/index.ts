import { combineReducers, Dispatch, Action, AnyAction } from "redux";
import { connectRouter, RouterState } from "connected-react-router";
import { all, fork } from "redux-saga/effects";
import { History } from "history";

// 公共模块
import { CommonState } from "./common/types";
import { commonReducer } from "./common/reducer";
import commonSaga from "./common/sagas";

/**
 * 顶层state
 *
 * @export
 * @interface ApplicationState
 */
export interface ApplicationState {
  router: RouterState;
  /** 公共模块 */
  commonState: CommonState;
  // 银行账户配置
}

/**添加属性给react组件，此属性默认传递给connect()方法 */
export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>
}

/**当action被调度, Redux根据名称去匹配reducer，然后更新相应的state */
export const rootReducer = (history: History<any>) => combineReducers<ApplicationState>({
  router: connectRouter(history),
  // 公共模块
  commonState: commonReducer,
});

// 合并saga
export function* rootSaga() {
  yield all([
    /** 公共模块 */
    fork(commonSaga),
  ])
}
