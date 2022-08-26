import intl from "react-intl-universal"

const getNewsData = () => ([
  {
    "id": "10009",
    "title": intl.get("新闻2标题"),
    "createTime": intl.get("新闻2时间"),
    "describe": "",
    "detail": intl.get("新闻2内容"),
    "router": "/newsCenter/detail/10009"
  },
  {
    "id": "10008",
    "title": intl.get("新闻1标题"),
    "createTime": intl.get("新闻1时间"),
    "describe": "",
    "detail": intl.get("新闻1内容"),
    "router": "/newsCenter/detail/10008"
  },
  {
    "id": "10007",
    "title": intl.get("新闻3标题"),
    "createTime": intl.get("新闻3时间"),
    "describe": "",
    "detail": intl.get("新闻3内容"),
    "router": "/newsCenter/detail/10007"
  },
  {
    "id": "10006",
    "title": intl.get("新闻4标题"),
    "createTime": intl.get("新闻4时间"),
    "describe": "",
    "detail": intl.get("新闻4内容"),
    "router": "/newsCenter/detail/10006"
  },
  {
    "id": "10001",
    "title": intl.get("农业农村部部署春季小麦条锈病防控").defaultMessage("农业农村部部署春季小麦条锈病防控"),
    "createTime": intl.get("2022年3月14日"),
    "describe": "",
    "detail": "",
    "router": "/newsCenter/detail/10001"
  },
  {
    "id": "10002",
    "title": intl.get("中国、柬埔寨、缅甸、巴基斯坦、越南五国联合发布共建“一带一路”农药产品质量标准合作意向声明"),
    "createTime": intl.get("2021年7月6日"),
    "describe": "",
    "detail": "",
    "router": "/newsCenter/detail/10002"
  },
  {
    "id": "10003",
    "title": intl.get("2020年中央一号文件公布"),
    "createTime": intl.get("2020年2月5日"),
    "describe": "",
    "detail": "",
    "router": "/newsCenter/detail/10003"
  },
  {
    "id": "10004",
    "title": intl.get("关于印发《2019年农药管理工作要点》的通知"),
    "createTime": intl.get("2019年3月8日"),
    "describe": "",
    "detail": "",
    "router": "/newsCenter/detail/10004"
  },
  {
    "id": "10005",
    "title": intl.get("农药抽检总体合格率99.7%"),
    "createTime": intl.get("2018年10月12日"),
    "describe": "",
    "detail": "",
    "router": "/newsCenter/detail/10005"
  }
])

export default getNewsData