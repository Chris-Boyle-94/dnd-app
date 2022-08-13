import { useState } from 'react'
import Display from './CSHeaderComponents/Display'
import Editor from './CSHeaderComponents/Editor'

const CharacterSheetHeader = () => {
    const [showEditor, setShowEditor] = useState(false)
    const [playerInfo, setPlayerInfo] = useState({})

    return (
        <div>
            {
                showEditor ? (
                    <Editor setPlayerInfo={setPlayerInfo} setShowEditor={setShowEditor}/>
                ) : (
                    <Display playerInfo={playerInfo} setShowEditor={setShowEditor}/>
                )
            }
        </div>
    )
}

export default CharacterSheetHeader