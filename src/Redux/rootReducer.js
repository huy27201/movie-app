import { combineReducers } from "redux"
import filmReducer from "./Film/filmReducer"

const rootReducer = combineReducers({
    film: filmReducer
})

export default rootReducer