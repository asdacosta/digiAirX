import websiteSvg from "../../assets/svg-services/website.svg";
import webappSvg from "../../assets/svg-services/webapp.svg";
import uiSvg from "../../assets/svg-services/uiux.svg";
import seoSvg from "../../assets/svg-services/seo.svg";
import marketingSvg from "../../assets/svg-services/marketing.svg";
import designSvg from "../../assets/svg-services/design.svg";
import brandingSvg from "../../assets/svg-services/branding.svg";
import suiteSvg from "../../assets/svg-services/suite.svg";

import { Swiper as Swipe, SwiperSlide as Slide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
import {
  A11y,
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
} from "swiper/modules";
import "./ServicesSlide.css";
import { useState } from "react";

function ServicesSlide() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slidesData = [
    { src: websiteSvg, alt: "Website dev" },
    { src: webappSvg, alt: "Webapp dev" },
    { src: uiSvg, alt: "UI/UX" },
    { src: seoSvg, alt: "SEO" },
    { src: marketingSvg, alt: "Marketing" },
    { src: designSvg, alt: "Graphic design" },
    { src: brandingSvg, alt: "Brand design" },
    { src: suiteSvg, alt: "Suite" },
  ];

  return (
    <>
      <Swipe
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        centeredSlides
        slidesPerView={2}
        slidesPerGroup={1}
        spaceBetween={10}
        speed={700}
        onRealIndexChange={(slide) => setCurrentSlideIndex(slide.realIndex)}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        navigation
        pagination={{ clickable: false }}
        scrollbar={{ draggable: false }}
        autoHeight={true}
      >
        {slidesData.map((slide) => (
          <Slide key={slide.alt}>
            <img src={slide.src} alt={slide.alt} draggable="false" />
          </Slide>
        ))}
      </Swipe>
    </>
  );
}

export { ServicesSlide };
