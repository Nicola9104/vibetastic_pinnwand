import React from 'react';

interface MessageProps {
    text: string;
    isHighlighted?: boolean;
}

const Message: React.FC<MessageProps> = ({ text, isHighlighted = false }) => {
    return (
        <div className={`p-4 rounded-md mb-4 ${isHighlighted ? 'bg-blue-500 text-white' : 'bg-black text-white'}`}>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                {text}
            </p>
        </div>
    );
};

export default Message;
