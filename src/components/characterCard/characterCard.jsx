import './characterStyle.css';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../../redux/actions';
import SearchCharacter from './searchCharacter'
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';

export default function CharacterCard() {
    const dispatch = useDispatch();
    const characters = useSelector(state => state.characters)

    useEffect(()=>{
        dispatch(getCharacters())
    },[dispatch]);


  return (
    <>
<SearchCharacter/>
    <div>
      <Container>
        <h2 className='title'>Personajes</h2>
      <div className="container">
        { characters.results ? characters.results.map((char)=>(
            <div className='card'>
            <Link 
            to={`/character/${char.id}`}
            key={char.id}  
            style={{textDecoration: 'none', color: 'black'}}   
            >
            <div className='character-name'>
              <h3>{char.name}</h3>
            </div>
            <div>
              <Avatar src={char.image} alt={char.name} sx={{ width: 200, height: 200 }} />
            </div>
            </Link>
            
            </div>
        )) : <h2>no encontrado</h2> }
        </div>
        </Container>
        </div>
        </>
  )
}
