import React from 'react';
import Header from "@/components/location/Header";
import MasonryGrid from "@/components/location/MasonryGrid";
import Footer from "@/components/location/Footer";

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
