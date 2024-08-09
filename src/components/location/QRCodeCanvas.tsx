// components/QRCodeCanvas.tsx
import React from 'react';
import { useQRCode } from 'next-qrcode';

interface QRCodeCanvasProps {
    text: string;
}

const QRCodeCanvas: React.FC<QRCodeCanvasProps> = ({ text }) => {
    const { Canvas } = useQRCode();

    return (
        <Canvas
            text={text}
            options={{
                errorCorrectionLevel: 'M',
                margin: 3,
                scale: 4,
                width: 200,
                color: {
                    light: '#000000',
                    dark: '#01b1f0',
                },
            }}
        />
    );
};

export default QRCodeCanvas;
