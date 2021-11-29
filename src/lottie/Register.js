import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

export default function LottieRegister() {

    let container = useRef();

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require("./json/83106-save-trees-protect-the-environment")
        })
    }, [])

    return (
        <>
            <div ref={container} style={{
                height: '100%'
            }}></div>
        </>
    )

}