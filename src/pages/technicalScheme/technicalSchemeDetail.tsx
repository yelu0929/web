import React, { useEffect, useState } from "react"
import { RouteComponentProps } from "react-router-dom";
import { Icon } from "antd"
import getTechnicalData from "store/data/technicalData"
import intl from "react-intl-universal"
import "./technicalScheme.scss"

const TechnicalSchemeDetail: React.FC<RouteComponentProps> = (props) => {
  const [technicalInfo, setTechnicalInfo] = useState<any>()
  const [preNews, setPreNews] = useState<any>()
  const [nextNews, setNextNews] = useState<any>()
  const { history, location, match } = props

  useEffect(() => {
    const data = match.params as any || {}
    const technicalData = getTechnicalData()
    const technicalInfo = technicalData.find(val => val.id === data.id)
    const index = technicalData.findIndex(val => val.id === data.id)
    setPreNews(index < technicalData.length ? technicalData[index + 1] : undefined)
    setNextNews(index > 0 ? technicalData[index - 1]: undefined)
    setTechnicalInfo(technicalInfo)
  }, [location])

  const onNewsClick = (data: any) => {
    if(data) {
      history.push(data.router)
    }
  }

  const rootWidth = document.documentElement.clientWidth || document.body.clientWidth;
  const isSmall = rootWidth < 550
  return (
    <div className="technicalSchemeDetail container">
      <div className="left" style={isSmall ? {width: "100%"} : {}}>
        <div className="title">{technicalInfo?.title || "--"}</div>
        {/* <div className="time">
          <Icon style={{fontSize: 16, marginRight: 4}} type="clock-circle" />
          <span>{technicalInfo?.createTime || "--"}</span>
        </div> */}
        <div className="describe">{technicalInfo?.describe || ""}</div>
        {/* <div className="content" dangerouslySetInnerHTML={{__html: technicalInfo?.detail || ""}} /> */}
        <div className="content">{technicalInfo?.detail}</div>
      </div>
      {!isSmall && <div className="right">
        <div className="list">
          <span>{intl.get("上一篇")}</span>
          <span onClick={() => onNewsClick(preNews)} className="title">{preNews?.title || intl.get("没有了")}</span>
        </div>
        <div className="list">
          <span>{intl.get("下一篇")}</span>
          <span onClick={() => onNewsClick(nextNews)} className="title">{nextNews?.title || intl.get("没有了")}</span>
        </div>
      </div>}
    </div>
  )
}

export default TechnicalSchemeDetail