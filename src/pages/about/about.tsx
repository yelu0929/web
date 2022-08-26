import React, { useEffect, useState } from "react"
import { Switch, Route, withRouter, RouteComponentProps, Redirect } from "react-router-dom";
import { Icon, Spin } from "antd"
import getAboutData from "store/data/aboutData"
import intl from "react-intl-universal"
import "./about.scss"

const About: React.FC<RouteComponentProps> = (props) => {
  const [pathname, setPathname] = useState<string>("companyProfile")
  const [imgLoaded, setImgLoaded] = useState<boolean>(false)
  const { history, location } = props
  useEffect(() => {
    const path = location.pathname
    if(path) {
      const arr = path.split("/")
      if(arr[arr.length - 1] === "about") {
        setPathname("companyProfile")
      }else {
        setPathname(arr[arr.length - 1])
      }
    }
    setImgLoaded(false)
  }, [location.pathname])

  const onMenuClick = (data: any) => {
    history.push(data.router)
  }

  const onLoadImg = (e: any) => {
    setImgLoaded(true)
  }

  const onErrorImg = (e: any) => {
    setImgLoaded(true)
  }
  const aboutData = getAboutData()
  const data: any = aboutData.find(val => val.value === pathname) || {}
  return (
    <div className="aboutContent">
      <div className="left">
        <div className="about">{intl.get("关于我们").defaultMessage("关于我们")}</div>
        {aboutData.map((item: any) => (<div onClick={() => onMenuClick(item)} className={`aboutItem ${pathname === item.value ? "selected" : ""}`} key={item.value}>
          <span>{item.label}</span>
          <Icon type="right" />
        </div>))}
      </div>
      <div className="right">
        <h3 className="title">{data.label || ""}</h3>
        {/* <div className="content" dangerouslySetInnerHTML={{__html: data.introduction || ""}} /> */}
        <div className="content">{data.introduction}</div>
        {data.img && data.img.map((item: any) => (<div key={item} className="imgContent">
          {/* <Spin spinning={!imgLoaded} tip="正在加载图片..." />
          <img onError={onErrorImg} style={{visibility: imgLoaded ? "visible" : "hidden", width: "100%"}} onLoad={onLoadImg} src={item} /> */}
          <img style={{ width: "100%"}} src={item} />
        </div>))}
      </div>
    </div>
  )
}

export default About