import React, { useState } from 'react';
import { useRouter } from 'next/router';
import AGB from "@/components/create/AGB";
import SmsValidation from "@/components/create/SmsValidation";
import FormInput from "@/components/create/FormInput";
import NumberInput from "@/components/create/NumberInput";
import TypeSelection from "@/components/create/TypeSelection";
import ImageUpload from "@/components/create/ImageUpload";

const Create: React.FC = () => {
    const [step, setStep] = useState(1);
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const router = useRouter();
    const {id} = router.query

    const nextStep = () => {
        if (step === 5) {
            // Redirect to a different page when the final step is reached
            router.push(`/location/${id}`); // Change '/success' to your target route
        } else {
            setStep(step + 1);
        }
    };

    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleTypeSelection = (type: string) => {
        setSelectedType(type);
        nextStep();
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-900 text-white relative">
            <button
                onClick={prevStep}
                className={`absolute top-4 left-4 bg-gray-700 text-white py-2 px-4 rounded ${
                    step === 1 ? 'hidden' : ''
                }`}
            >
                Zurück
            </button>
            <div className="flex-grow flex flex-col items-center justify-center">
                {step === 1 && <AGB onNext={nextStep}/>}
                {step === 2 && <NumberInput onNext={nextStep}/>}
                {step === 3 && <SmsValidation onNext={nextStep}/>}
                {step === 4 && <TypeSelection onNext={handleTypeSelection}/>}
                {step === 5 && selectedType === 'text' && <FormInput onNext={nextStep}/>}
                {step === 5 && selectedType === 'image' && <ImageUpload onNext={nextStep}/>}
            </div>
        </div>
    );
};

export default Create;
