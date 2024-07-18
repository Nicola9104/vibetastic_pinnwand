import React from 'react';
import Image from 'next/image';
interface ImageComponentProps {
    src: string;
    alt: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt }) => {
    return (
        <div className="py-4">
            <Image
                src={src}
                alt={alt}
                className="rounded-md"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }} // optional
            />
        </div>
    );
};

export default ImageComponent;
