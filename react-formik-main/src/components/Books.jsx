import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import axios from 'axios';
import { API_book } from '../Global';
import CardBook from './CardBook';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';




function Books() {

    const [books,setBooks] = useState([])

    const getBooks =()=>{ 
        axios.get(`${API_book}`)
        .then((response)=>setBooks(response.data))
    }

    useEffect(()=>getBooks(),[])
      
      const handleDelete =(id)=>{
      console.log("delete ID is ",id)
      axios.delete(`${API_book}/${id}`)
      .then(()=>getBooks())
    }

const navigate = useNavigate();
console.log("Books list is ", books)
  return (
    <Box sx={{ minWidth: 275 }}>

        {books.map((book,index)=>(
          <CardBook book={book} key= {index} deleteButton={
            <IconButton color='error' onClick={()=>handleDelete(book.id)}>
             <DeleteIcon/>
             </IconButton>
         } 
             
         editButton={
           <IconButton color='secondary' onClick={()=>navigate(`/books/edit/${book.id}`)}>
            <EditIcon/>
            </IconButton>
        } 
        />
        ))}  
   
  </Box>
  )
}
export default Books