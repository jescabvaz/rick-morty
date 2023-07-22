import './detailsStyle.css';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getOneEpisode } from '../../redux/actions';
import Container from '@mui/material/Container';

function EpisodeDetails() {
    const dispatch = useDispatch();
    const episode = useSelector(state=> state.episodeDetails);
    const {id} = useParams();

    useEffect(()=>{
        dispatch(getOneEpisode(id))
    }, [id, dispatch])

  return (
    <>
    <Container>
      <div className='details-title'>
        <h2>{episode?.name}</h2>
      </div>
      <div className="episode-container-info">
      <div className='info'>
        <label>Fecha al aire:</label>
        <span>{episode.air_date}</span>
       </div>
      <div className='info'>
        <label>Episodio:</label>
        <span>{episode.episode}</span>
      </div>
      </div>
    </Container>
    </>
    
  )
}

export default EpisodeDetails