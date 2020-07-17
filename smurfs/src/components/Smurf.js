import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const Smurf = props => {
    const { smurfId } = useParams();
    const smurf = props.smurfs.filter(smf => {
        if (smf.id === parseInt(smurfId)){
            return true;
        }else{
            return false;
        }
    });
    console.log(smurf);
    
    return (
        <div className='smurf'>
            <p>{smurf[0].name}</p>
            <p>Age: {smurf[0].age}</p>
            <p>Height: {smurf[0].height}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {})(Smurf);