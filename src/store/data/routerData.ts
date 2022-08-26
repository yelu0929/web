import intl from "react-intl-universal"

const getRouterData = () =>  ([
  {
    label: intl.get("网站首页").defaultMessage("网站首页"),
    router: "/",
    value: "homepage",
    children: [],
  },
  {
    label: intl.get("关于我们").defaultMessage("关于我们"),
    router: "/about",
    value: "about",
    children: [
      {
        label: intl.get("公司简介").defaultMessage("公司简介"),
        router: "/about/companyProfile",
        value: "companyProfile",
      },
      {
        label: intl.get("企业文化").defaultMessage("企业文化"),
        router: "/about/companyCulture",
        value: "companyCulture"
      },
      {
        label: intl.get("社会责任").defaultMessage("社会责任"),
        router: "/about/socialResponsibility",
        value: "socialResponsibility"
      },
      {
        label: intl.get("全球市场").defaultMessage("全球市场"),
        router: "/about/companyCustomers",
        value: "companyCustomers"
      },
      {
        label: intl.get("人才招聘").defaultMessage("人才招聘"),
        router: "/about/talentRecruitment",
        value: "talentRecruitment"
      },
      {
        label: intl.get("联系我们").defaultMessage("联系我们"),
        router: "/about/contactUs",
        value: "contactUs"
      },
    ]
  },
  {
    label: intl.get("产品中心").defaultMessage("产品中心"),
    router: "/productCenter",
    value: "productCenter",
    children: [
      {
        label: intl.get("杀虫剂").defaultMessage("杀虫剂"),
        router: "/productCenter/insecticides",
        value: "insecticides",
        children: []
      },
      {
        label: intl.get("除草剂").defaultMessage("除草剂"),
        router: "/productCenter/herbicides",
        value: "herbicides",
        children: []
      },
      {
        label: intl.get("杀菌剂").defaultMessage("杀菌剂"),
        router: "/productCenter/fungicides",
        value: "fungicides",
        children: []
      },
      {
        label: intl.get("植物生长调节剂").defaultMessage("植物生长调节剂"),
        router: "/productCenter/plantGrowthRegulators",
        value: "plantGrowthRegulators",
        children: []
      },
      {
        label: intl.get("原药").defaultMessage("原药"),
        router: "/productCenter/TC",
        value: "TC",
        children: []
      },
    ]
  },
  {
    label: intl.get("技术方案").defaultMessage("技术方案"),
    router: "/technicalScheme",
    value: "technicalScheme"
  },
  {
    label: intl.get("新闻中心").defaultMessage("新闻中心"),
    router: "/newsCenter",
    value: "newsCenter"
  },
  {
    label: intl.get("服务").defaultMessage("服务"),
    router: "/services",
    value: "services",
    children: [
      {
        label: "ICAMA",
        router: "/services/ICAMA",
        value: "ICAMA",
        children: []
      },
      {
        label: intl.get("OEM定制").defaultMessage("OEM定制"),
        router: "/services/OEMPackage",
        value: "OEMPackage",
        children: []
      },
      {
        label: intl.get("运输").defaultMessage("运输"),
        router: "/services/transportation",
        value: "transportation",
        children: []
      }
    ]
  },
  // {
  //   label: intl.get("联系我们").defaultMessage("联系我们"),
  //   router: "/about/contactUs",
  //   value: "callUs"
  // }
])

export default getRouterData