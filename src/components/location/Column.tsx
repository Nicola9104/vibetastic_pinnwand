import React, { useEffect, useRef, useState } from 'react';

interface ColumnProps {
    content: React.ReactNode[];
    onHeightChange: (height: number) => void; // New prop to notify about height changes
}

const Column: React.FC<ColumnProps> = ({ content, onHeightChange }) => {
    const columnRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {

        if (columnRef.current) {
            const columnHeight = columnRef.current.clientHeight;
            setHeight(columnHeight);
            onHeightChange(columnHeight); // Notify parent about the height change

        }
    }, [content, onHeightChange]);
    useEffect(() => {
        const handleResize = () => {
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div ref={columnRef} className="space-y-4 overflow-hidden">
            {content.map((item, index) => (
                <div key={index} className="transition-transform duration-500 ease-out">
                    {item}
                </div>
            ))}
        </div>
    );
};

export default Column;
