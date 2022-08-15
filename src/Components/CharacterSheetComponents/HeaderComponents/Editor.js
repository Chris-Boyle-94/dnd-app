import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateCharacterrValues } from '../../../redux-utils/actions'
// import axios from 'axios'

const Editor = ({ setShowEditor, updateCharacterrValues, characterValues }) => {
    const [editorCharacterValues, setEditorCharacterValues] = useState(characterValues)

    const handleChange = (e) => {
        e.preventDefault()
        setEditorCharacterValues(prevValues => {
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

    const handleSubmit = async (e) => {
        e.preventDefault()
        updateCharacterrValues(characterValues)
        setShowEditor(false)
    }

    return (
        <div className='CharacterSheet__header__editor'>
            <form id='header-form' className='CharacterSheet__header__form' onSubmit={handleSubmit}>
                <div>
                    Character Name:{' '}
                        <input
                            name='characterName'
                            value={editorCharacterValues.characterName}
                            onChange={handleChange}
                        />
                </div>
                <div>
                    <div>
                        Class:{' '}
                            <input
                                name='class'
                                value={editorCharacterValues.class}
                                onChange={handleChange}
                            />
                        Level:{' '}
                            <input
                                name='level'
                                value={editorCharacterValues.level}
                                onChange={handleChange}
                            />
                    </div>
                    Background:{' '}
                        <input
                            name='background'
                            value={editorCharacterValues.background}
                            onChange={handleChange}
                        />
                    Player Name:{' '}
                        <input
                            name='playerName'
                            value={editorCharacterValues.playerName}
                            onChange={handleChange}
                        />
                    Race:{' '}
                        <input
                            name='race'
                            value={editorCharacterValues.race}
                            onChange={handleChange}
                        />
                    Augment:{' '}
                        <input
                            name='augment'
                            value={editorCharacterValues.augment}
                            onChange={handleChange}
                        />
                    Experience:{' '}
                        <input
                            name='exp'
                            value={editorCharacterValues.exp}
                            onChange={handleChange}
                        />
                </div>
                <button type='submit' form='header-form'>Submit</button>
            </form>
            <button onClick={handleShowDisplay}>View Current Data</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        characterValues: state.characterValues
    }
}

export default connect(mapStateToProps, { updateCharacterrValues })(Editor)