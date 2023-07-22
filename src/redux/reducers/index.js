import {GET_ALL_CHARACTERS, GET_ALL_EPISODES, GET_ONE_CHARACTER, GET_ONE_EPISODE, GET_BY_NAME, EPISODE_BY_NAME} from '../actions'
const initialState = {
  characters: [], 
  episodes: [],
  characterDetail: {},
  episodeDetails:{}
}

function rootReducer(state = initialState, action) {
    switch(action.type){
        case GET_ALL_CHARACTERS:
            return{
                ...state,
                characters: action.payload
            }
        case GET_ALL_EPISODES:
            return{
                ...state,
                episodes: action.payload
            }
            case GET_ONE_CHARACTER:
                return{
                    ...state,
                    characterDetail: action.payload
                }
            case GET_BY_NAME:
                return{
                    ...state,
                    characters: action.payload 
                }
            case GET_ONE_EPISODE:
                return{
                    ...state,
                    episodeDetails: action.payload
                }
            case EPISODE_BY_NAME:
                return{
                    ...state,
                    episodes: action.payload
                }
            default:
                return state
    }
}

  export default rootReducer;