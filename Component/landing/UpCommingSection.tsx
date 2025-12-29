import React from 'react'
import { useState } from 'react';
import Caroulse from "@/Component/caroulse"
import laptopImage from "@/public/image/thirdSecitionImage.png"


const cards = [
    {
        id: 1,
        title: "Analytics AI",
        desc: "Real-time insights",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },
    {
        id: 2,
        title: "Neural Map",
        desc: "Brain-like networks",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
    },
    {
        id: 3,
        title: "Core System",
        desc: "Central processing",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
        id: 4,
        title: "Security",
        desc: "Threat detection",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    },
    {
        id: 5,
        title: "Biometrics",
        desc: "Identity recognition",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
    },
];

function UpCommingSection() {
    const [active, setActive] = useState(2);

    const prev = () => {
        setActive((prev) => (prev - 1 + cards.length) % cards.length);
    };

    const next = () => {
        setActive((prev) => (prev + 1) % cards.length);
    };
    return (
        <><div className="flex max-w-7xl mx-auto items-center px-4 sm:px-8 lg:px-16 py-8 sm:py-12">
            <div className="w-full max-w-7xl mx-auto rounded-2xl">

                {/* Content */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                    Up Coming Project...
                </h2>

            </div>
        </div>

            <Caroulse />



        </>


    )
}

export default UpCommingSection