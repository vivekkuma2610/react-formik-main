import React from 'react'
import { Button, TextField } from '@mui/material'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import {useFormik} from 'formik'
import * as yup from 'yup'
import { API_book } from '../Global'


const formValidationsSchema = yup.object({
    //custom error message for password and email fields
    title:yup.string()
    .min(1,"Need a longer name")
    .required("Name is mandatory"),

    author:yup.string()
    .min(1,"Need a longer author")
    .required("poster is mandatory"),

    ISBN:yup.string()
    .min(1,"Invalid ISBN")
    .required("Rating is mandatory"),

    publication_date:yup.string()
    .min(1,"Invalid publication date")
    .required("Price is mandatory")
})

function AddBook() {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues:{title:"", author:"", ISBN:"",publication_date:""},
        validationSchema: formValidationsSchema,

        onSubmit:(values)=>{
            console.log("On Submit",values)
        }
    })

  return (
    <div className="add-book-form">
    <form  onSubmit={formik.handleSubmit}>
                <TextField id="title" name ="title" label="Title" variant="standard" value={formik.values.title}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}/>
                {formik.touched.title&&formik.errors.title ? formik.errors.title:""}
                <br/>
                <br/>
                <TextField id="author" name ="author" label="Author" variant="standard" value={formik.values.author}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}/>
                    {formik.touched.author&&formik.errors.author ? formik.errors.author:""}
                <br/>
                <br/>
                <TextField  id="ISBN" name ="ISBN" label="ISBN" variant="standard" value={formik.values.ISBN}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}/>
                    {formik.touched.ISBN&&formik.errors.ISBN ? formik.errors.ISBN:""}
                <br/>
                <br/>
                <TextField id="publication_date" name ="publication_date" label="Publication Date" variant="standard" value={formik.values.publication_date}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}/>
                     {formik.touched.publication_date&&formik.errors.publication_date ? formik.errors.publication_date:""}
                <br/>
                <br/>
                
    
    </form>
                {/* copy the productList and add newProduct to it */}
    
                <Button type ="submit" variant="contained" onClick={() => {
                    const newBook = {
                        title: formik.values.title,
                        author: formik.values.author,
                        ISBN: formik.values.ISBN,
                        publication_date: formik.values.publication_date,
                    }
 
                    axios.post(`${API_book}`,newBook,{
                        headers:{
                            "Content-Type":"application/json",
                            Accept: "application/json"
                        }
                    })
                    .then((newBook)=>console.log(newBook))
                    .then(()=>navigate("/"))
                }
    
    
                }>Add Book</Button>
    
    
            </div>
  )
}

export default AddBook