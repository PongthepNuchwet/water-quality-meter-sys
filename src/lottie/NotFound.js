import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

export default function LottieNotFound() {

    let container = useRef();

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require("./json/NotFound.json")
        })
    }, [])

    return (
        <>
            <div ref={container} style={{ height: '75vh',}}></div>
        </>
    )

}