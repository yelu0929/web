import intl from "react-intl-universal"
import { domainName } from "common/constants"

const companyProfileImg1 = `${domainName}/images/aboutus/company_profile/1.jpg`
const companyProfileImg2= `${domainName}/images/aboutus/company_profile/2.png`
const companyProfileImg3 = `${domainName}/images/aboutus/company_profile/3.jpg`
const companyProfileImg4 = `${domainName}/images/aboutus/company_profile/4.jpg`

const companyCultureImg1 = `${domainName}/images/aboutus/company_cultures/1.png`

const ssrImg1 = `${domainName}/images/aboutus/ssr/1.jpg`

const globalMarketImg1 = `${domainName}/images/aboutus/global_market/1.jpg`

const joinUsImg1 = `${domainName}/images/aboutus/join_us/1.jpg`

const contractUsImg1 = `${domainName}/images/aboutus/contact_us/1.jpg`

const getAboutData = () => ([
  {
    label: intl.get("公司简介").defaultMessage("公司简介"),
    value: "companyProfile",
    router: "/about/companyProfile",
    img: [companyProfileImg1, companyProfileImg2, companyProfileImg3, companyProfileImg4],
    introduction: intl.getHTML("公司简介介绍").defaultMessage("--")
  },
  {
    label: intl.get("企业文化").defaultMessage("企业文化"),
    value: "companyCulture",
    router: "/about/companyCulture",
    img: [companyCultureImg1],
    introduction: intl.getHTML("企业文化介绍").defaultMessage("--")
  },
  {
    label: intl.get("社会责任").defaultMessage("社会责任"),
    value: "socialResponsibility",
    router: "/about/socialResponsibility",
    img: [ssrImg1],
    introduction: intl.getHTML("社会责任介绍").defaultMessage("--")
  },
  {
    label: intl.get("全球市场").defaultMessage("全球市场"),
    value: "companyCustomers",
    router: "/about/companyCustomers",
    img: [globalMarketImg1],
    introduction: intl.getHTML("全球市场介绍").defaultMessage("--")
  },
  {
    label: intl.get("人才招聘").defaultMessage("人才招聘"),
    value: "talentRecruitment",
    router: "/about/talentRecruitment",
    img: [joinUsImg1],
    introduction: intl.getHTML("人才招聘介绍").defaultMessage("--")
  },
  {
    label: intl.get("联系我们"),
    value: "contactUs",
    router: "/about/contactUs",
    img: [contractUsImg1],
    introduction: intl.getHTML("联系我们介绍").defaultMessage("--")
  },
])

export default getAboutData