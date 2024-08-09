import {useEffect, useRef, useState} from 'react';
import {Client} from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const useWebSocket = (url: string, topic: string) => {
    const [messages, setMessages] = useState([]);
    const clientRef = useRef(null);

    useEffect(() => {
        const client = new Client({
            brokerURL: `ws://${url}`, // Ensure this is correct
            webSocketFactory: () => new SockJS(`http://${url}`),
            connectHeaders: {},
            debug: (str) => console.log(str),
            reconnectDelay: 5000,
            heartbeatIncoming: 4000,
            heartbeatOutgoing: 4000,
        });

        client.onConnect = () => {
            console.log('Connected to WebSocket');
            client.subscribe(topic, (message) => {
                console.log('Received message:', message.body);
                const newMessage = JSON.parse(message.body);
                // @ts-ignore
                setMessages((prevMessages) => [...prevMessages, newMessage]);
            });
        };

        client.onStompError = (frame) => {
            console.error('STOMP Error:', frame);
        };

        client.activate();

        // @ts-ignore
        clientRef.current = client;

        return () => {
            if (clientRef.current) {
                // @ts-ignore
                clientRef.current.deactivate();
            }
        };
    }, [topic, url]);

    return messages;
};

export default useWebSocket;
