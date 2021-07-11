import React, { FC, HTMLAttributes, useState } from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './LogoPizza.css';

import { useEffect } from 'react';

let imgArr = [
    {imgUrl: "assets/imgs/img0.png"}, 
    {imgUrl: "assets/imgs/img1.png"}, 
    {imgUrl: "assets/imgs/img2.png"}, 
    {imgUrl: "assets/imgs/img3.png"}, 
    {imgUrl: "assets/imgs/img4.png"}, 
    {imgUrl: "assets/imgs/img5.png"}, 
    {imgUrl: "assets/imgs/img6.png"}, 
    {imgUrl: "assets/imgs/img7.png"}, 
    {imgUrl: "assets/imgs/img8.png"}, 
    {imgUrl: "assets/imgs/img9.png"}, 
]

export interface LogoPizzaInterface {
    imgUrl: string;
    href?: string;
}

export interface LogoPizzaProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * speech to display on LogoPizza
     */
    companyArr?: LogoPizzaInterface[]
    /**
     * mode : "Default" | "Compact"
     */
    mode?: "Default" | "Compact"
    /**
     * speed : 100 ~ 10000
     */
    speed?: number
}

/**
 * Primary UI component for user interaction
 */
export const LogoPizza: FC<LogoPizzaProps> = ({
    companyArr = [],
    mode = "Default",
    speed = 3000,
    ...props
}) => {
    
    const [width, setWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        let resizeEvent = (e) => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', resizeEvent)
        return () => window.removeEventListener('resize', resizeEvent);
    }, []);

    return (
        <div
            className={`logo-pizza ${mode == "Default" ? "" : "compact"}`}
            {...props}
        >
            <h3 className={`${ mode == "Compact" ? "text-2xl" : "text-4xl"} text-center mb-16`}>Trusted by</h3>
            <Slider 
                dots={false}
                infinite={true}
                speed={speed}
                slidesToShow={width < 640 ? 3 : (width < 768 ? 5 : 4)}
                slidesToScroll={1}
                autoplay={true}
                autoplaySpeed={speed}
                cssEase='linear'
            >
            { companyArr.map((company, index) => (
                <div 
                    key={index} 
                >
                    { company.imgUrl !== "" ?
                    <img 
                        className="res-img" 
                        src={`${company.imgUrl}`}
                        alt="" 
                    /> : 
                    <div
                        className="res-img"
                        style={{
                            backgroundColor: "black"
                        }}
                    ></div> }
                </div>
            )) }
            </Slider>
        </div>
    )
}
