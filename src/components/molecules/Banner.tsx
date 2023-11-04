import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/virtual';
import 'swiper/css/autoplay';
import useWidth from 'utils/useWidth';

const Banner: FC = () => {
  const width = useWidth();

  const banners = [
    {
      desktop_image: 'https://kamva-minio-storage.darkube.app/media/websiteappearance/desktop-banner-saramad.png',
      mobile_image: 'https://kamva-minio-storage.darkube.app/media/websiteappearance/IMG_20231031_094331_039.jpg',
      redirect_to: 'https://platform.kamva.academy/program/17/?utm_source=landing-banner&utm_medium=organic&utm_campaign=saraamad',
    }
  ]

  return (
    <Swiper
      style={{ cursor: 'pointer' }}
      loop={banners.length > 1}
      speed={800}
      spaceBetween={10}
      slidesPerView={1}
      modules={[Virtual, Autoplay]}
      autoplay={{ delay: 6000, disableOnInteraction: false }}
      virtual>
      {banners.map((banner, index) => (
        <SwiperSlide key={index} virtualIndex={index} onClick={() => window.location.href = banner.redirect_to}>
          <img src={(width === 'xs' || width === 'sm') ? banner.mobile_image : banner.desktop_image} style={{ width: '100%', borderRadius: 10 }} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
