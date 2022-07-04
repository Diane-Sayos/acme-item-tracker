import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const ThingDelete = ({ deleteThing, thing })=> {
  return (
    <div>
      <button onClick={ () => deleteThing(thing) }>x</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch)=> {
  return {
    deleteThing: async(thing)=> {
        await axios.delete(`/api/things/${thing.id}`);
        dispatch({type: 'DELETE_THING', thing})
    }
  };
}

export default connect(null, mapDispatchToProps)(ThingDelete);

        // const response = await axios.get('/api/things');
        // const things = response.data;
        // dispatch({ type: 'SET_THINGS', things });