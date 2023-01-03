import React, {useState} from 'react'
import "../styles/Form.css"
import mona_lisa from "../style-images/mona_lisa.jpeg"

function Form({handleAddItem}) {
    const blankForm = {
        artist: "",
        image: "",
        title: "",
        product: "",
        price: "",
        description: "",
        mediums: [""]
    };

    const [formData, setFormData] = useState(blankForm)

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

                <label>Product Specifications:</label>
                <input 
                    type="text" 
                    id="product" 
                    name="product" 
                    value={formData.product} 
                    onChange={handleOnChange} 
                    placeholder="2ft 6in x 1ft 9in Oil Painting"
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
                <input 
                    type="text" 
                    id="mediums" 
                    name="mediums" 
                    value={formData.mediums} 
                    onChange={handleOnChange} 
                    placeholder="Oil paint"
                />

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
                <button type="submit">UPLOAD ARTWORK</button>
            </form>
        </div>
    )
}

export default Form