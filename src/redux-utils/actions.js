export const SET_CHARACTER_VALUES = "SET_CHARACTER_VALUES";

export const updateCharacterrValues = (newValues) => {
    return { type: SET_CHARACTER_VALUES, payload: newValues }
}