import React, { useEffect, useState } from "react"
import { Switch, Route, withRouter, RouteComponentProps, Redirect } from "react-router-dom";
import { Icon } from "antd"
import getServicesData from "store/data/servicesData"
import intl from "react-intl-universal"
import "./services.scss"

const About: React.FC<RouteComponentProps> = (props) => {
  const [pathname, setPathname] = useState<string>("ICAMA")
  const { history, location } = props
  useEffect(() => {
    const path = location.pathname
    if(path) {
      const arr = path.split("/")
      if(arr[arr.length - 1] === "services") {
        setPathname("ICAMA")
      }else {
        setPathname(arr[arr.length - 1])
      }
    }
  }, [location.pathname])

  const onMenuClick = (data: any) => {
    history.push(data.router)
  }
  const servicesData = getServicesData()
  const data: any = servicesData.find(val => val.value === pathname) || {}
  return (
    <div className="servicesContent">
      <div className="left">
        <div className="services">{intl.get("服务").defaultMessage("服务")}</div>
        {servicesData.map((item: any) => (<div onClick={() => onMenuClick(item)} className={`servicesItem ${pathname === item.value ? "selected" : ""}`} key={item.value}>
          <span>{item.label}</span>
          <Icon type="right" />
        </div>))}
      </div>
      <div className="right">
        <h3 className="title">{data.label || ""}</h3>
        {/* <div className="content" dangerouslySetInnerHTML={{__html: data.introduction || ""}} /> */}
        <div className="content">{data.introduction}</div>
        {data.img && data.img.map((item: any) => (<div key={item} className="imgContent">
          <img style={{ width: "100%"}} src={item} />
        </div>))}
      </div>
    </div>
  )
}

export default About