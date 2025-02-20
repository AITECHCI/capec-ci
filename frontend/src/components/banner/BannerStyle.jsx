"use client";
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, EffectFade } from 'swiper/modules';
import SingleBanner from './SingleBanner';
import { getBanners } from './path/to/your/api'; // Assurez-vous que le chemin est correct

const BannerStyle = () => {
    const [banners, setBanners] = useState([]);

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const data = await getBanners();
                console.log('Données récupérées de l\'API:', data); // Vérifiez ici
                setBanners(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des bannières:', error);
            }
        };

        fetchBanners();
    }, []);

    console.log('État des bannières après récupération:', banners); // Vérifiez ici

    return (
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
                        {banners.length > 0 ? (
                            banners.map(banner => (
                                <SwiperSlide key={banner.id} className='banner-style-one'>
                                    <SingleBanner banner={banner} />
                                </SwiperSlide>
                            ))
                        ) : (
                            <SwiperSlide>
                                <div>Aucune bannière disponible</div>
                            </SwiperSlide>
                        )}
                    </div>
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
        </div>
    );
};

export default BannerStyle;