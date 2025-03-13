import React from 'react';

function SpreadOperation() {
    const names = ['Yashvanth', 'Anubha', 'Pearline'];
    const newNames = [...names, 'Deepak', 'Kalidoss'];

    return (
        <div>
            <h2>Simple Spread Operator Example</h2>
            <ul>
                {newNames.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
}

export default SpreadOperation;
