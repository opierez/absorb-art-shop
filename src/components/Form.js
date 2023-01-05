import React, {useState} from 'react'
import "../styles/Form.css"
import {useHistory} from "react-router-dom"



function Form({handleAddItem, handleGallery}) {
    const history = useHistory();
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

    function handleOnChange(e){
        const { name, value } = e.target;
        setFormData({...formData, [name]: value });
    }
    function handleImageChange(e){
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    }
    
    function showNewArtPage(){
        history.push(`/artwork/gallery`)
    }

    function handleSubmit(e){
        e.preventDefault();
        
        setFormData(blankForm);
        
        const newArtwork = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
          }
        
        fetch("http://localhost:6001/artwork", newArtwork)
            .then(resp => resp.json())
            .then(newArt => {
                handleAddItem(newArt); 
                handleGallery(newArt)
                showNewArtPage();
            })
            .catch(() => { 
            });
    }
    
    return (
        <div className='art-form'>
            <form className="form" autoComplete="off" onSubmit={handleSubmit}>
                <h1>Add an Artwork</h1>

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

                <button type="submit">UPLOAD ARTWORK</button>
            </form>
        </div>
    )
}

export default Form