import React, { useState } from 'react';

const layoutOptions = [
    ['w-full'],
    ['w-1/2', 'w-1/2'],
    ['w-1/3', 'w-1/3', 'w-1/3'],
    ['w-1/4', 'w-1/4', 'w-1/4', 'w-1/4'],
    ['w-1/3', 'w-1/3', 'w-full'],
    ['w-1/4', 'w-1/4', 'w-1/4', 'w-full'],
    ['w-1/6', 'w-1/6', 'w-1/6', 'w-1/6', 'w-1/6', 'w-1/6'],
];

const LayoutSelector = ({ onSelect }) => {
    const [selected, setSelected] = useState(0);

    return (
        <div className="p-4">
            {layoutOptions.map((layout, index) => (
                <div
                    key={index}
                    className={`p-2 cursor-pointer ${selected === index ? 'bg-blue-500' : 'bg-gray-700'} mb-2`}
                    onClick={() => {
                        setSelected(index);
                        onSelect(layout);
                    }}
                >
                    <div className="flex">
                        {layout.map((col, colIndex) => (
                            <div key={colIndex} className={`h-8 ${col} bg-gray-300 m-1`}></div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LayoutSelector;
