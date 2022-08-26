import React, { useEffect } from "react"
import ReactSwiper from "reactjs-swiper";

import { swiperData } from "store/data/swiperData"


const Swiper = () => {

  const swiperOptions = {
    preloadImages: false,
    autoplay: 8000,
    autoplayDisableOnInteraction: false
  };

  return (
    <ReactSwiper 
      swiperOptions={swiperOptions} 
      showPagination={true} 
      items={swiperData}
      className="swiperContent" 
    />
  )
}

export default Swiper