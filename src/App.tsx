import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Store } from "redux";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { ConfigProvider } from "antd";
import ANTDzhCN from "antd/lib/locale-provider/zh_CN";
import { ApplicationState } from "./store";
import intlUniversal from "react-intl-universal";

import { History } from "history";
import HomePage from "pages/homePage/homePage"
import { emit } from "./emit"

import enUS from "store/locales/en_US.json"
import zhCN from "store/locales/zh_CN.json"

// const locales = {
//   "en-US": require("./store/locales/en_US.json"),
//   "zh-CN": require("./store/locales/zh_CN.json"),
// }

// 组件props声明
interface AppProps {
  store: Store<ApplicationState>;
  history: History;
}

interface AppState {
  initDone: boolean,
  // lang: string,
}

/**
 * 根组件
 * 1、使用Provider提供redux state
 * 2、ConnectedRouter连接redux和router
 * 3、LocaleProvider提供antd中文设置
 * 4、加载Home组件
 *
 * @class App
 * @extends {React.Component<AppProps>}
 */
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
    this.state = {
      initDone: false,
      // lang: "zh_CN"
    }
  }

  public componentDidMount() {
    emit.on("changeLanguage", (lang: string) => this.loadLocales(lang))
    this.loadLocales(localStorage.getItem("language") || "zh-CN")
  }

  public loadLocales = (data: string) => {
    this.setState({initDone: false})
    localStorage.setItem("language", data || "zh-CN")
    intlUniversal.init({
      currentLocale: data || "zh-CN",
      locales: {
        "en-US": enUS,
        "zh-CN": zhCN
      }
    })
    .then(() => {
      // After loading CLDR locale data, start to render
      document.title = intlUniversal.get("上海宇泽逢源化工有限公司")
      this.setState({initDone: true});
    })
  }
  // 渲染
  public render() {
    // 从props中获取store和history
    const { store, history } = this.props;

    // 全局配置
    const config = {
      autoInsertSpaceInButton: false
    };

    return (<>
      {this.state.initDone ? <Provider store={store}>
        <ConnectedRouter history={ history }>
          <ConfigProvider locale = { ANTDzhCN } {...config}>
            <Switch>
              {/**路由到首页 */}
              <Route path="/" component={ HomePage } />
            </Switch>
          </ConfigProvider>
        </ConnectedRouter>
      </Provider> : null}
    </>);
  }
}

export default App;
