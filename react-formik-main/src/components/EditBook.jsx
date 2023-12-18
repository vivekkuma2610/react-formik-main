import React,{useState,useEffect} from 'react'
import { Button, TextField } from '@mui/material'
import { useNavigate ,useParams} from "react-router-dom"
import axios from 'axios'

import { API_book } from '../Global'


function EditBook() {
    const { bookid } = useParams(); 
   
    const [book, setBook] = useState(null)
 

    //fetching product details from fetch before editing to set in input fields
     useEffect(()=>{
       axios.get(`${API_book}/${bookid}`)
       .then((response)=>setBook(response.data))
      },[]) //call only once due to empty dependency
   
      console.log(book)

  return (
    book?  <EditBooksData book={book}/> : "Loading..."
   )
}

function EditBooksData({book}){
    console.log("Book data is " ,book)

    const navigate = useNavigate()

    const [title, setTitle] = useState(book.title)
     const [author, setAuthor] = useState(book.author)
     const [ISBN, setISBN] = useState(book.ISBN)
     const [publication_date, setPublicationDate] = useState(book.publication_date)


    
  

    return(
    <div className="add-book-form">
    <form >
                <TextField id="title" name ="title" label="Title" variant="standard" value={title}
                onChange={(event) => setTitle(event.target.value)}/>
                <br/>
                <br/>
                <TextField id="author" name ="author" label="Author" variant="standard" value={author}
                onChange={(event) => setAuthor(event.target.value)}/>
                <br/>
                <br/>
                <TextField  id="ISBN" name ="ISBN" label="ISBN" variant="standard" value={ISBN}
                onChange={(event) => setISBN(event.target.value)}/>
                <br/>
                <br/>
                <TextField id="publication_date" name ="publication_date" label="Publication Date" variant="standard" value={publication_date}
                onChange={(event) => setPublicationDate(event.target.value)}/>
                <br/>
                <br/>
                
    
    </form>
                {/* copy the productList and add newProduct to it */}
    
                <Button type ="submit" variant="contained" onClick={() => {
                    const updateBook = {
                        title: title,
                        author: author,
                        ISBN: ISBN,
                        publication_date: publication_date
                    }
 
                    axios.put(`${API_book}/${book.id}`,updateBook)
                    .then((updateBook)=>console.log(updateBook))
                    .then(()=>navigate("/books"))
                }
    
    
                }>Update Book</Button>
    
    
            </div>)
    
}

export default EditBook