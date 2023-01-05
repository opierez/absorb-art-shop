import React, { useEffect } from 'react'
import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

function EditArtSubmission({ onUpdateArt }) {

    const options = ["", "Photography", "Illustration", "Print", "Fashion", "Painting", "Drawing", "Sculpture", "Mixed Media", "Digital Art"]
    const blankForm = {
        inCart: false,
        artist: "",
        image: "",
        title: "",
        product: "",
        price: "",
        description: "",
        firstDimension: "",
        secondDimension: "",
        unit: "",
        mediums: "",
        userUploaded: true
    };  

    const [formData, setFormData] = useState(blankForm)
    const [addDimensions, setAddDimensions] = useState(false)

    const history = useHistory();
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:6001/artwork/${id}`)
            .then(resp => resp.json())
            .then(art => setFormData(art))
    },[id])

    function handleOnChange(e){
        const { name, value } = e.target;
        setFormData({...formData, [name]: value });
    }

    function handleImageChange(e){
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    }

    function handleSubmit(e) {
        e.preventDefault()

        const newArtwork = {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        }

        fetch(`http://localhost:6001/artwork/${id}`, newArtwork)
            .then(resp => resp.json())
            .then(editedArt => {
                onUpdateArt(editedArt)
                history.push('/artwork/gallery')
            })
    }
    function handleDeleteArt(id){
    
    fetch(`http://localhost:6001/artwork/${id}`, {
      method: "DELETE", 
    })
            .then(editedArt => {
              console.log(editedArt)
                // onUpdateArt(editedArt)
                // history.push('/artwork/gallery')
            })
    console.log(id)
  }


    return (
        <div>
            <div className='art-form'>
                <form className="form" autoComplete="off" onSubmit={handleSubmit}>
                    <h1>Edit Art Submission</h1>

                    <label>Title:</label>
                    <input 
                        type="text" 
                        id="title" 
                        name='title' 
                        value={formData.title} 
                        onChange={handleOnChange} 
                        placeholder="ex: Mona Lisa"
                    />

                    <label>Artist:</label>
                    <input 
                        type="text" 
                        id="artist" 
                        name="artist" 
                        value={formData.artist} 
                        onChange={handleOnChange} 
                        placeholder="ex: Leonardo da Vinci"
                    />

                    <label>Image:</label>
                    <input 
                        type="text" 
                        id="image" 
                        name="image" 
                        value={formData.image} 
                        onChange={handleImageChange} 
                        placeholder="Product Image Url"
                    />
                    
                    <label>Details:</label>
                    <input 
                        type="text" 
                        id="product" 
                        name="product" 
                        value={formData.product} 
                        onChange={handleOnChange} 
                        placeholder="Ex: Oil Painting"
                    />
                            
                    <label>Description:</label>
                    <input 
                        type="text" 
                        id="description" 
                        name="description" 
                        value={formData.description} 
                        onChange={handleOnChange} 
                        placeholder="Ex: 1503; Portrait"
                    />
                    
                    <label>Mediums:</label>
                    <select name="mediums" value={formData.mediums} onChange={handleOnChange}>
                        {options.map((medium)=> <option key={medium}>{medium}</option>)}
                    </select>

                    <label>Price:</label>
                    <input 
                        type="number" 
                        min="0" 
                        step="0.01"
                        id="price" 
                        name="price" 
                        value={formData.price} 
                        onChange={handleOnChange} 
                        placeholder= "Ex: 860000000"
                    />
                    
                    <a className='details' onClick={()=>setAddDimensions(!addDimensions)}>Add Dimensions?</a>
                        
                        <div className='product'>
                        {addDimensions ? 
                            <div className='dimensions'>
                                <label>Dimensions:</label>
                                <div className='d-form'>
                                    <input type="number" step="1" name="firstDimension" value={formData.firstDimension} onChange={handleOnChange}/>
                                    <label>x</label> 
                                    <input type="number" step="1" name="secondDimension" value={formData.secondDimension} onChange={handleOnChange}/>
                                    <select name="unit" value={formData.unit} onChange={handleOnChange}>
                                        <option>"</option>
                                        <option>'</option>
                                    </select> 
                                </div>
                            </div> : null}   
                        </div>

                    <button type="submit">SUBMIT</button>
                </form>
        </div>
        </div>
    )
}

export default EditArtSubmission;