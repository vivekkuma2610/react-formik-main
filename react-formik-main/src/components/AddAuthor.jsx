import React from 'react'
import { Button, TextField } from '@mui/material'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import {useFormik} from 'formik'
import * as yup from 'yup'
import { API_author } from '../Global'


const formValidationsSchema = yup.object({
    //custom error message for password and email fields
    name:yup.string()
    .min(1,"Need a longer name")
    .required("Name is mandatory"),

    dob:yup.string()
    .min(1,"Need a longer author")
    .required("poster is mandatory"),

    biography:yup.string()
    .min(1,"Invalid ISBN")
    .required("Rating is mandatory")

})

function AddAuthor() {

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues:{name:"", dob:"", biography:""},
        validationSchema: formValidationsSchema,

        onSubmit:(values)=>{
            console.log("On Submit",values)
        }
    })
  return (
    <div className="add-book-form">
    <form  onSubmit={formik.handleSubmit}>
                <TextField id="name" name ="name" label="Name" variant="standard" value={formik.values.name}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}/>
                {formik.touched.name&&formik.errors.name ? formik.errors.name:""}
                <br/>
                <br/>
                <TextField id="dob" name ="dob" label="DOB" variant="standard" value={formik.values.dob}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}/>
                    {formik.touched.dob&&formik.errors.dob ? formik.errors.dob:""}
                <br/>
                <br/>
                <TextField  id="biography" name ="biography" label="Biography" variant="standard" value={formik.values.biography}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}/>
                    {formik.touched.biography&&formik.errors.biography ? formik.errors.biography:""}
                <br/>
                <br/>
                
                
    
    </form>
                {/* copy the productList and add newProduct to it */}
    
                <Button type ="submit" variant="contained" onClick={() => {
                    const newAuthor = {
                        name: formik.values.name,
                        dob: formik.values.dob,
                        biography: formik.values.biography,
                    }
 
                    axios.post(`${API_author}`,newAuthor,{
                        headers:{
                            "Content-Type":"application/json",
                            Accept: "application/json"
                        }
                    })
                    .then((newAuthor)=>console.log(newAuthor))
                    .then(()=>navigate("/"))
                }
    
    
                }>Add Author</Button>
    
    
            </div>
  )
}

export default AddAuthor