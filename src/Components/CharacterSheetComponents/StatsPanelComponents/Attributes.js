import React from 'react';

const Attributes = () => {

    const attributeLabels = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma']

    return (
        <div className='Attributes'>
            {attributeLabels.map(attr => {
                return (
                    <div className='Attributes__stat' key={attr}>
                        <h3>{attr.toUpperCase()}</h3>
                        <p className='Attributes__stat__mod'>Modifier: </p>
                        <p className='Attributes__stat__val'>Value: </p>
                    </div>
                )
            })}
        </div>
    )
}

export default Attributes;