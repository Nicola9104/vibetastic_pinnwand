import React, { useState } from 'react';

const FormInput: React.FC<{ onNext: () => void }> = ({ onNext }) => {
    const [message, setMessage] = useState('');

    // @ts-ignore
    const handleChange = (e) => {
        setMessage(e.target.value);
    };

    return (
        <div className="bg-gray-900 text-white p-8 rounded  max-w-lg w-full mx-auto">
            <div className="text-center mb-4">
                <img src="/path-to-logo/vibetastic-logo.png" alt="Vibetastic Logo" className="mx-auto mb-2" />
                <span className="block text-sm">by Ad&Events</span>
            </div>
            <textarea
                name="message"
                value={message}
                onChange={handleChange}
                className="w-full p-4 border rounded mb-4 text-gray-900"
                placeholder="Deine Nachricht..."
                rows={5}
            />
            <button onClick={onNext} className="bg-ad-and-events-blue text-white p-2 rounded w-full">Senden</button>
        </div>
    );
};

export default FormInput;
