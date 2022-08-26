import React, { useEffect, useState } from "react"
import { RouteComponentProps } from "react-router-dom";
import { Icon, Pagination } from "antd"
import getNewsData from "store/data/newsData"
import "./newsCenter.scss"

interface PageDataType {
  total: number,
  pageSize: number,
  pageIndex: number
}
const NewsCenter: React.FC<RouteComponentProps> = (props) => {
  const [pageData, setPageData] = useState<PageDataType>({total: 0, pageIndex: 1, pageSize: 5})
  const { history } = props

  const onNewsClick = (data: any) => {
    history.push({
      pathname: `/newsCenter/detail/${data.id}`,
    })
  }
  const newsData = getNewsData()
  const list = newsData.slice((pageData.pageIndex - 1) * pageData.pageSize, pageData.pageIndex * pageData.pageSize)
  return (
    <div className="newsCenter container">
      <div className="content">
        {list.map((item: any) => (
          <div key={item.id} className="list" onClick={() => onNewsClick(item)}>
            {/* <img src={item.img} /> */}
            <div className="right">
              <div className="rightContent">
                <span style={{fontSize: 16}}>{item.title}</span>
                <span className="describe">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.describe}</span>
                <span style={{color: "#666"}}>{item.createTime}</span>
              </div>
              {/* <Icon style={{color: "#1089ff", fontSize: 24}} type="right" /> */}
              <Icon style={{color: "#1089ff", fontSize: 24}} type="right-circle" />
            </div>
          </div>
        ))}
      </div>
      <Pagination
        className="newsCenter_pagination"
        current={pageData.pageIndex}
        pageSize={pageData.pageSize}
        total={newsData.length}
        showTotal={(totalNum: number) => `共${totalNum}条`}
        showQuickJumper={true}
        showSizeChanger={true}
        pageSizeOptions={["5", "10", "15"]}
        onChange={(page: number, size?: number) => setPageData({...pageData, pageIndex: page})}
        onShowSizeChange={(page: number, size: number) => setPageData({...pageData, pageIndex: 1, pageSize: size})}
      />
    </div>
  )
}

export default NewsCenter