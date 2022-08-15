import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const Display = ({ setShowEditor }) => {
    const [characterValues, setCharacterValues] = useState({})

    const handleShowEditor = (e) => {
        e.preventDefault()
        setShowEditor(true)
    }

    useEffect(() => {
        axios.get('http://localhost:7000/character-sheet')
            .then(res => setCharacterValues(res.data[0]))
            .catch(err => console.log(err))
    }, [])


    return (
        <div>
            <div>
                <p>Character Name: {characterValues.characterName}</p>
            </div>
            <div>
                <p>Class: {characterValues.class}</p>
                <p>Level: {characterValues.level}</p>
                <p>Background: {characterValues.background}</p>
                <p>Player Name: {characterValues.playerName}</p>
                <p>Race: {characterValues.race}</p>
                <p>Augment: {characterValues.augment}</p>
                <p>Experience: {characterValues.exp}</p>
            </div>
            <button onClick={handleShowEditor}>Edit</button>
        </div>
    )
}

export default Display;