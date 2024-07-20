import React, {useEffect, useRef, useState} from 'react';
import Header from "@/components/location/Header";
import Footer from "@/components/location/Footer";
import Column from "@/components/location/Column";
import Message from "@/components/location/Message";
import ImageComponent from "@/components/location/ImageComponent";

const Home: React.FC = () => {
    const initialContent = [
        <Message key="1" text="Asdfhshj asvhjsvsj asjknccvhs!" isHighlighted/>,
        <Message key="2"
                 text="Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.🎉"/>,
        <Message key="3" text="Asdfhshj asvhjsvsj asjknccvhs!😂"/>,
        <ImageComponent key="4" src="/images/party/image1.jpg" alt="Party Image 1"/>,
        <Message key="5"
                 text="Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.🎉"/>,
        <Message key="6"
                 text="Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
                 isHighlighted/>,
        <ImageComponent key="7" src="/images/party/image2.jpg" alt="Party Image 2"/>,
        <Message key="8" text="Asdfhshj asvhjsvsj asjknccvhs!😍" isHighlighted/>,
        <ImageComponent key="9" src="/images/party/image3.jpg" alt="Party Image 3"/>
    ];

    const [content, setContent] = useState<React.ReactNode[]>(initialContent);
    const [column1Content, setColumn1Content] = useState<React.ReactNode[]>([]);
    const [column2Content, setColumn2Content] = useState<React.ReactNode[]>([]);
    const [column1Height, setColumn1Height] = useState(0);
    const [column2Height, setColumn2Height] = useState(0);
    const column1Ref = useRef<HTMLDivElement>(null);
    const column2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        distributeInitialContent(initialContent);
    }, []);

    const distributeInitialContent = (content: React.ReactNode[]) => {
        const newColumn1Content: React.ReactNode[] = [];
        const newColumn2Content: React.ReactNode[] = [];
        let col1Height = 0;
        let col2Height = 0;

        content.forEach((item) => {
            if (col1Height <= col2Height) {
                newColumn1Content.push(item);
                col1Height += 1; // Temporarily increment to balance distribution
            } else {
                newColumn2Content.push(item);
                col2Height += 1; // Temporarily increment to balance distribution
            }
        });

        setColumn1Content(newColumn1Content);
        setColumn2Content(newColumn2Content);
    };

    const distributeContent = (newContent: React.ReactNode) => {
        let col1Height = column1Height;
        let col2Height = column2Height;

        if (col1Height <= col2Height) {
            setColumn1Content((prevContent) => {
                return [newContent, ...prevContent];
            });
            col1Height += 1; // Adjust height for simplicity
        } else {
            setColumn2Content((prevContent) => {
                const updatedContent = [newContent, ...prevContent];
                if (column2Ref.current && column2Ref.current.scrollHeight > column2Ref.current.clientHeight) {
                    updatedContent.pop();
                }
                return updatedContent;
            });
            col2Height += 1; // Adjust height for simplicity
        }

        setColumn1Height(col1Height);
        setColumn2Height(col2Height);
    };

    const addNewVibe = () => {
        const newText = `New vibe added at ${Date.now()}`
        const highlighted = content.length % 3 == 0;

        const newContent = <Message key={Date.now()} text={newText} isHighlighted={highlighted}/>;

        setContent((prevContent) => [newContent, ...prevContent]);
        if (content.length > 30) {
            setContent(content.slice(-30, content.length));
        }
        distributeContent(newContent);
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-900 text-white">
            <Header/>
            <button
                onClick={addNewVibe}
                className="mb-4 p-2 bg-blue-500 text-white rounded"
            >
                Add New Vibe
            </button>
            <main className="flex-1 p-4 flex overflow-hidden">
                <div className="flex flex-1 gap-4">
                    <div ref={column1Ref} className="flex-1 overflow-hidden">
                        <Column content={column1Content} onHeightChange={setColumn1Height}/>
                    </div>
                    <div ref={column2Ref} className="flex-1 overflow-hidden">
                        <Column content={column2Content} onHeightChange={setColumn2Height}/>
                    </div>
                </div>
            </main>
            <div className="sticky bottom-0">
                <Footer/></div>
        </div>
    );
};

export default Home;
