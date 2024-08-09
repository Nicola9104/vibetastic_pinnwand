import React, {useState} from 'react';


const AGB:  React.FC<{ onNext: () => void, }> = ({ onNext }) => {
    const  [agbClicked, toggleClicked] = useState(false)
    const toggleAgb = () => {
        toggleClicked(!agbClicked);
    }
    const toggleNext= ()=>{
        if(agbClicked){
            onNext();
        }
    }
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4">
            <div className="bg-white text-black p-6 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-xl font-bold text-center mb-4">VIBETASTIC by Ad&Events</h1>
                <h2 className="text-lg font-bold text-blue-500 text-center mb-4">BEVOR DU STARTEST:</h2>
                <p className="mb-4">
                    Mobbing und Belästigung sind auf unserer Plattform verboten. Verstösse werden nicht toleriert und können rechtliche Schritte nach sich ziehen. Bitte melde Vorfälle umgehend an unser Support-Team.
                </p>
                <p className="text-blue-500 text-center mb-4">079 963 62 20</p>
                <div className="flex items-center justify-center mb-4">
                    <input type="checkbox" id="terms" className="mr-2" onClick={toggleAgb}/>
                    <label htmlFor="terms" className="text-sm">Ich habe die Nutzungsbestimmungen gelesen und akzeptiert.</label>
                </div>
                <button
                    onClick={toggleNext}
                    className="bg-ad-and-events-blue text-white font-bold py-2 px-4 rounded w-full hover:bg-blue-700"
                >
                    Jetzt Viben!
                </button>
            </div>
        </div>
    );
};

export default AGB;
