import React, { useEffect, useState } from "react"
import { Button } from "antd"
import { RouteComponentProps } from "react-router-dom";
import { telPhone } from "common/constants"
import { getProductData } from "store/data/productData"
import intl from "react-intl-universal"

const ProductDetail: React.FC<RouteComponentProps> = (props) => {
  const [index, setIndex] = useState<number>(0)
  const [productInfo, setProductInfo] = useState<any>()
  const { location, match } = props
  useEffect(() => {
    const data = match.params as any || {}
    const productData = getProductData() || []
    const obj = productData.find(val => val.id === data.id)
    setProductInfo(obj)
  }, [location])
  return (
    <div className="productDetail container">
      {productInfo && <>
        <div className="header">
          <div className="left">
            <img className="bigImg" src={productInfo.img && productInfo.img[index]} />
            <div className="imgAre">
              {productInfo.img && productInfo.img.map((url: string, i: number) => <img key={i} className={index === i ? "selected" : ""} onClick={() => setIndex(i)} src={url} />)}
            </div>
          </div>
          <div className="right">
            <div className="title">{productInfo.title}</div>
            <div className="intro">{productInfo.introduction}</div>
            <div className="tel">
              <span>{intl.get("全球服务热线")}：</span>
              <span style={{color: "red"}}>{telPhone}</span>
            </div>
          </div>
        </div>
        <div className="content">
          <p className="title">{intl.get("产品详情")}</p>
          <div className="intro" dangerouslySetInnerHTML={{__html: productInfo.detail || ""}} />
        </div>
      </>}
    </div>
  )
}

export default ProductDetail