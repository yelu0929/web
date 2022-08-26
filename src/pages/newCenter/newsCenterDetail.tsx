import React, { useEffect, useState } from "react"
import { RouteComponentProps } from "react-router-dom";
import { Icon } from "antd"
import getNewsData from "store/data/newsData"
import intl from "react-intl-universal"
import "./newsCenter.scss"

const NewsCenterDetail: React.FC<RouteComponentProps> = (props) => {
  const [newsInfo, setNewsInfo] = useState<any>()
  const [preNews, setPreNews] = useState<any>()
  const [nextNews, setNextNews] = useState<any>()
  const { history, location, match } = props

  useEffect(() => {
    const newsData = getNewsData()
    const queryParams = match.params as any || {}
    const newsInfo = newsData.find(val => val.id === queryParams.id)
    const index = newsData.findIndex(val => val.id === queryParams.id)
    setPreNews(index < newsData.length ? newsData[index + 1] : undefined)
    setNextNews(index > 0 ? newsData[index - 1]: undefined)
    setNewsInfo(newsInfo)
  }, [location])

  const onNewsClick = (data: any) => {
    if(data) {
      history.push({
        pathname: `/newsCenter/detail/${data.id}`,
        state: data
      })
    }
  }
  return (
    <div className="newsCenterDetail container">
      <div className="left">
        <div className="title">{newsInfo?.title || "--"}</div>
        <div className="time">
          <Icon style={{fontSize: 16, marginRight: 4}} type="clock-circle" />
          <span>{newsInfo?.createTime || "--"}</span>
        </div>
        <div className="describe">{newsInfo?.describe || ""}</div>
        <div className="content" dangerouslySetInnerHTML={{__html: newsInfo?.detail || ""}} />
        {/* <div className="content">{newsInfo?.detail || ""}</div> */}
      </div>
      <div className="right">
        <div className="list">
          <span>{intl.get("上一篇")}</span>
          <span onClick={() => onNewsClick(preNews)} className="title">{preNews?.title || intl.get("没有了")}</span>
        </div>
        <div className="list">
          <span>{intl.get("下一篇")}</span>
          <span onClick={() => onNewsClick(nextNews)} className="title">{nextNews?.title || intl.get("没有了")}</span>
        </div>
      </div>
    </div>
  )
}

export default NewsCenterDetail