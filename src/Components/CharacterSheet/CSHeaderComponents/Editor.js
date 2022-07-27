import { useState } from 'react'

const Editor = ({ setShowEditor, setPlayerInfo }) => {
    const [characterValues, setCharacterValues] = useState({
        characterName: '',
        class: '',
        level: '',
        background: '',
        playerName: '',
        race: '',
        augment: '',
        exp: '',
    })

    const handleChange = (e) => {
        e.preventDefault()
        setCharacterValues(prevValues => {
            return {
                ...prevValues,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleShowDisplay = (e) => {
        e.preventDefault()
        setShowEditor(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setPlayerInfo(characterValues)
        setShowEditor(false)
    }

    return (
        <div className='CharacterSheet__header__editor'>
            <form id='header-form' className='CharacterSheet__header__form' onSubmit={handleSubmit}>
                <div>
                    Character Name:{' '}
                        <input
                            name='characterName'
                            value={characterValues.characterName}
                            onChange={handleChange}
                        />
                </div>
                <div>
                    <div>
                        Class:{' '}
                            <input
                                name='class'
                                value={characterValues.class}
                                onChange={handleChange}
                            />
                        Level:{' '}
                            <input
                                name='level'
                                value={characterValues.level}
                                onChange={handleChange}
                            />
                    </div>
                    Background:{' '}
                        <input
                            name='background'
                            value={characterValues.background}
                            onChange={handleChange}
                        />
                    Player Name:{' '}
                        <input
                            name='playerName'
                            value={characterValues.playerName}
                            onChange={handleChange}
                        />
                    Race:{' '}
                        <input
                            name='race'
                            value={characterValues.race}
                            onChange={handleChange}
                        />
                    Augment:{' '}
                        <input
                            name='augment'
                            value={characterValues.augment}
                            onChange={handleChange}
                        />
                    Experience:{' '}
                        <input
                            name='exp'
                            value={characterValues.exp}
                            onChange={handleChange}
                        />
                </div>
                <button type='submit' form='header-form'>Submit</button>
            </form>
            <button onClick={handleShowDisplay}>View Current Data</button>
        </div>
    )
}

export default Editor