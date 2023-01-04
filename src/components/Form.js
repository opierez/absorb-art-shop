import React, {useState} from 'react'
import "../styles/Form.css"



function Form({handleAddItem}) {
    const options = ["Photography", "Illustration", "Print", "Fashion", "Painting", "Drawing", "Sculpture", "Mixed Media", "Digital Art"]

    const blankForm = {
        artist: "",
        image: "",
        title: "",
        product: "",
        price: "",
        description: "",
        mediums: ""
    };
    
    const [formData, setFormData] = useState(blankForm)
    const [addDetails, setAddDetails] = useState(false)
    const [addDimensions, setAddDimensions] = useState(false)

    function handleOnChange(e){
        const { name, value } = e.target;
        setFormData({...formData, [name]: value });
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
                    placeholder="Mona Lisa"
                />

                <label>Artist:</label>
                <input 
                    type="text" 
                    id="artist" 
                    name="artist" 
                    value={formData.artist} 
                    onChange={handleOnChange} 
                    placeholder="Leonardo da Vinci"
                />

                <label>Image:</label>
                <input 
                    type="text" 
                    id="image" 
                    name="image" 
                    value={formData.image} 
                    onChange={handleOnChange} 
                    placeholder="Product Image"
                />

                <label>Description:</label>
                <input 
                    type="text" 
                    id="description" 
                    name="description" 
                    value={formData.description} 
                    onChange={handleOnChange} 
                    placeholder="1503; Portrait"
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
                    placeholder= "860,000,000"
                />
                <div className='btns'>
                    <a className='details' onClick={()=>setAddDimensions(!addDimensions)}>Add Dimensions?</a>
                    <a className='details' onClick={()=>setAddDetails(!addDetails)}>Add Additional Details?</a>
                </div>
                    
                    <div className='product'>
                        {addDimensions ? 
                            <div className='dimensions'>
                                <label>Dimensions:</label>
                                <div className='d-form'>
                                    <input type='number'/>
                                    <select>
                                        <option>"</option>
                                        <option>'</option>
                                    </select>
                                    <input type='number'/>
                                    <select>
                                        <option>"</option>
                                        <option>'</option>
                                    </select>
                                    <label>x</label>
                                    <input type='number'/>
                                    <select>
                                        <option>"</option>
                                        <option>'</option>
                                    </select> 
                                    <input type='number'/>
                                    <select>
                                        <option>"</option>
                                        <option>'</option>
                                    </select> 
                                </div>
                            </div> : null} 
                        {addDetails ?
                            <div className='details-form'>
                            <label>Details:</label>
                            <input 
                            type="text" 
                            id="product" 
                            name="product" 
                            value={formData.product} 
                            onChange={handleOnChange} 
                            placeholder="Oil Painting"
                            />
                            </div> : null}   
                    </div>

                <button type="submit">UPLOAD ARTWORK</button>
            </form>
        </div>
    )
}

export default Form