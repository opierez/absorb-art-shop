import React, {useState} from 'react'

function Form() {
    const [artist, setArtist] = useState("")
    const [image, setImage] = useState("")
    const [title, setTitle] = useState("")
    const [product, setProduct] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [medium, setMedium] = useState("")
    return (
        <div>
            <h1>This is a Form</h1>
            <form>
                <input type="text" id="about" onChange={handleOnChange} />
            </form>
        </div>
    )
}

export default Form