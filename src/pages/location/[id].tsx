import React from 'react';
import Header from "@/components/Header";
import MasonryGrid from "@/components/MasonryGrid";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-900 text-white">


            <Header />

            <main className="flex-1 p-4">
                <MasonryGrid />
            </main>

            <Footer />
        </div>
    );
};

export default Home;
