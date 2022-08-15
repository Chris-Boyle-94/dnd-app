import React from 'react';
import Attributes from "../Components/CharacterSheetComponents/StatsPanelComponents/Attributes";
import Proficiencies from "../Components/CharacterSheetComponents/StatsPanelComponents/Proficiencies";

const StatsPanelView = () => {
    return (
        <div className='StatsPanelView'>
            <Attributes />
            <Proficiencies />
        </div>
    )
}

export default StatsPanelView;