import { connect } from "react-redux"

const Display = ({ characterValues, setShowEditor }) => {

    const handleShowEditor = (e) => {
        e.preventDefault()
        setShowEditor(true)
    }

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

const mapStateToProps = (state) => {
    return {
        characterValues: state.characterValues
    }
}

export default connect(mapStateToProps)(Display)