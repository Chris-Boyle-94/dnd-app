import React from 'react';
import CharacterSheetHeader from "../Components/CharacterSheetComponents/HeaderComponents/CharacterSheetHeader";
import StatsPanelView from './StatsPanelView';

const CharacterSheet = () => {
   return (
    <div className='CharacterSheet'>
        <CharacterSheetHeader />
        <StatsPanelView />
    </div>
   )
}

export default CharacterSheet