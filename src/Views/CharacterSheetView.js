import CharacterSheetHeader from "../Components/CharacterSheet/CharacterSheetHeader";
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