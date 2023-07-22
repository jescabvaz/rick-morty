import './detailsStyle.css';
import React, { useEffect } from 'react'
import {  useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getOneCharacter } from '../../redux/actions';
import Container from '@mui/material/Container';


export default function CharacterDetails() {
    const dispatch = useDispatch();
    const characterDetail = useSelector(state=>state.characterDetail);
    const {id}=useParams();

    useEffect(()=>{
        dispatch(getOneCharacter(id))
    }, [id, dispatch])


  return (  
    <>
    <Container>
    <div className="container-detail">
        <div>
          <img src={characterDetail?.image} alt={characterDetail?.name} />
        </div>
        <div className='container-info'>
          <div className='info'>
            <label>Nombre: </label>
            <span>{characterDetail?.name}</span>
          </div>
          <div className='info'>
            <label>Status: </label>
            <span>{characterDetail?.status}</span>
          </div>
          <div className='info'>
            <label>Origin: </label>
            <span>{characterDetail?.origin?.name}</span>
          </div>
          <div className='info'>
            <label>Last known location: </label>
            <span>{characterDetail?.location?.name}</span>
          </div>
        </div>

            </div>
            </Container>
            
    </>
  )
}
