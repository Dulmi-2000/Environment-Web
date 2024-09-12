import React from 'react';
import './photoGallery.css'
import leader1 from '../../../Assets/leader1.png'; 
import PageIntro from '../../../Componenets/PageInto/PageIntro';

const images = [
    { src: leader1, alt: 'Image 1' },
    { src: leader1, alt: 'Image 2' },
    { src: leader1, alt: 'Image 3' },
    { src: leader1, alt: 'Image 4' },
    { src: leader1, alt: 'Image 5' },
];

function PhotoGallery() {
    return (
        <><PageIntro 
        title="Image Gallery" 
            description="Welcome to the Image Gallery of the Central Environmental Authority. 
            Here, you'll find a collection of images capturing our environmental projects, community 
            initiatives, and efforts in safeguarding Sri Lanka's
            natural resources. Browse through to witness our journey towards creating a greener, more sustainable future."
        />
        <div className="container photo-gallery">
            {images.map((image, index) => (
                <div className="photo" key={index}>
                    <img src={image.src} alt={image.alt} />
                </div>
            ))}
            </div>
            </>
    );
}

export default PhotoGallery;
