const insecticideImg = "http://www.nblzx.com/images/insecticide.png"
const herbicidesImg ="http://www.nblzx.com/images/herbicide.png"
const fungicideImg = "http://www.nblzx.com/images/fungicide.png"
const plantGrowthRegulatorImg = "http://www.nblzx.com/images/plantGrowth.png"
const tcImg = "http://www.nblzx.com/images/tc.jpg"

import { domainName, telPhone } from "common/constants"
const insecticideMain = `${domainName}/images/product_center/Insecticide/main/main.jpg`
const insecticideImg1 = `${domainName}/images/product_center/Insecticide/details/methomyl.jpg`
const insecticideImg2 = `${domainName}/images/product_center/Insecticide/details/abamectin.png`
const insecticideImg3 = `${domainName}/images/product_center/Insecticide/details/fipronil.png`
const insecticideImg4 = `${domainName}/images/product_center/Insecticide/details/Amitraz.png`

const herbicidesMain = `${domainName}/images/product_center/Herbicide/main/main.png`
const herbicidesImg1 = `${domainName}/images/product_center/Herbicide/details/weedkiller24D.jpg`
const herbicidesImg2 = `${domainName}/images/product_center/Herbicide/details/grasskillerglifosatoglyphosateroudupWDGWG.jpg`
const herbicidesImg3 = `${domainName}/images/product_center/Herbicide/details/metribuzinSC.jpg`
const herbicidesImg4 = `${domainName}/images/product_center/Herbicide/details/Bentazonebendioxideherbicide.jpg`

const fungicideMain = `${domainName}/images/product_center/Fungicide/main/main.png`
const fungicideImg1 = `${domainName}/images/product_center/Fungicide/details/tebuconazole.jpg`
const fungicideImg2 = `${domainName}/images/product_center/Fungicide/details/difenoconazoleFS.jpg`
const fungicideImg3 = `${domainName}/images/product_center/Fungicide/details/azoxystrobin.jpg`
const fungicideImg4 = `${domainName}/images/product_center/Fungicide/details/chlorothalonil.jpg`

const regulatorMain = `${domainName}/images/product_center/regulator/main/main.jpg`
const regulatorImg1 = `${domainName}/images/product_center/regulator/details/growthhormoneethyleneripenerSL.jpg`
const regulatorImg2 = `${domainName}/images/product_center/regulator/details/PaclobutrazolSL.png`
const regulatorImg3 = `${domainName}/images/product_center/regulator/details/GA3tabletgibberellicacid.jpg`
const regulatorImg4 = `${domainName}/images/product_center/regulator/details/thidiazuron.jpg`

const tcMain = `${domainName}/images/product_center/TC/main/main.jpg`
const tcImg1 = `${domainName}/images/product_center/TC/details/emamectinbenzoateTC.jpg`
const tcImg2 = `${domainName}/images/product_center/TC/details/imidaclopridTC.JPG`
const tcImg3 = `${domainName}/images/product_center/TC/details/diuronTC.jpg`
const tcImg4 = `${domainName}/images/product_center/TC/details/bifenthrinTC.png`

import intl from "react-intl-universal"

export const getProductGroupData = () => ([
  {
    id: "1",
    label: intl.get("杀虫剂").defaultMessage("杀虫剂"),
    router: "/productCenter/insecticides",
    img: insecticideMain,
    value: "insecticides",
  },
  {
    id: "2",
    label: intl.get("除草剂").defaultMessage("除草剂"),
    router: "/productCenter/herbicides",
    value: "herbicides",
    img: herbicidesMain
  },
  {
    id: "3",
    label: intl.get("杀菌剂").defaultMessage("杀菌剂"),
    router: "/productCenter/fungicides",
    value: "fungicides",
    img: fungicideMain
  },
  {
    id: "4",
    label: intl.get("植物生长调节剂").defaultMessage("植物生长调节剂"),
    router: "/productCenter/plantGrowthRegulators",
    value: "plantGrowthRegulators",
    img: regulatorMain
  },
  {
    id: "5",
    label: intl.get("原药").defaultMessage("原药"),
    router: "/productCenter/TC",
    value: "TC",
    img: tcMain
  }
])

export const getProductData = () => ([
  {
    id: "100000",
    title: intl.get("杀虫剂1"),
    img: [insecticideImg1],
    groupId: "insecticides",
    router: "/productCenter/insecticides/detail/100000",
    introduction: "",
    detail: intl.get("杀虫剂1详情"),
  },
  {
    id: "100001",
    title: intl.get("杀虫剂2"),
    img: [insecticideImg2],
    groupId: "insecticides",
    router: "/productCenter/insecticides/detail/100001",
    introduction: "",
    detail: intl.get("杀虫剂2详情"),
  },
  {
    id: "100002",
    title: intl.get("杀虫剂3"),
    img: [insecticideImg3],
    groupId: "insecticides",
    router: "/productCenter/insecticides/detail/100002",
    introduction: "",
    detail: intl.get("杀虫剂3详情"),
  },
  {
    id: "100003",
    title: intl.get("杀虫剂4"),
    img: [insecticideImg4],
    groupId: "insecticides",
    router: "/productCenter/insecticides/detail/100003",
    introduction: "",
    detail: intl.get("杀虫剂4详情"),
  },
  {
    id: "100004",
    title: intl.get("除草剂1").defaultMessage("除草剂1"),
    img: [herbicidesImg1],
    groupId: "herbicides",
    router: "/productCenter/herbicides/detail/100004",
    introduction: "",
    detail: intl.get("除草剂1详情")
  },
  {
    id: "100005",
    title: intl.get("除草剂2").defaultMessage("除草剂2"),
    img: [herbicidesImg2],
    groupId: "herbicides",
    router: "/productCenter/herbicides/detail/100005",
    introduction: "",
    detail: intl.get("除草剂2详情")
  },
  {
    id: "100006",
    title: intl.get("除草剂3").defaultMessage("除草剂3"),
    img: [herbicidesImg3],
    groupId: "herbicides",
    router: "/productCenter/herbicides/detail/100006",
    introduction: "",
    detail: intl.get("除草剂3详情")
  },
  {
    id: "100007",
    title: intl.get("除草剂4").defaultMessage("除草剂4"),
    img: [herbicidesImg4],
    groupId: "herbicides",
    router: "/productCenter/herbicides/detail/100007",
    introduction: "",
    detail: intl.get("除草剂4详情")
  },
  {
    id: "100008",
    title: intl.get("杀菌剂1").defaultMessage("杀菌剂1"),
    img: [fungicideImg1],
    groupId: "fungicides",
    router: "/productCenter/fungicides/detail/100008",
    introduction: "",
    detail: intl.get("杀菌剂1详情")
  },
  {
    id: "100009",
    title: intl.get("杀菌2").defaultMessage("杀菌2"),
    img: [fungicideImg2],
    groupId: "fungicides",
    router: "/productCenter/fungicides/detail/100009",
    introduction: "",
    detail: intl.get("杀菌剂2详情")
  },
  {
    id: "100010",
    title: intl.get("杀菌3").defaultMessage("杀菌3"),
    img: [fungicideImg3],
    groupId: "fungicides",
    router: "/productCenter/fungicides/detail/100010",
    introduction: "",
    detail: intl.get("杀菌剂3详情")
  },
  {
    id: "100011",
    title: intl.get("杀菌4").defaultMessage("杀菌4"),
    img: [fungicideImg4],
    groupId: "fungicides",
    router: "/productCenter/fungicides/detail/100011",
    introduction: "",
    detail: intl.get("杀菌剂4详情")
  },
  {
    id: "100012",
    title: intl.get("植物生长调节剂1").defaultMessage("植物生长调节剂1"),
    img: [regulatorImg1],
    groupId: "plantGrowthRegulators",
    router: "/productCenter/plantGrowthRegulators/detail/100012",
    introduction: "",
    detail: intl.get("植物生长调节剂1详情")
  },
  {
    id: "100013",
    title: intl.get("植物生长调节剂2").defaultMessage("植物生长调节剂2"),
    img: [regulatorImg2],
    groupId: "plantGrowthRegulators",
    router: "/productCenter/plantGrowthRegulators/detail/100013",
    introduction: "",
    detail: intl.get("植物生长调节剂2详情")
  },
  {
    id: "100014",
    title: intl.get("植物生长调节剂3").defaultMessage("植物生长调节剂3"),
    img: [regulatorImg3],
    groupId: "plantGrowthRegulators",
    router: "/productCenter/plantGrowthRegulators/detail/100014",
    introduction: "",
    detail: intl.get("植物生长调节剂3详情")
  },
  {
    id: "100015",
    title: intl.get("植物生长调节剂4").defaultMessage("植物生长调节剂4"),
    img: [regulatorImg4],
    groupId: "plantGrowthRegulators",
    router: "/productCenter/plantGrowthRegulators/detail/100015",
    introduction: "",
    detail: intl.get("植物生长调节剂4详情")
  },
  {
    id: "100016",
    title: intl.get("原药1").defaultMessage("原药1"),
    img: [tcImg1],
    groupId: "TC",
    router: "/productCenter/TC/detail/100016",
    introduction: "",
    detail: intl.get("原药1详情")
  },
  {
    id: "100017",
    title: intl.get("原药2").defaultMessage("原药2"),
    img: [tcImg2],
    groupId: "TC",
    router: "/productCenter/TC/detail/100017",
    introduction: "",
    detail: intl.get("原药2详情")
  },
  {
    id: "100018",
    title: intl.get("原药3").defaultMessage("原药3"),
    img: [tcImg3],
    groupId: "TC",
    router: "/productCenter/TC/detail/100018",
    introduction: "",
    detail: intl.get("原药3详情")
  },
  {
    id: "100019",
    title: intl.get("原药4").defaultMessage("原药4"),
    img: [tcImg4],
    groupId: "TC",
    router: "/productCenter/TC/detail/100019",
    introduction: "",
    detail: intl.get("原药4详情")
  },
])