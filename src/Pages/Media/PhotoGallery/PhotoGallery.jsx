import React, { useEffect, useState } from 'react';
import './photoGallery.css';
import PageIntro from '../../../Componenets/PageInto/PageIntro';

function PhotoGallery() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch images from the API endpoint
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/media/images'); // Replace with your actual API endpoint
                if (!response.ok) {
                    throw new Error('Failed to fetch images');
                }
                const data = await response.json();
                
                // Assuming data is an array of image objects with a 'url' and 'alt' property
                setImages(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching images:', error);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // You can replace this with a loader/spinner if you like
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <PageIntro 
                title="Image Gallery" 
                description="Welcome to the Image Gallery of the Central Environmental Authority. 
                Here, you'll find a collection of images capturing our environmental projects, community 
                initiatives, and efforts in safeguarding Sri Lanka's natural resources. Browse through to 
                witness our journey towards creating a greener, more sustainable future."
            />
            <div className="container photo-gallery">
                {images.map((image, index) => (
                    <div className="photo" key={index}>
                        <img src={image.url} alt={image.alt || `Image ${index}`} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default PhotoGallery;
