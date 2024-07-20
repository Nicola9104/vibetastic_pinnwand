import React, { useEffect, useRef, useState } from 'react';

interface ColumnProps {
    content: React.ReactNode[];
    onHeightChange: (height: number) => void; // New prop to notify about height changes
}

const Column: React.FC<ColumnProps> = ({ content, onHeightChange }) => {
    const columnRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);
    const [isNewContentAdded, setIsNewContentAdded] = useState(false);
    const [delayedContent, setDelayedContent] = useState<React.ReactNode[]>([]);

    useEffect(() => {
        setDelayedContent(content);
        setIsNewContentAdded(true);

        const timer = setTimeout(() => {
            setIsNewContentAdded(false);
            setDelayedContent(content);
        }, 500); // Delay before adding new content

        return () => clearTimeout(timer);
    }, [content]);

    useEffect(() => {
        if (columnRef.current) {
            const columnHeight = columnRef.current.clientHeight;
            setHeight(columnHeight);
            onHeightChange(columnHeight); // Notify parent about the height change
        }
    }, [delayedContent, onHeightChange]);

    useEffect(() => {
        const handleResize = () => {
            if (columnRef.current) {
                setHeight(columnRef.current.clientHeight);
            }
        };

        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div
            ref={columnRef}
            className={`space-y-4 overflow-hidden transition-all duration-500 ease-out`}
            style={{ paddingTop: isNewContentAdded ? '40px' : '0', transition: 'padding-top 0.5s' }}
        >
            {delayedContent.map((item, index) => (
                <div key={index} className="transition-transform duration-500 ease-out">
                    {item}
                </div>
            ))}
        </div>
    );
};

export default Column;
