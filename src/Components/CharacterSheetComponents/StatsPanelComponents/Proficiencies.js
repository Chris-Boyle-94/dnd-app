import React from 'react';
import SavingThrowAndSkills from "./SavingThrowAndSkills";

const attributeLabels = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma']
const skillLabels = ['Acrobatics (Dex)', 'Animal Handling (Wis)', 'Arcana (Int)', 'Athletics (Str)',
                    'Deception (Cha)', 'History (Int)', 'Insight (Wis)', 'Intimidation (Cha)',
                    'Investigation (Int)', 'Medicine (Wis)', 'Nature (Int)', 'Perception (Wis)',
                    'Performance (Cha)', 'Persuasion(Cha)', 'Religion (Int)', 'Sleight of Hand (Dex)',
                    'Stealth (Dex)', 'Survival (Wis)']

const Proficiencies = () => {
    return (
        <div className='Proficiencies'>
            <div className='Proficiencies__inspiration'>
                <p></p>
                <p>Inspiration</p>
            </div>
            <div className='Proficiencies__bonus'>
                <p></p>
                <p>Proficiency Bonus</p>
            </div>
            <div className='Proficiencies__savesPanel' style={{ margin: '1rem' }}>
                {attributeLabels.map(attr => {
                    return (
                        <SavingThrowAndSkills label={attr} key={attr}/>
                    )
                })}
            </div>
            <div className='Proficiencies__skillsPanel' style={{ margin: '1rem' }}>
                {skillLabels.map(skill => {
                    return (
                        <SavingThrowAndSkills label={skill} key={skill}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Proficiencies;