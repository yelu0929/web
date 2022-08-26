import React, { useEffect } from "react"
import { Button } from "antd"
import { Switch, Route, withRouter, RouteComponentProps, Redirect } from "react-router-dom";
import { getProductGroupData } from "store/data/productData"
import "./product.scss"
import intl from "react-intl-universal"
import { domainName } from "common/constants"

const ProductCenter: React.FC<RouteComponentProps> = (props) => {
  const { history, location } = props

  const onProductGroup = (data: any) => {
    history.push({
      pathname: data.router,
      state: data
    })
  }
  const productGroupData = getProductGroupData()
  return (
    <div className="productCenter container">
      {productGroupData && productGroupData.map((item: any) => (
        <div key={item.id} className="itemContent" onClick={() => onProductGroup(item)}>
          <img src={item.img} />
          <span>{item.label}</span>
        </div>
      ))}
      <div key="qrCode" className="itemContent qrCodeContent">
        <img src={`${domainName}/images/product_center/QRCode/1.png`} />
        <div>{intl.get("二维码描述")}</div>
        <div>{intl.get("邮箱")}：agrowonderful@foxmail.com</div>
        <div>{intl.get("微信扫码")}</div>
      </div>
    </div>
  )
}

export default ProductCenter