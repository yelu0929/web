import React, { useEffect, useState } from "react"
import { Pagination } from "antd"
import { Switch, Route, withRouter, RouteComponentProps, Redirect } from "react-router-dom";

import { getProductData } from "store/data/productData"
import "./product.scss"

interface PageDataType {
  total: number,
  pageSize: number,
  pageIndex: number
}
const ProductGroup: React.FC<RouteComponentProps> = (props) => {
  const [pageData, setPageData] = useState<PageDataType>({total: 0, pageIndex: 1, pageSize: 12})
  const [productList, setProductList] = useState<any[]>([])
  const { history, location } = props
  useEffect(() => {
    // const data = location.state as any || {}
    // const arr = location.pathname.split("/")
    // if(arr[arr.length - 1].indexOf("group") > -1) {
    //   setProductList(productData.filter(val => val.groupId === data.value) || [])
    // }else {
    //   setProductList(productData.filter(val => val.parentId === data.value) || [])
    // }
    const arr = location.pathname.split("/") || []
    const groupId = arr[arr.length - 1] || ""
    const productData = getProductData() || []
    setProductList(productData.filter(val => val.groupId === groupId) || [])
  }, [location])

  const onProductDetail = (data: any) => {
    // history.push({
    //   pathname: "/productCenter/productDetail",
    //   state: data
    // })
    history.push(data.router)
  }
  const list = productList.slice((pageData.pageIndex - 1) * pageData.pageSize, pageData.pageIndex * pageData.pageSize)
  return (
    <div className="productGroup container">
      <div className="productGroup_content">
        {list && list.map((item: any) => (
          <div key={item.id} className="itemContent" onClick={() => onProductDetail(item)}>
            <img src={item.img && item.img[0]} />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
      <Pagination
        className="productGroup_pagination"
        current={pageData.pageIndex}
        pageSize={pageData.pageSize}
        total={productList.length}
        showTotal={(totalNum: number) => `共${totalNum}条`}
        showQuickJumper={true}
        showSizeChanger={true}
        pageSizeOptions={["12", "24", "36"]}
        onChange={(page: number, size?: number) => setPageData({...pageData, pageIndex: page})}
        onShowSizeChange={(page: number, size: number) => setPageData({...pageData, pageIndex: 1, pageSize: size})}
      />
    </div>
  )
}

export default ProductGroup