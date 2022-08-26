import { Reducer } from "redux";
import { CommonState, CommonActionTypes } from "./types";

// 初始化state
export const initCommonState: CommonState = {
  routerData: []
};

const commonReducer: Reducer<CommonState> = (state = initCommonState, action) => {
  switch (action.type) {
    // 更新单个state
    case CommonActionTypes.FETCH_UPDATE_COMMON_STATE: {
      return {
        ...state,
        ...action.payload
      }
    }
    default: {
      return { ...state };
    }
  }
}

export { commonReducer }
