// components/Header.tsx
import React from 'react';
import {useRouter} from 'next/router';
import Image from 'next/image';
import QRCodeCanvas from './QRCodeCanvas';

const Header: React.FC = () => {
    const router = useRouter();

    // Fetching the full URL
    const fullUrl = typeof window !== 'undefined' ? window.location.href : '';
    return (
        <header className="bg-black text-white p-4 flex justify-between items-center">
            <div className="flex-1 text-4xl font-bold" style={{flex: '2'}}>
                <Image
                    src="/images/Logo_Long_PNGWhite.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{width: '60%', height: 'auto'}} // optional
                    alt="Logo"
                />
            </div>
            <div className="text-lg" style={{flex: '1'}}>
                <QRCodeCanvas
                    text={fullUrl.replace('location', 'create')}
                />
            </div>
        </header>
    );
};

export default Header;
