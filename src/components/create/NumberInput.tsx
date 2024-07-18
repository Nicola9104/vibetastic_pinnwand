import React, { useState } from 'react';


const NumberInput: React.FC<{ onNext: () => void, }> = ({ onNext }) => {
    const [number, setNumber] = useState('');


    // @ts-ignore
    const handleChange = (e) => {
        setNumber(e.target.value);
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4">
            <div className="bg-white text-black p-6 rounded-lg shadow-md w-full max-w-md">

                <h1 className="text-xl font-bold text-center mb-4">Nummerneingabe</h1>
                <input
                    type="number"
                    value={number}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-4"
                    placeholder="Geben Sie Ihre Nummer ein"
                />
                <button
                    onClick={onNext}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full hover:bg-blue-700"
                >
                    Weiter
                </button>
            </div>
        </div>
    );
};

export default NumberInput;