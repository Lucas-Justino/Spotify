import React, { useState } from 'react';
import { FaPlay } from "react-icons/fa";

interface CardProps {
    imageSrc: string;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="card w-40 m-4 flex flex-col gap-1 relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img className="rounded-lg" src={imageSrc} alt={title} />
            <p className="text-white font-semibold">{title}</p>
            <p className="text-sm">{description}</p>
            {hovered && (
                <div className="absolute inset-0 bg-white bg-opacity-5 text-white font-semibold flex justify-center items-center rounded-lg">
                    <button className='btn-circle bg-green-400 flex justify-center items-center'>
                        <FaPlay color='black' />
                    </button>
                </div>
            )}
        </div>
    );
}

export default Card;
