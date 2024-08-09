import React from 'react';

interface MessageProps {
    message: string;
    isHighlighted?: boolean;
}

const Message: React.FC<MessageProps> = ({ message, isHighlighted = false }) => {
    return (
        <div className={`p-4 rounded-md mb-4 ${isHighlighted ? 'bg-ad-and-events-blue text-white' : 'bg-black text-white'}`}>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                {message}
            </p>
        </div>
    );
};

export default Message;
