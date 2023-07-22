import './episodeStyle.css';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import { getEpisodes } from '../../redux/actions';
import SearchEpisode  from './searchEpisode';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

export default function EpisodeCard() {

    const dispatch = useDispatch()
    const episodes = useSelector(state => state.episodes);

    useEffect(()=>{
        dispatch(getEpisodes())
    },[dispatch]);

  return (
    <>
    <Container>
    <SearchEpisode/>
    <h1 className='title'>Episodios</h1>
    <div className='episode-container'>
    {
      episodes.results ? episodes.results.map((episode)=>(
        <div className='episode-button'>
        <Button variant="outlined">
        <Link
        to={`/episode/${episode.id}`}
        style={{textDecoration: 'none', color: 'black'}}
        >
        <div>
          <h3>{episode.name}</h3>
        </div>
        </Link>
        </Button>
        </div>

      )): <h3>Episodio no encontrado</h3>
    }
    </div>
    </Container>
    </>
  )
}

