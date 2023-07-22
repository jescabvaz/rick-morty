import axios from "axios";

export const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS';
export const GET_ALL_EPISODES = 'GET_ALL_EPISODES';
export const GET_ONE_CHARACTER = 'GET_ONE_CHARACTER';
export const GET_ONE_EPISODE = 'GET_ONE_EPISODE';
export const GET_BY_NAME = 'GET_BY_NAME';
export const EPISODE_BY_NAME = 'EPISODE_BY_NAME';




const API = "https://rickandmortyapi.com/api"

export const getCharacters = () => {
    return async (dispatch) =>{
        const characters = await axios.get(`${API}/character`)
        dispatch({type: GET_ALL_CHARACTERS, payload: characters.data})
    }
}

export const getEpisodes = () => {
    return async (dispatch) =>{
        const episodes = await axios.get(`${API}/episode`)
        dispatch({type: GET_ALL_EPISODES, payload: episodes.data})
    }
}

export const getOneCharacter = (id) => {
    return async (dispatch) => {
        const detail = await axios.get(`${API}/character/${id}`)
        dispatch({type: GET_ONE_CHARACTER, payload: detail.data})
    }
}

export const getOneEpisode = (id) => {
    return async (dispatch) => {
        const detail = await axios.get(`${API}/episode/${id}`)
        dispatch({type: GET_ONE_EPISODE, payload: detail.data})
    }
}

export const getByName = (name) => {
    return async (dispatch) => {
        try{
            const detail = await axios.get(`${API}/character/?name=${name}`)
            dispatch({type: GET_BY_NAME, payload: detail.data})
        } catch(err){
            dispatch({type: GET_BY_NAME, payload: 'error'})
        }
    }
}


export const episodeByName = (name) => {
    return async (dispatch) => {
        try{
            const detail = await axios.get(`${API}/episode/?name=${name}`)
            dispatch({type: EPISODE_BY_NAME, payload: detail.data})
        } catch(err){
            dispatch({type: EPISODE_BY_NAME, payload: 'error'})
        }
    }
}




