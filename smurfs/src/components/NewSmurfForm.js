import React, { useState } from 'react';
import { connect } from 'react-redux';

import { postSmurf } from '../actions'

const initialFormValues = {
    name: '',
    age: '',
    height: ''
}

const NewSmurfForm = props => {
    const [formValues, setFormValues] = useState(initialFormValues);

    const onInputChange = e => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        })
    };

    const addSmurf = e => {
        e.preventDefault();
        const newSmurf = {
            name: formValues.name,
            age: parseInt(formValues.age),
            height: formValues.height
        }
        props.postSmurf(newSmurf);
    }
    
    return (
        <form onSubmit={addSmurf}>
            <h2>Add new smurf</h2>
            <label htmlFor='name'>Name:&nbsp;
                <input 
                    type='text'
                    id='name'
                    name='name'
                    value={formValues.name}
                    onChange={onInputChange}
                />
            </label>
            <br/>
            <br/>
            <label htmlFor='age'>Age:&nbsp;
                <input 
                    type='text'
                    id='age'
                    name='age'
                    value={formValues.age}
                    onChange={onInputChange}
                />
            </label>
            <br/>
            <br/>
            <label htmlFor='height'>Height:&nbsp;
                <input 
                    type='text'
                    id='height'
                    name='height'
                    value={formValues.height}
                    onChange={onInputChange}
                />
            </label>
            <br/>
            <br/>
            <button>Add smurf</button>
            <br/>
            <br/>
            {props.isPosting && <p>Posting...</p>}
            {props.postError && <p>{props.postError}</p>}
        </form>
    )
}

const mapStateToProps = state => {
    return {
        isPosting: state.isPosting,
        postError: state.postError
    }
}

export default connect(mapStateToProps, { postSmurf })(NewSmurfForm);