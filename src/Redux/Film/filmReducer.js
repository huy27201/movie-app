import  { SET_FILM } from './filmTypes'

const initialState = {
    id: '',
    type: 'movie'
}

const filmReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILM:
            return {
                ...state,
                id: '1',
                type: 'movie'
            }
        default:
            return state
    }
}

export default filmReducer