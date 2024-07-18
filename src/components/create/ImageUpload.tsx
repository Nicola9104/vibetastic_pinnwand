import React, { useState } from 'react';

const FormInput: React.FC<{ onNext: () => void }> = ({ onNext }) => {
    const [message, setMessage] = useState('');

    // @ts-ignore
    const handleChange = (e) => {
        setMessage(e.target.value);
    };

    return (
        <div className="bg-gray-900 text-white p-8 rounded shadow-md max-w-lg w-full mx-auto">
      Bild hochladen
        </div>
    );
};

export default FormInput;
