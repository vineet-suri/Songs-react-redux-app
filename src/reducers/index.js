import { combineReducers } from 'redux';


const songsReducer = () => {
    return [        
            { title:'song one', duration:'4:05'},
            { title:'song two', duration:'2:05'},
            { title:'song three', duration:'9:05'},
            { title:'song four', duration:'5:05'}
        ];    
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type=== 'SELECTED_SONG'){
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})