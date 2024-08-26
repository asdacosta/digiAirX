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
import { Link } from "react-router-dom";

function ServicesSlide() {
  const [serviceName, setServiceName] = useState({ name: "", id: "" });
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const slidesData = [
    { src: websiteSvg, alt: "Website Development", id: "website" },
    { src: webappSvg, alt: "Web App Development", id: "webapp" },
    { src: uiSvg, alt: "UI/UX design", id: "ui" },
    { src: seoSvg, alt: "Search Engine Optimization", id: "seo" },
    { src: marketingSvg, alt: "Marketing", id: "marketing" },
    { src: designSvg, alt: "Graphic Design", id: "design" },
    { src: brandingSvg, alt: "Brand Design", id: "brand" },
    { src: suiteSvg, alt: "Suite", id: "suite" },
  ];

  useEffect(() => {
    slidesData.forEach((svg, index) => {
      if (index === currentSlideIndex)
        setServiceName({ name: svg.alt, id: svg.id });
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
          <Slide key={slide.id}>
            <img src={slide.src} alt={slide.alt} draggable="false" />
          </Slide>
        ))}
      </Swipe>
      <Link to={`/services/#${serviceName.id}`}>
        <div className="serviceNameBox">
          <span className="serviceName">{serviceName.name}</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24l94.1 0L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135L288 328c0 13.3 10.7 24 24 24s24-10.7 24-24l0-160c0-13.3-10.7-24-24-24l-152 0z" />
          </svg>
        </div>
      </Link>
    </>
  );
}

export { ServicesSlide };
