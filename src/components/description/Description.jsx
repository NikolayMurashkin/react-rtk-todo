import './description.css';
import {useState} from "react";

const Description = ({description, setDescription}) => {


    return (
        <div className='description'>
            <p className="description__label">Description:</p>
            <textarea
                placeholder='Enter description here...'
                onChange={e => setDescription(e.target.value)}
                value={description}
                className="description__input"/>
        </div>
    )
}

export default Description;