"use client";
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, EffectFade } from 'swiper/modules';
import SingleBanner from './SingleBanner';
import axios from 'axios'; // Assurez-vous d'importer axios

const BannerStyle = () => {
    const [banners, setBanners] = useState([]);

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/banners');
                setBanners(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des bannières:', error);
            }
        };

        fetchBanners();
    }, []);

    return (
        <>
            <div className="banner-area banner-style-one shadow navigation-custom-large zoom-effect overflow-hidden text-light">
                <div className="banner-fade">
                    <Swiper
                        modules={[Keyboard, Autoplay, Pagination, EffectFade]}
                        direction={"horizontal"}
                        autoplay={false}
                        loop={true}
                        effect={"fade"}
                        fadeEffect={{
                            crossFade: true
                        }}
                        keyboard={{
                            enabled: true,
                        }}
                        pagination={{
                            el: '.swiper-pagination',
                            clickable: true,
                        }}
                    >
                        <div className="swiper-wrapper">
                            {banners.map(banner => (
                                <SwiperSlide key={banner.id} className='banner-style-one'>
                                    <SingleBanner banner={banner} />
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </>
    );
};

export default BannerStyle;