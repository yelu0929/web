import React, { useState, useEffect }  from "react";
import { Switch, Route, withRouter, RouteComponentProps, Redirect, Link } from "react-router-dom";
import { Dispatch } from "redux";
import { Layout, Menu, Breadcrumb, Dropdown, Button, Select } from "antd";
import { connect } from "react-redux";
import { ApplicationState } from "store";
import { RouterDataType } from "store/common/types"
import { fetchRouterData } from "store/common/actions"
import logo from "assets/images/logo.png"
import Swiper from "./swiper"
import HomeFooter from "../footer/footer"
import intl from "react-intl-universal";
import { emit } from "../../emit"
import { domainName } from "common/constants"
import "./homePage.scss"

import getTabsData from "store/data/routerData"
import getAboutData from "store/data/aboutData"
import { getProductGroupData, getProductData } from "store/data/productData"
import getNewsData from "store/data/newsData"
import getServicesData from "store/data/servicesData"
import getTechnicalData from "store/data/technicalData"


import About from "pages/about/about"
import ProductCenter from "pages/productCenter/productCenter"
import ProductGroup from "pages/productCenter/productGroup"
import ProductDetail from "pages/productCenter/productDetail"
import NewsCenter from "pages/newCenter/newsCenter"
import NewsCenterDetail from "pages/newCenter/newsCenterDetail"
import TechnicalScheme from "pages/technicalScheme/technicalScheme"
import TechnicalSchemeDetail from "pages/technicalScheme/technicalSchemeDetail"
import Services from "pages/services/services"
// import HseColumn from "pages/hseColumn/hseColumn"
// import HseColumnDetail from "pages/hseColumn/hseColumnDetail"


const { Header, Content } = Layout;

interface HomepageProps extends RouteComponentProps {
  routerData: RouterDataType[],
  getRouterData: typeof fetchRouterData
}

// 关联state到组件props
const mapStateToProps = ({ commonState }: ApplicationState) => ({
  routerData: commonState.routerData
});

// 关联dispatch到组件props
const mapDispatchToProps = (dispatch: Dispatch) => ({
  getRouterData: (params: any) => dispatch(fetchRouterData(params)),
});

const Homepage: React.FC<HomepageProps> = (props) => {
  const [lang, setLang] = useState<string>("zh-CN")
  const [routerBreadData, setRouterBreadData] = useState<any[]>([])
  const { routerData = [], getRouterData, history, location } = props
  useEffect(() => {
    setLang(localStorage.getItem("language") || "zh-CN")
    getRouterData({})
  }, [])

  const onMenuClick = (data: RouterDataType) => {
    history.push({
      pathname: data.router,
      state: data
    })
    const homePage = document.querySelector(".homePage");
    if(homePage) {
      setTimeout(() => {
        homePage.scrollTop = 400
      }, 10);
    }
  }

  const onMenuContent = (data: RouterDataType[]) => {
    return data.map((item: RouterDataType) => {
      if(item.children && item.children.length > 0) {
        return <Menu.SubMenu key={item.value} onTitleClick={() => onMenuClick(item)} title={item.label}>{onMenuContent(item.children)}</Menu.SubMenu>
      }
      return <Menu.Item key={item.value} onClick={() => onMenuClick(item)}>{item.label}</Menu.Item>
    })
  }

  useEffect(() => {
    const res: any[] = [] 
    const tabsBreadName = getTabsData().map((item:RouterDataType) => ({name: item.label, path: item.router}))
    const aboutBreadName = getAboutData().map((item:RouterDataType) => ({name: item.label, path: item.router}))
    const productGroupBreadName = getProductGroupData().map((item:RouterDataType) => ({name: item.label, path: item.router}))
    const productBreadName = getProductData().map((item: any) => ({name: item.title, path: item.router}))
    const newsBreadName = getNewsData().map((item: any) => ({name: item.title, path: item.router}))
    const servicesBreadName = getServicesData().map((item: any) => ({name: item.label, path: item.router}))
    const technicalBreadName = getTechnicalData().map((item: any) => ({name: item.title, path: item.router}))
    const routeBreadName: any[] = [
      ...tabsBreadName,
      ...aboutBreadName,
      ...productGroupBreadName,
      ...productBreadName,
      ...newsBreadName,
      ...servicesBreadName,
      ...technicalBreadName
    ]
    routeBreadName.forEach(item => {
      if (location.pathname === item.path) {
        item.state = location.state
      }
      if (location.pathname.indexOf(item.path) > -1) {
        res.push(item)
      }
    })
    res.forEach(item => {
      const obj = routerBreadData.find(val => val.path === item.path)
      if(obj && obj.state) {
        item.state = obj.state
      }
    })
    setRouterBreadData(res)
  }, [location])

  const onLanguagechange = (val: string) => {
    setLang(val)
    localStorage.setItem("language", val)
    emit.emit("changeLanguage", val)
  }

  const goHome = () => {
    history.push("/")
  }

  return (
    <Layout className="homePage">
      <div className="headerContent">
        <div className="left">
          {/* <img onClick={goHome} style={{cursor: "pointer", height: 54}} src={logo} /> */}
          <img onClick={goHome} style={{cursor: "pointer", height: 54}} src={`${domainName}/images/home/logo.jpg`} />
          <div className="menuContent">
            {
              routerData.map((val:RouterDataType) => (
              val.children && val.children.length > 0 ? <Dropdown key={val.value} trigger={["hover"]} overlay={<Menu>{onMenuContent(val.children)}</Menu>}>
                <Button className="dropItem" type="link" onClick={() => onMenuClick(val)}>{val.label}</Button>
              </Dropdown> : <Button type="link" className="dropItem" key={val.value} onClick={() => onMenuClick(val)}>{val.label}</Button>)
              )
            }
          </div>
        </div>
        <div className="language">
          <span style={{marginRight: 2}}>{intl.get("语言")}</span>
          <Select defaultValue="zh-CN" value={lang} onChange={onLanguagechange}>
            <Select.Option value="zh-CN">{intl.get("中文")}</Select.Option>
            <Select.Option value="en-US">{intl.get("英语")}</Select.Option>
          </Select>
        </div>
      </div>
      <Swiper />
      <div className="breadcrumbContent">
        <Breadcrumb className="container" separator="/">
          {
            routerBreadData.map((item: any, index: number) => (
              <Breadcrumb.Item key={index}>
                {index === routerBreadData.length - 1 ? <span style={{ fontSize: "14px", color: "#333" }}>{`${item.name}`}</span> : (
                  <Link to={{ pathname: item.path, state: item.state }}>{item.name}</Link>
                )}
              </Breadcrumb.Item>
            )
            )
          }
        </Breadcrumb>
      </div>
      <Content className="homeContent">
        <Switch>
          <Route path="/about" exact={true} component={About} />
          <Route path="/about/companyProfile" exact={true} component={About} />
          <Route path="/about/companyCulture" exact={true} component={About} />
          <Route path="/about/socialResponsibility" exact={true} component={About} />
          <Route path="/about/companyCustomers" exact={true} component={About} />
          <Route path="/about/talentRecruitment" exact={true} component={About} />
          <Route path="/about/contactUs" exact={true} component={About} />
          <Route path="/productCenter" exact={true} component={ProductCenter} />
          <Route path="/productCenter/insecticides" exact={true} component={ProductGroup} />
          <Route path="/productCenter/insecticides/detail/:id" exact={true} component={ProductDetail} />
          <Route path="/productCenter/herbicides" exact={true} component={ProductGroup} />
          <Route path="/productCenter/herbicides/detail/:id" exact={true} component={ProductDetail} />
          <Route path="/productCenter/fungicides" exact={true} component={ProductGroup} />
          <Route path="/productCenter/fungicides/detail/:id" exact={true} component={ProductDetail} />
          <Route path="/productCenter/plantGrowthRegulators" exact={true} component={ProductGroup} />
          <Route path="/productCenter/plantGrowthRegulators/detail/:id" exact={true} component={ProductDetail} />
          <Route path="/productCenter/TC" exact={true} component={ProductGroup} />
          <Route path="/productCenter/TC/detail/:id" exact={true} component={ProductDetail} />
          <Route path="/newsCenter" exact={true} component={NewsCenter} />
          <Route path="/newsCenter/detail/:id" exact={true} component={NewsCenterDetail} />
          <Route path="/technicalScheme" exact={true} component={TechnicalScheme} />
          <Route path="/technicalScheme/detail/:id" exact={true} component={TechnicalSchemeDetail} />
          <Route path="/services" exact={true} component={Services} />
          <Route path="/services/ICAMA" exact={true} component={Services} />
          <Route path="/services/OEMPackage" exact={true} component={Services} />
          <Route path="/services/transportation" exact={true} component={Services} />
          <Redirect to="/about" />
        </Switch>
      </Content>
      <HomeFooter />
    </Layout>
  )
} 

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)