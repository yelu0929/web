/* eslint-disable react/jsx-no-target-blank */
import React from "react"
import getRouterData from "store/data/routerData"
import { RouterDataType } from "store/common/types"
import { RouteComponentProps, withRouter } from "react-router-dom";
import intl from "react-intl-universal"
import "./footer.scss"

const HomeFooter: React.FC<RouteComponentProps> = (props) => {
  const { history } = props
  const onMenuClick = (obj: RouterDataType) => {
    history.push({
      pathname: obj.router,
      state: obj
    })
  }
  const routerData = getRouterData()
  const data = routerData.slice(0, routerData.length - 2)
  return (
    <div className="footer">
      <div className="container">
        <div className="menuTab">
          {data.map((item: RouterDataType) => <span className="list" key={item.value} onClick={() => onMenuClick(item)}>{item.label}</span>)}
        </div>
        <div className="gov">
          <span>copyright © 2018-2028 {intl.get("上海宇泽逢源化工有限公司")} All Rights Reservered.</span>
          <a target="_blank" className="toGov" href="https://beian.miit.gov.cn/">沪ICP备2022016352号-1</a>
          <span>{intl.get("技术支持")}: {intl.get("上海宇泽逢源化工有限公司")}</span>
        </div>
      </div>
    </div>
  )
}

export default withRouter(HomeFooter)