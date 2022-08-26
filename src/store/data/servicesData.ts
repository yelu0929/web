import intl from "react-intl-universal"

import { domainName } from "common/constants"

const icamaImg1 = `${domainName}/images/services/ICAMA/1.png`
const icamaImg2= `${domainName}/images/services/ICAMA/2.jpg`
const icamaImg3 = `${domainName}/images/services/ICAMA/3.jpg`
const icamaImg4 = `${domainName}/images/services/ICAMA/4.jpg`

const oemImg1 = `${domainName}/images/services/OEM/1.jpg`
const oemImg2= `${domainName}/images/services/OEM/2.jpg`

const transportImg1 = `${domainName}/images/services/transport/1.jpg`
const transportImg2= `${domainName}/images/services/transport/2.jpg`

const getServicesData = () => ([
  {
    label: intl.get("ICAMA").defaultMessage("ICAMA"),
    value: "ICAMA",
    router: "/services/ICAMA",
    img: [icamaImg1, icamaImg2, icamaImg3, icamaImg4],
    introduction: intl.getHTML("ICAMA介绍").defaultMessage("--")
  },
  {
    label: intl.get("OEM定制").defaultMessage("OEM定制"),
    value: "OEMPackage",
    router: "/services/OEMPackage",
    img: [oemImg1, oemImg2],
    introduction: intl.getHTML("OEM定制").defaultMessage("--")
  },
  {
    label: intl.get("运输").defaultMessage("运输"),
    value: "transportation",
    router: "/services/transportation",
    img: [transportImg1, transportImg2],
    introduction: intl.getHTML("运输介绍").defaultMessage("--")
  },
])

export default getServicesData