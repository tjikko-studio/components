import React, { FC, HTMLAttributes } from 'react'
import { HeaderText, HeaderTextProps } from '../headertext/HeaderText'
/*
* In production mode, show dynamic image and video with url
*/
import bgTestImage from '../../assets/images/bg_bigheader.png'
import bgTestVideo from '../../assets/images/bunny.mp4'

export interface BigHeaderProps extends HTMLAttributes<HTMLElement> {
   /**
    * background image or video url in assets folder
    */
    bgImage?: string
    /**
     * image or video
     */
    bgtype: "image" | "video"
    /**
     * header text information
     */
    headerinfo: HeaderTextProps

    className?: string
}

/**
 * Primary UI component for user interaction
 */
export const BigHeader: FC<BigHeaderProps> = ({
    bgImage="../images",
    ...props
}) => {

    return (
        <div
            {...props}
            className={`min-h-568 lg:h-90vh md:h-90vh sm:h-90vh  flex flex-wrap content-end bg-cover bg-center w-full
                ${props.className?props.className:''}
            `}
            style={
                {
                    //backgroundImage: 'url(https://source.unsplash.com/random)'
                    backgroundImage: (props.bgtype == "image") ? `url(${bgTestImage})` : "none"
                }
            }
             
        >
            {
                (props.bgtype == "video") && (
                    <video id="videoBG" poster={bgTestImage} autoPlay muted loop className='z-0 fixed top-0 flex flex-wrap content-end bg-cover bg-center w-full'>
                        <source src={bgTestVideo} type="video/mp4" />
                        {/* <source src={bgImage} type="video/mp4" /> */}
                    </video>
                )
            }
            
            <div
                className='pb-6 lg:pb-12 md:pb-12 sm:pb-12 pl-6 lg:pl-12 md:pl-12 sm:pl-12 z-10'
            >
                <HeaderText 
                    {...props.headerinfo} 
                    style={{backgroundColor:'transparent'}}
                />
            </div>
        </div>
    )
}
