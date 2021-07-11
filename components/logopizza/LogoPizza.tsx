import React, { FC, HTMLAttributes, useState } from 'react'
import Slider from "react-slick";
import { Gestures } from "react-gesture-handler";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './LogoPizza.css';

import Img0 from './img0.png';
import Img1 from './img1.png';
import Img2 from './img2.png';
import Img3 from './img3.png';
import Img4 from './img4.png';
import Img5 from './img5.png';
import Img6 from './img6.png';
import Img7 from './img7.png';
import Img8 from './img8.png';
import Img9 from './img9.png';
import { useEffect } from 'react';

let imgArr = [
    {imgUrl: Img0}, {imgUrl: Img1}, {imgUrl: Img2}, {imgUrl: Img3}, {imgUrl: Img4}, {imgUrl: Img5}, {imgUrl: Img6}, {imgUrl: Img7}, {imgUrl: Img8}, {imgUrl: Img9} 
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
}

/**
 * Primary UI component for user interaction
 */
export const LogoPizza: FC<LogoPizzaProps> = ({
    companyArr = [],
    mode = "Default",
    ...props
}) => {
    const [positionX, setPositionX] = useState(-128);
    const handleGesture = (event: HammerInput) => {
        let {
            deltaX,
            deltaY,
            type,
            distance,
        } = event;
    }
    const handlePanStart = () => {

    }
    const handlePanEnd = () => {

    }

    const [width, setWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        let resizeEvent = (e) => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', resizeEvent)
        return () => window.removeEventListener('resize', resizeEvent);
    }, []);

    if (!true) {
        return (
            <div
                className="logo-pizza"
                {...props}
            >
                <Slider 
                    dots={false}
                    infinite={true}
                    speed={500}
                    slidesToShow={4}
                    slidesToScroll={1}
                    // autoplay={true}
                    centerMode={true}
                >
                { imgArr.map((company, index) => (
                    <div 
                        key={index} 
                    >
                        <div
                            className="w-36 h-24"
                            style={{
                                marginLeft: "-50%",
                                transform: "translateX(50%)",
                                background: "black",
                            }}
                        >
                        </div>
                        {/* <img 
                            className="w-36 h-24" 
                            style={{
                                marginLeft: "-50%",
                                transform: "translateX(50%)",
                            }}
                            src={`${company.imgUrl}`}
                            alt="" 
                        /> */}
                    </div>
                )) }
                </Slider>
            </div>
        )
    } else {
        return (
            <>
                <h3 className="text-4xl text-center lg:mb-16 md:mb-17 sm:mb-24">Trusted by</h3>
                <div 
                    className="lg:container md:container sm:container overflow-hidden mx-auto" 
                >
                    <Gestures
                        recognizers={{
                            Pan: {
                                events: {
                                    panleft: handleGesture,
                                    panright: handleGesture,
                                    panup: handleGesture,
                                    pandown: handleGesture,
                                    panstart: handlePanStart,
                                    panend: handlePanEnd,
                                }
                            }
                        }}
                    >
                        <div 
                            className={`flex ${ width > 640 ? "flex-nowrap w-max" : "flex-wrap w-full"}`}
                            style={{
                                marginLeft: (mode == "Default") ? 
                                    (width > 1024 ? "-113.5px" : (width > 768 ? "12px" : "32px")) :
                                    (width > 1024 ? "-130.5px" : (width > 768 ? "-96px" : "32px")),
                            }}
                        >
                        { imgArr.map((company, index) => (
                            <div 
                                // className=
                                key={index}
                                style={{
                                    marginTop: width > 768 ? "0px" : "32px",
                                    marginBottom: width > 768 ? "0px" : "32px",
                                    marginLeft: (mode == "Default") ? 
                                        (width > 1024 ? "53.5px" : (width > 768 ? "24px" : "32px"))
                                        : (width > 1024 ? "53.5px" : (width > 768 ? "40px" : "16px")),
                                    marginRight: (mode == "Default") ? 
                                        (width > 1024 ? "53.5px" : (width > 768 ? "24px" : "32px"))
                                        : (width > 1024 ? "53.5px" : (width > 768 ? "40px" : "16px")),
                                    paddingLeft: (mode == "Default") ? 
                                        (width > 1024 ? "27.315px" : (width > 768 ? "22.92px" : "30.37px")) :
                                        (width > 1024 ? "20.435px" : (width > 768 ? "15.28px" : "30.37px")),
                                    paddingRight: (mode == "Default") ? 
                                        (width > 1024 ? "27.315px" : (width > 768 ? "22.92px" : "30.37px")) :
                                        (width > 1024 ? "20.435px" : (width > 768 ? "15.28px" : "30.37px")),
                                    
                                }}
                            >
                                {/* <img 
                                    className="w-36 h-24" 
                                    src={`${company.imgUrl} `}
                                    alt="" 
                                /> */}
                                <div
                                    style={{
                                        width: 
                                            (mode == "Default") ? 
                                            (width > 1024 ? "88.37px" : (width > 768 ? "74.16px" : "98.26px")) : 
                                            (width > 1024 ? "66.13px" : (width > 768 ? "49.44px" : "98.26px")),
                                        height: 
                                            (mode == "Default") ? 
                                            (width > 1024 ? "88.37px" : (width > 768 ? "74.16px" : "98.26px")) : 
                                            (width > 1024 ? "66.13px" : (width > 768 ? "49.44px" : "98.26px")),
                                        background: "black",
                                    }}
                                >
                                </div>
                            </div>
                        )) }
                        </div>
                    </Gestures>
                </div>
            </>
        )
    }
}
