const ADD_ANNOUNCEMENT ='ADD_ANNOUNCEMENT';
const CHANGE_ANNOUNCEMENT = 'CHANGE_ANNOUNCEMENT';
const SEARCH_LISTENER = 'SEARCH_LISTENER';
const SHOW_SEARCH_ANNOUNCEMENT = 'SHOW_SEARCH_ANNOUNCEMENT';
const SET_CURRENT_ANNOUNCEMENT = 'SET_CURRENT_ANNOUNCEMENT';
const DELETE_ANNOUNCEMENT = 'DELETE_ANNOUNCEMENT';
const EDIT_ANNOUNCEMENT = 'EDIT_ANNOUNCEMENT';
const initialState ={
    announcement:[],
    currentAnnouncement:{
        id:0,
        title:'',
        description:'',
    },
    currentSearch:'',
    searchAnnouncement:[]


}
let id = 1;
const AnnouncementReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_ANNOUNCEMENT:

            return {
                ...state,
                announcement: [...state.announcement, {...state.currentAnnouncement,id:id++,date:new Date()}],
                currentAnnouncement: {}
            }
        case CHANGE_ANNOUNCEMENT:

            return {
                ...state,
                currentAnnouncement:{
                    ...state.currentAnnouncement,
                    title:action.flag?action.data:state.currentAnnouncement.title,
                    description:action.flag?state.currentAnnouncement.description:action.data
                }
            }


        case SEARCH_LISTENER:

            return {
                ...state,
                currentSearch:action.currentSearch
            }
        case SHOW_SEARCH_ANNOUNCEMENT:

            return {
                ...state,
                searchAnnouncement:[...state.announcement.map(announcement => {
                 return   (announcement.title.includes(state.currentSearch))
                     ?{...announcement}
                     :announcement.description.includes(state.currentSearch)?{...announcement}:false
                })]
            }
        case SET_CURRENT_ANNOUNCEMENT:

            state.announcement.map(announcement => {
                if(announcement.id === action.id){
                    state.currentAnnouncement.id = announcement.id;
                    state.currentAnnouncement.title = announcement.title;
                    state.currentAnnouncement.description = announcement.description
                }
            })
            return state

        case DELETE_ANNOUNCEMENT:

            return {
                ...state,
                announcement: [...state.announcement.filter((announcement) => announcement.id!=action.id)]
            }
        case EDIT_ANNOUNCEMENT:

            state.announcement.map(announcement => {
                if(announcement.id === state.currentAnnouncement.id){
                    announcement.title = state.currentAnnouncement.title;
                    announcement.description = state.currentAnnouncement.description;
                }
            })
            return state

        default:
            return state
    }
}


export const addAnnouncement = () => {
    return {
        type:ADD_ANNOUNCEMENT,


    }
}
export const changeAnnouncement = (flag,data) => {
    return{
        type:CHANGE_ANNOUNCEMENT,
        flag,
        data
    }
}
export const searchListener = (currentSearch) => {
    return{
        type:SEARCH_LISTENER,
        currentSearch
    }
}
export  const showSearchAnnouncement = () => {
    return {
        type:SHOW_SEARCH_ANNOUNCEMENT
    }
}

export const setCurrentAnnouncement = (id) => {
    return {
        type: SET_CURRENT_ANNOUNCEMENT,
        id
    }

}
export const deleteAnnouncement = (id) => {

    return {
        type:DELETE_ANNOUNCEMENT,
        id
    }

}
export  const editAnnouncement = id => {
    return {
        type:EDIT_ANNOUNCEMENT,
        id
    }
}
export default AnnouncementReducer;