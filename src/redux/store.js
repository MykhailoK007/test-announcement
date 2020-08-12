import AnnouncementReducer from "./announcement-reducer";
import {createStore} from "redux";


let store = createStore(AnnouncementReducer)

export default store