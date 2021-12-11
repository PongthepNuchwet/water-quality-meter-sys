import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

export default function LottieWaterRipple({ url }) {

    let container = useRef();

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require("./json/63918-water-ripple.json")
        })
    }, [])

    return (
        <>
            <div ref={container} style={{ 
                position: 'absolute',
                width: '100%',
                height: 'auto',
                bottom: '-7px',
                left: '0',
                overflow: 'hidden',
            }}></div>
        </>
    )

}