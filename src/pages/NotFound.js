import LottieNotFound from '../lottie/NotFound'

export default function NotFound() {

    return (
        <>
            <div style={{
                width: '95vw',
                height: '95vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }} >
                <h1 className="title"
                    style={{
                        color: '#00A4D3',
                        fontFamily: 'mitr',
                    }}
                >ระบบตรวจคุณภาพของน้ำ</h1>
                <LottieNotFound />
            </div>
        </>
    );
}