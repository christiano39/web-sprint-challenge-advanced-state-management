import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getSmurfs } from '../actions';

const SmurfList = props => {
    useEffect(() => {
        props.getSmurfs();
    }, [])

    return (
        <div className='smurf-list'>
            <h1>Smurfs</h1>
            {props.error && <p className='error'>{props.error}</p>}
            {props.isLoading && <h3>Loading...</h3>}
            {props.smurfs.length > 0 && props.smurfs.map(smurf => (
                <div key={smurf.id} className='smurf'>
                    <Link to={`smurfs/${smurf.id}`}><p>{smurf.name}</p></Link>
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