import React from 'react';
import useWebSocket from '../hooks/useWebSocket';
import Message from "@/components/location/Message";

interface Vibe {
    id: number;
    message: string;
    date: string; // Use string since Date serialization can be in ISO format
}
const HomePage = () => {
    const messages = useWebSocket('localhost:8080/ws','/topic/vibes');
    console.log("Messages state in HomePage:", messages);

    return (
        <div>
            <h1>Vibes</h1>
                {messages.map((message: Vibe) => (
                    <Message key={message.date} message={message.message} />
                ))}

        </div>
    );
};

export default HomePage;
