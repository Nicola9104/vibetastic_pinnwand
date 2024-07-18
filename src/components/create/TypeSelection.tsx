import React, {useState} from 'react';

// Assuming you have icons for photo upload and text message
import {FaCloudUploadAlt, FaCommentDots} from 'react-icons/fa';

const TypeSelection: React.FC<{ onNext: (type: string) => void }> = ({ onNext }) => {
    const handleSelect = (type: string) => {
        onNext(type);
    };

    return (
        <div className="bg-gray-900 text-white p-8 rounded shadow-md max-w-lg w-full mx-auto my-8">
            <h1 className="text-3xl font-bold mb-8 text-center text-blue-500">Vibetastic by Ad&Events</h1>
            <div className="grid grid-cols-1 gap-8">
                <div onClick={ () => handleSelect('image')}
                    className="bg-white text-black p-6 rounded-lg flex items-center justify-center space-x-4 cursor-pointer hover:shadow-lg transition-shadow duration-300">
                    <FaCloudUploadAlt className="text-4xl"/>
                    <span className="text-xl font-semibold">Foto hochladen</span>
                </div>
                <div onClick={ () => handleSelect('text')}
                    className="bg-white text-black p-6 rounded-lg flex items-center justify-center space-x-4 cursor-pointer hover:shadow-lg transition-shadow duration-300">
                    <FaCommentDots className="text-4xl text-green-500"/>
                    <span className="text-xl font-semibold">Text verfassen</span>
                </div>
            </div>
        </div>
    );
};

export default TypeSelection;
