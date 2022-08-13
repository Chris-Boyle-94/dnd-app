import {
    SET_CHARACTER_VALUES
} from './actions'

const initialState = {
    characterValues: {
        characterName: '',
        class: '',
        level: '',
        background: '',
        playerName: '',
        race: '',
        augment: '',
        exp: '',
    }
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_CHARACTER_VALUES:
            return {
                ...state,
                characterValues: action.payload
            }
        default:
            return state;
    }
}

export default reducer;