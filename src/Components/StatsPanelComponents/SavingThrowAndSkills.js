import React from 'react';

const SavingThrow = ({ label }) => {
    return (
        <div style={{ margin: '.5rem' }}>
            <p>Proficient:</p>
            <p>Modifier:</p>
            <p>{label}</p>
        </div>
    )
}

export default SavingThrow;