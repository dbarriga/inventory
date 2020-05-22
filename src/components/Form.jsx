import React, { useState } from 'react';

const Form = (props) => {   
    const [formObject, handleForm] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        props.passForm(formObject);
        handleForm({});
    }
    const handleChange = ({target}) => {
        const formEdit = formObject;
        formEdit[target.name] = target.value;
        handleForm(formEdit);
    }

    return(
        <div className="form-component">
            <h1>Jerseys Inventory</h1>
            <form>
                <label>Sport:</label>
                <input type="text" name="sport" value={formObject.sport} onChange={handleChange}/>
                <label>Team:</label>
                <input type="text" name="team" value={formObject.team} onChange={handleChange}/>
                <br />
                <label>Number:</label>
                <input type="text" name="number" value={formObject.number} onChange={handleChange}/>
                <label>Name:</label>
                <input type="text" name="name" value={formObject.name} onChange={handleChange}/>
                <br />
                <label>Size:</label>
                <input type="text" name="size" value={formObject.size} onChange={handleChange}/>
                <label>Edition:</label>
                <input type="text" name="edition" value={formObject.edition} onChange={handleChange}/>
                <br />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default Form;