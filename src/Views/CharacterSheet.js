import CharacterSheetBody from "../Components/CharacterSheet/CharacterSheetBody"
import CharacterSheetHeader from "../Components/CharacterSheet/CharacterSheetHeader"

const CharacterSheet = () => {
   return (
    <div className='CharacterSheet'>
        <CharacterSheetHeader />
        <CharacterSheetBody />
    </div>
   )
}

export default CharacterSheet