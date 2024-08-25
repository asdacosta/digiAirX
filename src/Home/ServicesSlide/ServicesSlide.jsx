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
import { useEffect, useState } from "react";

function ServicesSlide() {
  const [serviceName, setServiceName] = useState("");
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const slidesData = [
    { src: websiteSvg, alt: "Website Development" },
    { src: webappSvg, alt: "Web App Development" },
    { src: uiSvg, alt: "UI/UX design" },
    { src: seoSvg, alt: "Search Engine Optimization" },
    { src: marketingSvg, alt: "Marketing" },
    { src: designSvg, alt: "Graphic Design" },
    { src: brandingSvg, alt: "Brand Design" },
    { src: suiteSvg, alt: "Suite" },
  ];

  useEffect(() => {
    slidesData.forEach((svg, index) => {
      if (index === currentSlideIndex) setServiceName(svg.alt);
    });
  }, [currentSlideIndex]);

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
      <span className="serviceName">{serviceName}</span>
    </>
  );
}

export { ServicesSlide };
