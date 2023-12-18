import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import axios from 'axios';
import { API_author } from '../Global';
import CardAuthor from './CardAuthor';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

function Authors() {
    const [authors,setAuthors] = useState([])

  const  getAuthor=()=>{
        axios.get(`${API_author}`)
        .then((response)=>setAuthors(response.data))
    }

    useEffect(()=>getAuthor(),[])

console.log("Author list is ", authors)
const navigate = useNavigate();

const handleDelete =(id)=>{
  console.log("delete ID is ",id)
  axios.delete(`${API_author}/${id}`)
  .then(()=>getAuthor())
}

  return (
    <Box sx={{ minWidth: 275 }}>

        {authors.map((author,index)=>(
          <CardAuthor author={author} key= {index} deleteButton={
            <IconButton color='error' onClick={()=>handleDelete(author.id)}>
             <DeleteIcon/>
             </IconButton>
         } 
             
         editButton={
           <IconButton color='secondary' onClick={()=>navigate(`/authors/edit/${author.id}`)}>
            <EditIcon/>
            </IconButton>
        } 
        />
        ))}  
   
  </Box>
  )
}

export default Authors