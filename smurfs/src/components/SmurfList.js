import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions';

const SmurfList = props => {
    useEffect(() => {
        props.getSmurfs();
    }, [])

    return (
        <div className='smurf-list'>
            {props.error && <p>{props.error}</p>}
            {props.isLoading && <h3>Loading...</h3>}
            {props.smurfs.length > 0 && props.smurfs.map(smurf => (
                <div key={smurf.id} className='smurf'>
                    <p>{smurf.name}</p>
                    <p>Age: {smurf.age}</p>
                    <p>Height: {smurf.height}</p>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { getSmurfs })(SmurfList);