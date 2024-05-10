import { useState } from 'react';


export default function NewsCard({ image, title, description, created_at }) {

    const [isExpanded,setIsExpanded] = useState(false);

    const handleExpandClick = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-center items-center">
            <div className="h-[200px] w-[250px] overflow-hidden ms-8 mt-4">
                <img src={image} alt="image" />
            </div>

            <div className=" ms-8">
                <h1 className="font-bold text-xl text-cyan-800">{title}</h1>
                <span>{created_at}</span>
                <p className={`text-sm ${isExpanded ? '' : 'line-clamp-3'}`}>{description}</p>
                <button onClick={handleExpandClick} className="text-cyan-800">{isExpanded ? 'See Less' : 'See More'}</button>
            </div>
        </div>
    )
}
