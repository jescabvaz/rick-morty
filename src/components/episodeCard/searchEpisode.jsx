import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {episodeByName} from '../../redux/actions'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function SearchEpisode() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    useEffect(()=>{
        dispatch(episodeByName(name))
    }, [name, dispatch])

    const handleChange = (e) => {
        e.preventDefault();
        let name = e.target.value;
        setName(name)
    }


  return (
    <>
    <Container>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label="Buscar" variant="filled" type="text" placeholder="Buscar" value={name} onChange={(e)=> handleChange(e)}
       />
    </Box>
    </Container>
    </>
  )
}

export default SearchEpisode