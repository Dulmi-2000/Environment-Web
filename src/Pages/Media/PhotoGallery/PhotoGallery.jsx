import React from 'react';
import './photoGallery.css'
import leader1 from '../../../Assets/leader1.png'; 

const images = [
    { src: leader1, alt: 'Image 1' },
    { src: leader1, alt: 'Image 2' },
    { src: leader1, alt: 'Image 3' },
    { src: leader1, alt: 'Image 4' },
    { src: leader1, alt: 'Image 5' },
];

function PhotoGallery() {
    return (
        <div className="container photo-gallery">
            {images.map((image, index) => (
                <div className="photo" key={index}>
                    <img src={image.src} alt={image.alt} />
                </div>
            ))}
        </div>
    );
}

export default PhotoGallery;
