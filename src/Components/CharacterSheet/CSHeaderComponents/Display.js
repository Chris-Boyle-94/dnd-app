const Display = ({ playerInfo, setShowEditor }) => {

    const handleShowEditor = (e) => {
        e.preventDefault()
        setShowEditor(true)
    }

    return (
        <div>
            <div>
                <p>Character Name: {playerInfo.characterName}</p>
            </div>
            <div>
                <p>Class: {playerInfo.class}</p>
                <p>Level: {playerInfo.level}</p>
                <p>Background: {playerInfo.background}</p>
                <p>Player Name: {playerInfo.playerName}</p>
                <p>Race: {playerInfo.race}</p>
                <p>Augment: {playerInfo.augment}</p>
                <p>Experience: {playerInfo.exp}</p>
            </div>
            <button onClick={handleShowEditor}>Edit</button>
        </div>
    )
}

export default Display