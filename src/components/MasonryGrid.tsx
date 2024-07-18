'use client';

import React from 'react';
import Masonry from 'react-masonry-css';
import Message from './Message';
import ImageComponent from './ImageComponent';


const MasonryGrid: React.FC = () => {
    const breakpointColumnsObj = {
        default: 2,
        700: 1,
    };

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex -ml-4 w-auto"
            columnClassName="pl-4 bg-clip-padding"
        >
            <div>
                <Message text="Asdfhshj asvhjsvsj asjknccvhs!" isHighlighted />
            </div>
            <div>
                <Message text="Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.🎉" />
            </div>
            <div>
                <Message text="Asdfhshj asvhjsvsj asjknccvhs!😂" />
            </div>
            <div>
                <ImageComponent src="/images/party/image1.jpg" alt="Party Image 1" />
            </div>
            <div>
                <Message text="Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.🎉" />
            </div>
            <div>
                <Message text="Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." isHighlighted />
            </div>
            <div>
                <ImageComponent src="/images/party/image2.jpg" alt="Party Image 2" />
            </div>
            <div>
                <Message text="Asdfhshj asvhjsvsj asjknccvhs!😍" isHighlighted />
            </div>
            <div>
                <ImageComponent src="/images/party/image3.jpg" alt="Party Image 3" />
            </div>
        </Masonry>
    );
};

export default MasonryGrid;
