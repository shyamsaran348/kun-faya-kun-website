import React from 'react';

const TypesAvailable = ({ types }) => {
    if (!types || types.length === 0) return null;

    return (
        <div className="types-available-section">
            <h4>Types Available:</h4>
            <ul>
                {types.map((type, index) => (
                    <li key={index}>
                        <strong>• {type.label}:</strong> {type.values.join(', ')}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TypesAvailable;
