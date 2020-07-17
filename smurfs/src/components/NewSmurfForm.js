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
            height: `${formValues.height}cm`
        }
        props.postSmurf(newSmurf);
        setFormValues(initialFormValues);
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
                    data-testid='name'
                />
            </label>
            <br/>
            <br/>
            <label htmlFor='age'>Age:&nbsp;
                <input 
                    type='number'
                    id='age'
                    name='age'
                    value={formValues.age}
                    onChange={onInputChange}
                />
            </label>
            <br/>
            <br/>
            <label htmlFor='height'>Height(cm):&nbsp;
                <input 
                    type='number'
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
            {props.formError && <p className='error'>{props.formError}</p>}
        </form>
    )
}

const mapStateToProps = state => {
    return {
        isPosting: state.isPosting,
        formError: state.formError
    }
}

export default connect(mapStateToProps, { postSmurf })(NewSmurfForm);